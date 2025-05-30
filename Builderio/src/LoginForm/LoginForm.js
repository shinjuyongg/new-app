import React from "react";
import "./LoginForm.css";

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="text"
        placeholder="아이디 (학번)"
        className="login-input"
        aria-label="Student ID"
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="login-input password"
        aria-label="Password"
      />
      <div className="login-button-container">
        <button type="submit" className="login-button">
          로그인하기
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
