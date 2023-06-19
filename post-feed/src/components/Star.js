import { useState } from "react";
import { api } from "~/utils/api";

export default function Star({ post }) {
  const starPostMutation = api.starPost.useMutation();

  const [starred, setStarred] = useState(post.starred);

  async function onStarClicked() {
    const res = await starPostMutation.mutateAsync({
      postId: post.id,
      starred: !starred,
    });
    setStarred(res.starred);
  }

  return (
    <div className="Star" onClick={onStarClicked}>
      {starred ? (
        <i className="fa-solid fa-star"></i>
      ) : (
        <i className="fa-regular fa-star"></i>
      )}
    </div>
  );
}
