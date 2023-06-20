import { api } from "~/utils/api";

import LikeUser from "./LikeUser";

function CommentLikes({ commentId }) {
  const likes = api.commentLikes.useQuery({ commentId });

  return (
    (likes.data && (
      <div className="Likes">
        <small>Likes: </small>
        {likes.data.map((like) => (
          <LikeUser key={like.user.id} user={like.user} />
        ))}
      </div>
    )) ||
    null
  );
}

export default CommentLikes;
