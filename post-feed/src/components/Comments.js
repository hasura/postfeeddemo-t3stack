import { api } from "~/utils/api";
import CommentLikes from "./CommentLikes";

function Comments({ postId }) {
  const likes = api.postComments.useQuery({ postId });

  return (
    (likes.data && (
      <div className="Comments">
        <h4>Recent Comments</h4>
        {likes.data.map((comment) => (
          <div key={comment.id} className="Comment">
            <p>{comment.body}</p>
            <CommentLikes commentId={comment.id} />
          </div>
        ))}
      </div>
    )) ||
    null
  );
}

export default Comments;
