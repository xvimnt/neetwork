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
