import Star from "./Star";
import Likes from "./Likes";
import Comments from "./Comments";
import { api } from "~/utils/api";

export default function PostDetail({ postId }) {
  const post = api.postDetails.useQuery({ postId });
  const p = post.data;

  return (
    p && (
      <div className="PostDetail">
        <h3>{p.title}</h3>
        <Star post={p} />
        <p>{p.body}</p>
        <p>{p.createdAt.toString()}</p>
        {/* <p>{p.id}</p> */}
        <Likes postId={p.id} />
        <Comments postId={p.id} />
      </div>
    )
  );
}
