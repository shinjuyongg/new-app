import React from "react";
import StatusBar from "../StatusBar/StatusBar";
import LoginForm from "../LoginForm/LoginForm";
import AdminContact from "../AdminContact/AdminContact";
import RegistrationSection from "../RegistrationSection/RegistrationSection";
import "./LoginPage.css";

function LoginPage() {
  return (
    <main className="login-page">
      <header className="login-header">
        <StatusBar />
        <h1 className="login-title">로그인</h1>
      </header>

      <section className="login-content">
        <LoginForm />
        <AdminContact />
        <hr className="login-divider" />
        <RegistrationSection />
      </section>
    </main>
  );
}

export default LoginPage;
