import { createTRPCRouter } from "~/server/api/trpc";
import { reservationRouter } from "./routers/reservation";
import { projectRouter } from "./routers/project";
import { paymentRouter } from "./routers/payment";
import { eventRouter } from "./routers/event";
import { lotRouter } from "./routers/lot";
import { userRouter } from "./routers/user";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  reservation: reservationRouter,
  project: projectRouter,
  payment: paymentRouter,
  event: eventRouter,
  lot: lotRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
