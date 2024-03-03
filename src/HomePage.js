import React from "react";
import StickManHeader from "./images/StickManHeader.png";
import "./App.css";

export default function HomePage() {
  return (
    <div className="HomePage">
      <header>
        <div className="header-text text-center">
          <h1>Stick Man Life</h1>
          <h2>Created by Austin and Gustas</h2>
        </div>
      </header>
      <div className="homepage-image  m-5">
        <img src={StickManHeader} className="img-fluid" />
      </div>
    </div>
  );
}
