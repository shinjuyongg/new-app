import React from "react";
import "./RegistrationSection.css";

function RegistrationSection() {
  return (
    <section className="registration-section">
      <h2 className="registration-title">앱 사용이 처음이라면?</h2>
      <div className="registration-button-container">
        <button type="button" className="registration-button">
          회원가입하기
        </button>
      </div>
    </section>
  );
}

export default RegistrationSection;
