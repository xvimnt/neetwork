import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const paymentRouter = createTRPCRouter({
  getAllByDate: protectedProcedure
    .input(
      z.object({
        startDate: z.date(),
        endDate: z.date(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.payment.findMany({
        take: 100,
        orderBy: {
          createdAt: "desc",
        },
        where: {
          createdAt: {
            gte: input.startDate,
            lte: input.endDate,
          },
        },
      });
    }),
});
