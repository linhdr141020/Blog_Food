import axios from "../../axios";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          console.log(error.response.data.message);
          setErrorMessage(error.response.data.message);
        }
      }
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />

        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <div className="errMessage" style={{ color: "red", marginTop: "10px" }}>
          {errorMessage}
        </div>
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>

      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
export default Login;
