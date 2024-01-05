import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const courseRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        imageUrl: z.string(),
        skills: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const course = await ctx.db.course.create({
        data: {
          title: input.title,
          description: input.description,
          imageUrl: input.imageUrl,
          userId: input.userId,
          skills: input.skills.split(",").map((skill) => skill.trim()),
        },
      });

      return course;
    }),

  readInfinite: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(), // <-- "cursor" needs to exist, but can be any type
        userId: z.string().optional(),
        mostRecent: z.boolean().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input;
      let where = {};
      if (input.userId) {
        where = {
          userId: input.userId,
        };
      }
      if (input.mostRecent) {
        where = {
          ...where,
          createdAt: {
            gt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30),
          },
        };
      }
      const courses = await ctx.db.course.findMany({
        take: limit + 1, // get an extra item at the end which we'll use as next cursor
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          position: "asc",
        },
        include: {
          user: true,
          sections: {
            include: {
              lessons: {
                orderBy: {
                  position: "asc",
                },
              },
            },
            orderBy: {
              position: "asc",
            },
          },
          assignations: true,
        },
        where,
      });

      const coursesCount = await ctx.db.course.count({ where });

      let nextCursor: typeof cursor | undefined = undefined;
      if (courses.length > limit) {
        const nextItem = courses.pop();
        nextCursor = nextItem!.id;
      }
      return {
        courses,
        nextCursor,
        pagesCount: Math.ceil(coursesCount / limit),
      };
    }),

  read: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const course = await ctx.db.course.findUnique({
        where: {
          id: input.id,
        },
        include: {
          user: true,
          sections: {
            include: {
              lessons: {
                orderBy: {
                  position: "asc",
                },
              },
            },
            orderBy: {
              position: "asc",
            },
          },
          assignations: true,
        },
      });

      return course;
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const course = await ctx.db.course.delete({
        where: {
          id: input.id,
        },
      });

      return course;
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        imageUrl: z.string().optional(),
        skills: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const course = await ctx.db.course.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          description: input.description,
          imageUrl: input.imageUrl,
          skills: input.skills.split(",").map((skill) => skill.trim()),
        },
      });

      return course;
    }),
});
