import { useState } from "react";
import avatarLogo from "./assets/avatar.svg";
import "./App.css";

function App() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={avatarLogo} className="avatar" alt="个人头像" />
        <h1>张三</h1>
        <p className="title">前端开发工程师</p>
        <p className="bio">
          热爱编程，专注于React和前端技术栈的开发。喜欢探索新技术，追求代码质量和用户体验的完美统一。
        </p>
        <div className="social-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
