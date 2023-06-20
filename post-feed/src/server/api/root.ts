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
        orderBy: { id: "asc" },
        take: 100,
      });
    }),
  postDetails: publicProcedure
    .input(z.object({ postId: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.post.findUnique({
        where: { id: input.postId },
      });
    }),
  postComments: publicProcedure
    .input(z.object({ postId: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.comment.findMany({
        where: { postId: input.postId },
        orderBy: { createdAt: "desc" },
        take: 100,
      });
    }),
  postLikes: publicProcedure
    .input(z.object({ postId: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.like.findMany({
        where: { postId: input.postId },
        include: { user: true },
        orderBy: [{ createdAt: "desc" }, { id: "asc" }],
        take: 4,
      });
    }),
  commentLikes: publicProcedure
    .input(z.object({ commentId: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.commentLike.findMany({
        where: { commentId: input.commentId },
        include: { user: true },
        orderBy: [{ createdAt: "desc" }, { id: "asc" }],
        take: 4,
      });
    }),
  starPost: publicProcedure
    .input(z.object({ postId: z.number(), starred: z.boolean() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.post.update({
        where: { id: input.postId },
        data: { starred: input.starred },
      });
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
