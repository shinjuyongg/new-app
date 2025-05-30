import React from "react";
import "./StatusBar.css";

function StatusBar() {
  return (
    <div className="status-bar">
      <div className="status-bar-content">
        <time className="status-time">9:41</time>
        <div className="status-spacer"></div>
        <div className="status-icons">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff6b029bcb857c891954e17aea9becd5fbae2f8b?placeholderIfAbsent=true&apiKey=77a0e12fd7584b22b8798bf55a266449"
            alt="Signal strength"
            className="status-icon signal"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/554b25cc9d0e27dd06800a0663024681f12107a5?placeholderIfAbsent=true&apiKey=77a0e12fd7584b22b8798bf55a266449"
            alt="Battery level"
            className="status-icon battery"
          />
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
