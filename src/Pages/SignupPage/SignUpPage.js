import React, { useRef } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import "./signup.css";

export default function SignUpPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();

  const handleSubmit = (e) => {
    console.log(emailRef.current.value);
  };
  return (
    <div>
      <NavBar />
      <h1>Login</h1>
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
