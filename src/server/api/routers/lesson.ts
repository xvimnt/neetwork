import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const lessonRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        sectionId: z.string(),
        videoUrl: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
      return await ctx.db.lesson.create({
        data: {
          title: input.title,
          sectionId: input.sectionId,
          videoUrl: input.videoUrl,
        },
      });
    }),

  readInfinite: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(), // <-- "cursor" needs to exist, but can be any type
        sectionId: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input;
      let where = {};
      if (input.sectionId) {
        where = {
          sectionId: input.sectionId,
        };
      }
      const lessons = await ctx.db.lesson.findMany({
        take: limit + 1, // get an extra item at the end which we'll use as next cursor
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          createdAt: "desc",
        },
        where,
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (lessons.length > limit) {
        const nextItem = lessons.pop();
        nextCursor = nextItem!.id;
      }
      return {
        lessons,
        nextCursor,
      };
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.lesson.delete({
        where: {
          id: input.id,
        },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        videoUrl: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.lesson.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          videoUrl: input.videoUrl,
        },
      });
    }),
});
