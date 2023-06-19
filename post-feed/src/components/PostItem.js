import Star from "./Star";

export default function PostItem({ post, setSelectedPostId, isSelected }) {
  return (
    <div
      className={`PostItem ${isSelected && "selected"}`}
      onClick={() => setSelectedPostId(post.id)}
    >
      <h4>{post.title}</h4>
      <Star post={post} />
    </div>
  );
}
