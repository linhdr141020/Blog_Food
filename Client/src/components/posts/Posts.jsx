import Post from "../post/Post";
import "./posts.css";

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((item, i) => (
        <Post key={i} post={item} />
      ))}
    </div>
  );
}
export default Posts;
