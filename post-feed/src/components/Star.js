export default function Star({ post }) {
  function onStarClicked() {}

  return (
    <div className="Star" onClick={onStarClicked}>
      {post.starred ? (
        <i className="fa-solid fa-star"></i>
      ) : (
        <i className="fa-regular fa-star"></i>
      )}
    </div>
  );
}
