copy "User"(id, name, "createdAt") from '/users.csv' csv header;
copy "Post"(id, "userId", title, body, starred, "createdAt") from '/posts.csv' csv header; 

copy "Like"(id, "userId", "postId") from '/likes.csv' csv header;

copy "Comment"(id, "postId", body, "createdAt") from '/comments.csv' csv header;
copy "CommentLike"(id, "userId", "commentId") from '/comments_likes.csv' csv header;