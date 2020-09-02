import React from "react";
import "./Header.css";
import MailIcon from "../../assets/comment.svg";

export const Header = ({ username }) => {
  return (
    <header className="header">
      <h1 className="welcomeText">Welcome, {username}</h1>
      <img src={MailIcon} alt="icon" width="70" />
    </header>
  );
};
