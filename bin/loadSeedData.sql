copy "User"(id, name, "createdAt") from '/users.csv' csv header;
copy "Post"(id, "userId", title, body, starred, "createdAt") from '/posts.csv' csv header; 