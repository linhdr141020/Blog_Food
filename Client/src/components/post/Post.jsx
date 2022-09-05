import "./post.css";
import { Link } from "react-router-dom";

function Post({ post }) {
  const PF = process.env.REACT_APP_IMG_ROOT_URL;

  return (
    <div className="post">
      <Link to={`/post/${post._id}`} className="link">
        <img className="postImg" src={PF + post.photo} alt="" />
        <div className="postInfo">
          <div className="postCats"></div>
          <span className="postTitle">{post.title}</span>
          <hr />
          <div className="info">
            <div className="author">{post.username}</div>
            <div className="postDate">
              {new Date(post.createdAt).toDateString()}
            </div>
          </div>
        </div>
        <p className="postDesc">{post.desc}</p>
      </Link>
    </div>
  );
}
export default Post;
