import React, { useEffect, useState, Component } from "react";

import posts from "../common/formData";
import postLoading from "../common/postLoading";

const StudentsList = () => {
  const PostLoading = postLoading(posts);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiURL = process.env.REACT_APP_API_URL + "/form/";

    fetch(apiURL)
      .then((data) => data.json())
      .then((posts) => {
        setAppState({ loading: false, posts: posts });
      });
  }, [setAppState]);
  return (
    <div>
      <PostLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  );
};
export default StudentsList;
