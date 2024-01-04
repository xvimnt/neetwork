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
      const courses = await ctx.db.course.findMany({
        take: limit + 1, // get an extra item at the end which we'll use as next cursor
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          user: true,
          sections: {
            include: {
              lessons: true,
            },
          },
          assignations: true,
        },
        where,
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (courses.length > limit) {
        const nextItem = courses.pop();
        nextCursor = nextItem!.id;
      }
      return {
        courses,
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
        imageUrl: z.string(),
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
