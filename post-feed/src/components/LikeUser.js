function LikeUser({ user }) {
  return (
    <div className="LikeUser">
      <span title={user.name}>{user.name[0]}</span>
    </div>
  );
}

export default LikeUser;
