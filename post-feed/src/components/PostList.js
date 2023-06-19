import { useState } from "react";
import { api } from "~/utils/api";
import PostItem from "./PostItem";

export default function PostList({
  userId,
  selectedPostId,
  setSelectedPostId,
}) {
  const posts = api.postsForUser.useQuery({ userId: userId });

  return (
    <div className="PostList">
      {posts.data &&
        posts.data.map((post) => (
          <PostItem
            post={post}
            key={post.id}
            setSelectedPostId={setSelectedPostId}
            isSelected={post.id === selectedPostId}
          />
        ))}
    </div>
  );
}
