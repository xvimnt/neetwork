import { type Lot } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
interface LotsResponse {
  lots: Lot[];
  totalElements: number;
  totalPages: number;
}
export const lotRouter = createTRPCRouter({
  // This route include pagination
  getLots: publicProcedure
    .input(
      z.object({
        project: z.number().optional(),
        minimumArea: z.number().optional(),
        maximumArea: z.number().optional(),
        minimumPrice: z.number().optional(),
        maximumPrice: z.number().optional(),
        availability: z.boolean().optional(),
        page: z.number().optional(),
        elementsPerPage: z.number().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const {
        project,
        minimumArea,
        maximumArea,
        maximumPrice,
        minimumPrice,
        availability,
        page,
        elementsPerPage,
      } = input;

      let lots = [];
      const response = {} as LotsResponse;

      if (
        !project &&
        !minimumArea &&
        !maximumArea &&
        !maximumPrice &&
        !minimumPrice &&
        !availability
      ) {
        lots = await ctx.db.lot.findMany({
          take: page ? elementsPerPage : undefined,
          skip: page
            ? (page - 1) * (elementsPerPage ? elementsPerPage : 0)
            : undefined,

          include: {
            project: true,
          },
        });
        response.lots = lots;
        response.totalElements = await ctx.db.lot.count();
        response.totalPages = Math.ceil(
          response.totalElements / (elementsPerPage ? elementsPerPage : 1),
        );
      } else {
        lots = await ctx.db.lot.findMany({
          take: page ? elementsPerPage : undefined,
          skip: page
            ? (page - 1) * (elementsPerPage ? elementsPerPage : 0)
            : undefined,
          where: {
            projectId: project,
            totalArea: {
              gte: minimumArea,
              lte: maximumArea,
            },
            price: {
              gte: minimumPrice,
              lte: maximumPrice,
            },
            availability,
          },
          include: {
            project: true,
          },
        });
        response.lots = lots;
        response.totalElements = await ctx.db.lot.count({
          where: {
            projectId: project,
            totalArea: {
              gte: minimumArea,
              lte: maximumArea,
            },
            price: {
              gte: minimumPrice,
              lte: maximumPrice,
            },
          },
        });
        response.totalPages = Math.ceil(
          response.totalElements / (elementsPerPage ? elementsPerPage : 1),
        );
      }

      return response;
    }),

  createLot: protectedProcedure
    .input(
      z.object({
        projectId: z.number(),
        identifier: z.string(),
        price: z.number(),
        downPayment: z.number(),
        measures: z.string(),
        totalArea: z.number(),
        estateNumber: z.number(),
        folioNumber: z.number(),
        bookNumber: z.number(),
        location: z.string(),
        image: z.string(),
        northernBoundary: z.string(),
        southernBoundary: z.string(),
        easternBoundary: z.string(),
        westernBoundary: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const {
        projectId,
        identifier,
        price,
        downPayment,
        measures,
        totalArea,
        estateNumber,
        folioNumber,
        bookNumber,
        location,
        image,
        northernBoundary,
        southernBoundary,
        easternBoundary,
        westernBoundary,
      } = input;
      const lot = await ctx.db.lot.create({
        data: {
          projectId,
          identifier,
          price,
          downPayment,
          northernBoundary,
          southernBoundary,
          easternBoundary,
          westernBoundary,
          measures,          
          totalArea,
          estateNumber,
          folioNumber,
          bookNumber,
          location,
          image,
        },
      });
      return lot;
    }),

  infiniteLots: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.number().nullish(), // <-- "cursor" needs to exist, but can be any type
        availability: z.boolean().optional(),
        project: z.number().optional(),
        minimumArea: z.number().optional(),
        maximumArea: z.number().optional(),
        minimumPrice: z.number().optional(),
        maximumPrice: z.number().optional(),
        projects: z.array(z.number()).optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 50;
      const {
        cursor,
        project,
        projects,
        availability,
        minimumArea,
        maximumArea,
        minimumPrice,
        maximumPrice,
      } = input;

      let where = {};

      if (projects) {
        where = {
          availability,
          projectId: {
            in: input.projects,
          },
          totalArea: {
            gte: minimumArea,
            lte: maximumArea,
          },
          price: {
            gte: minimumPrice,
            lte: maximumPrice,
          },
        };
      }

      if (project) {
        where = {
          availability,
          projectId: project,
          totalArea: {
            gte: minimumArea,
            lte: maximumArea,
          },
          price: {
            gte: minimumPrice,
            lte: maximumPrice,
          },
        };
      }

      const items = await ctx.db.lot.findMany({
        take: limit + 1, // get an extra item at the end which we'll use as next cursor
        cursor: cursor ? { lotId: cursor } : undefined,
        orderBy: {
          lotId: "asc",
        },
        include: {
          project: true,
        },
        where,
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem!.lotId;
      }
      return {
        items,
        nextCursor,
      };
    }),

  countLots: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        project: z.number().optional(),
        projects: z.array(z.number()).optional(),
        availability: z.boolean().optional(),
        minimumArea: z.number().optional(),
        maximumArea: z.number().optional(),
        minimumPrice: z.number().optional(),
        maximumPrice: z.number().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 50;
      const {
        project,
        projects,
        availability,
        minimumArea,
        maximumArea,
        minimumPrice,
        maximumPrice,
      } = input;
      let count = 0;

      let where = {};

      if (projects) {
        where = {
          availability,
          projectId: {
            in: input.projects,
          },
          totalArea: {
            gte: minimumArea,
            lte: maximumArea,
          },
          price: {
            gte: minimumPrice,
            lte: maximumPrice,
          },
        };
      }

      if (project) {
        where = {
          availability,
          projectId: project,
          totalArea: {
            gte: minimumArea,
            lte: maximumArea,
          },
          price: {
            gte: minimumPrice,
            lte: maximumPrice,
          },
        };
      }
      count = await ctx.db.lot.count({
        where,
      });
      return {
        count,
        pages: Math.ceil(count / limit),
      };
    }),

  getLotById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const { id } = input;

      const lot = await ctx.db.lot.findUnique({
        where: { lotId: id },
        include: { project: true },
      });

      return lot;
    }),

  deleteLot: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const { id } = input;

      const lot = await ctx.db.lot.delete({
        where: { lotId: id },
      });

      return lot;
    }),
});
