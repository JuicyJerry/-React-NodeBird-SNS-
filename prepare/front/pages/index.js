import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "./components/AppLayout";
import PostCard from "./components/PostCard";
import PostForm from "./components/PostForm";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post, index) => (
        <PostCard key={post.id} post={post} /> // index를 키로 해주는건 안티패턴!(피해야하는 것) 특히 게시글이 지워질 가능성이 있으면 안 됨, 순서가 달라지거나 중간에 추가되는 경우에도 다만, 바뀌지 않을 경우는 써도 됨
      ))}
    </AppLayout>
  );
};

export default Home;
