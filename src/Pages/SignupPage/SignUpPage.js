import React, { useRef, useState } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import "./signup.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();
  const { signUp } = useAuth();
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
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  }
  return (
    <div>
      <NavBar />
      <h1>Signup</h1>
      <input type="email" ref={emailRef} placeholder="email"></input>
      <input type="password" ref={passwordRef} placeholder="password"></input>
      <input
        type="password"
        ref={confirmpasswordRef}
        placeholder="confirm password"
      ></input>

      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </div>
  );
}
