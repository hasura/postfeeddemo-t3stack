import Star from "./Star";
import Likes from "./Likes";

export default function PostItem({ post, setSelectedPostId, isSelected }) {
  return (
    <div
      className={`PostItem ${isSelected && "selected"}`}
      onClick={() => setSelectedPostId(post.id)}
    >
      <h4>{post.title}</h4>
      <Star post={post} />
      <Likes postId={post.id} />
    </div>
  );
}
