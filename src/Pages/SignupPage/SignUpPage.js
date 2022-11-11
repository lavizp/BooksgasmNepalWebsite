import React, { useContext, useRef, useState } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import "./signup.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();
  const { signUp, currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    if (isLoading) return;
    if (passwordRef.current.value !== confirmpasswordRef.current.value) {
      console.error("Milena password haru");
      return;
    }
    setIsLoading(true);
    try {
      const { user } = signUp(
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/");
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  }
  return (
    <>
      <NavBar />
      <div className="loginPage">
        <div className="loginBox">
          <h1>Signup:</h1>
          <input
            type="email"
            ref={emailRef}
            placeholder="email"
            className="inputBox"
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="password"
            className="inputBox"
          />
          <input
            type="password"
            ref={confirmpasswordRef}
            placeholder="confirm password"
            className="inputBox"
          />

          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="loginButton"
          >
            Submit
          </button>
          <p className="pText">
            Already have an account?
            <a onClick={() => navigate("/signup")} className="aText">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
