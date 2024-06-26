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
        include: {
          completedLessons: true,
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
          completedLessons: true,
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
        currentLessonId: z.string().optional(),
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
          currentLessonId: input.currentLessonId,
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

  completeLesson: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        lessonId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const completedLesson = await ctx.db.completedLesson.findFirst({
        where: {
          assignationId: input.id,
          lessonId: input.lessonId,
        },
      });
      if (completedLesson) {
        return completedLesson;
      }

      // else create the completed lesson
      return await ctx.db.completedLesson.create({
        data: {
          assignationId: input.id,
          lessonId: input.lessonId,
        },
      });
    }),

  getProgress: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const assignation = await ctx.db.assignation.findFirst({
        where: {
          id: input.id,
        },
        include: {
          completedLessons: true,
        },
      });
      const course = await ctx.db.course.findFirst({
        where: {
          id: assignation?.courseId,
        },
        include: {
          sections: {
            include: {
              lessons: true,
            },
          },
        },
      });
      if (!assignation?.completedLessons.length || !course?.sections.length)
        return 0;
      const progress =
        assignation.completedLessons.length /
        course.sections.reduce((acc, section) => {
          return acc + section.lessons.length;
        }, 0);

      return progress;
    }),
});
