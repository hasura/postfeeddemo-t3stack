import { useState, Suspense } from "react";
import { api } from "~/utils/api";
import PostList from "./PostList";

const BASE_USER_ID = 1;

export default function FullPage() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const user = api.userDetails.useQuery({ userId: BASE_USER_ID });

  return (
    <div className="App">
      <div className="Header">{user.data && user.data.name}</div>
      <PostList
        userId={BASE_USER_ID}
        selectedPostId={selectedPostId}
        setSelectedPostId={setSelectedPostId}
      />
      {/* <Suspense fallback={<div>Loading... </div>}>
        {(selectedPostId && <PostDetail postId={selectedPostId} />) ||
          "No post selected"}
      </Suspense> */}
    </div>
  );
}
