import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const assignationRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        courseId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
      return await ctx.db.assignation.create({
        data: {
          userId: input.userId,
          courseId: input.courseId,
        },
      });
    }),

  read: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        courseId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.assignation.findFirst({
        where: {
          userId: input.userId,
          courseId: input.courseId,
        },
      });
    }),

  readInfinite: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(), // <-- "cursor" needs to exist, but can be any type
        userId: z.string().optional(),
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
      const assignations = await ctx.db.assignation.findMany({
        take: limit + 1, // get an extra item at the end which we'll use as next cursor
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          course: true,
          user: true,
        },
        where,
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (assignations.length > limit) {
        const nextItem = assignations.pop();
        nextCursor = nextItem!.id;
      }
      const count = await ctx.db.assignation.count({ where });
      return {
        assignations,
        nextCursor,
        pagesCount: Math.ceil(count / limit),
      };
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        completed: z.boolean().optional(),
        progress: z.number().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.assignation.update({
        where: {
          id: input.id,
        },
        data: {
          id: input.id,
          completed: input.completed,
          progress: input.progress,
        },
      });
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.assignation.delete({
        where: {
          id: input.id,
        },
      });
    }),

  count: protectedProcedure
    .input(
      z.object({
        courseId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.assignation.count({
        where: {
          courseId: input.courseId,
        },
      });
    }),
});
