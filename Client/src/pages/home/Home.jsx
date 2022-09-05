import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
// import axios from "axios";
import axios from "../../axios";
import { useLocation } from "react-router-dom";
import Posts from "../../components/posts/Posts";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
export default Home;
