import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { getRandomColors } from "~/utils/functions";

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        fetchLots: z.boolean(),
        fetchAvailableLots: z.boolean().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      // fetch all projects without lots data
      if (!input.fetchLots) {
        return await ctx.db.project.findMany({
          take: 100,
          orderBy: {
            createdAt: "desc",
          },
          include: {
            images: {},
          },
        });
      }
      // fetch all projects with all lots data
      if (!input.fetchAvailableLots) {
        return await ctx.db.project.findMany({
          take: 100,
          orderBy: {
            createdAt: "desc",
          },
          include: {
            lots: {},
            images: {},
          },
        });
      }
      // fetch all projects with available lots data
      return await ctx.db.project.findMany({
        take: 100,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          lots: {
            where: {
              availability: true,
            },
          },
          images: {},
        },
      });
    }),

  createProject: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        location: z.string(),
        blueprint: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { name, description, location, blueprint } = input;
      const project = await ctx.db.project.create({
        data: {
          name,
          description,
          location,
          blueprint,
        },
      });
      return project;
    }),

  infiniteProjects: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.number().nullish(), // <-- "cursor" needs to exist, but can be any type
      }),
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input;

      const items = await ctx.db.project.findMany({
        take: limit + 1, // get an extra item at the end which we'll use as next cursor
        cursor: cursor ? { projectId: cursor } : undefined,
        select: {
          projectId: true,
          name: true,
          description: true,
          location: true,
          blueprint: true,
          createdAt: true,
          // include count of lots
          _count: {
            select: {
              lots: true,
            },
          },
        },
        orderBy: {
          projectId: "asc",
        },
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem!.projectId;
      }

      const getSelledLots = async (projectId: number) => {
        return await ctx.db.lot.count({
          where: {
            projectId,
            reservations: {
              some: {
                status: 2,
              },
            },
          },
        });
      };

      const getReservedLots = async (projectId: number) => {
        return await ctx.db.lot.count({
          where: {
            projectId,
            reservations: {
              some: {
                status: 1,
              },
            },
          },
        });
      };

      return {
        items: await Promise.all(
          items.map(async (item) => {
            const reservedLots = await getReservedLots(item.projectId);
            const selledLots = await getSelledLots(item.projectId);
            return {
              ...item,
              reservedLots: reservedLots,
              selledLots: selledLots,
              totalLots: item._count.lots,
            };
          }),
        ),
        nextCursor,
      };
    }),

  getSingleById: publicProcedure
    .input(
      z.object({
        projectId: z.number(),
        fetchAvailableLots: z.boolean(),
      }),
    )
    .query(async ({ ctx, input }) => {
      if (!input.fetchAvailableLots) {
        return await ctx.db.project.findFirst({
          take: 100,
          orderBy: {
            createdAt: "desc",
          },
          include: {
            lots: {},
            images: {},
          },
          where: {
            projectId: input.projectId,
          },
        });
      }
      return await ctx.db.project.findFirst({
        take: 100,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          lots: {
            where: {
              availability: true,
            },
          },
          images: {},
        },
        where: {
          projectId: input.projectId,
        },
      });
    }),

  getProjectsChart: publicProcedure
    .input(
      z.object({
        startDate: z.date(),
        endDate: z.date(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const projects = await ctx.db.project.findMany({
        take: 100,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          lots: {
            include: {
              reservations: {
                where: {
                  updatedAt: {
                    gte: input.startDate,
                    lte: input.endDate,
                  },
                  status: 2,
                },
              },
            },
          },
        },
      });

      return {
        labels: projects.map((project) => project.name),
        datasets: [
          {
            label: `Ventas por proyecto`,
            data: projects.map((project) => {
              return project.lots.reduce((acc, lot) => {
                return (
                  acc +
                  lot.reservations.reduce((acc, reservation) => {
                    // reservation created date should be between the start and end date
                    return acc + reservation.price.toNumber();
                  }, 0)
                );
              }, 0);
            }),
            backgroundColor: getRandomColors(projects.length),
          },
        ],
      };
    }),

  getProgress: publicProcedure
    .input(
      z.object({
        endDate: z.date(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const projects = await ctx.db.project.findMany({
        take: 100,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          lots: {
            include: {
              reservations: {
                where: {
                  updatedAt: {
                    lte: input.endDate,
                  },
                  status: 2,
                },
              },
            },
          },
        },
      });
      return projects.map((project) => {
        // Total sells
        const totalPrices = project.lots.reduce((acc, lot) => {
          return (
            acc +
            lot.reservations.reduce((acc, reservation) => {
              return acc + reservation.price.toNumber();
            }, 0)
          );
        }, 0);
        // totalUnavailableLots percentage
        const totalUnavailableLots = project.lots.reduce((acc, lot) => {
          return acc + (lot.reservations.length ? 1 : 0);
        }, 0);
        return {
          projectId: project.projectId,
          name: project.name,
          totalPrices,
          sellsProgress: (totalUnavailableLots / project.lots.length) * 100,
        };
      });
    }),

  deleteProject: protectedProcedure
    .input(
      z.object({
        projectId: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const project = await ctx.db.project.delete({
        where: {
          projectId: input.projectId,
        },
      });
      return project;
    }),

  countProjects: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 50;

      const count = await ctx.db.project.count();

      return Math.ceil(count / limit);
    }),
});
