import { api } from "~/utils/api";

import LikeUser from "./LikeUser";

function Likes({ postId }) {
  const likes = api.postLikes.useQuery({ postId });

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

export default Likes;
