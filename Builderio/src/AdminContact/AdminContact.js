import React from "react";
import "./AdminContact.css";

function AdminContact() {
  return (
    <p className="admin-contact">
      ※ 비밀번호 분실시 관리자에게 문의 바랍니다. <br />
      관리자 메일{" "}
      <a href="mailto:12345@gmail.com" className="admin-email">
        12345@gmail.com
      </a>
    </p>
  );
}

export default AdminContact;
