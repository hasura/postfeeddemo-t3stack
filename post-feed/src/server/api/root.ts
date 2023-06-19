import { z } from "zod";
import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  userDetails: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: { id: input.userId },
      });
    }),
  postsForUser: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.post.findMany({
        where: { userId: input.userId },
        select: { id: true, title: true, starred: true },
        orderBy: { createdAt: "desc" },
        take: 30,
      });
    }),
  postDetails: publicProcedure
    .input(z.object({ postId: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.post.findUnique({
        where: { id: input.postId },
      });
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
