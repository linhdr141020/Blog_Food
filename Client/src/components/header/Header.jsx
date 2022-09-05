import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Food Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/12/hot-chocolate-bombs-9096w-1536x1025.webp"
        alt=""
      />
    </div>
  );
}
