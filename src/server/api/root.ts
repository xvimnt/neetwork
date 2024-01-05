import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { courseRouter } from "./routers/course";
import { sectionRouter } from "./routers/section";
import { lessonRouter } from "./routers/lesson";
import { assignationRouter } from "./routers/assignation";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  course: courseRouter,
  section: sectionRouter,
  lesson: lessonRouter,
  assignation: assignationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
