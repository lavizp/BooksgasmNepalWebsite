import React, { useRef, useState } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import "./loginpage.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  }
  return (
    <div>
      <NavBar />
      <div className="loginBox">
        <h1>Login</h1>
        <input type="email" ref={emailRef} placeholder="email"></input>
        <input type="password" ref={passwordRef} placeholder="password"></input>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </div>
    </div>
  );
}
