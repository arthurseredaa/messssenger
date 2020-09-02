import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";

export const Login = () => {
  return (
    <div className="login">
      <form>
        <input type="text" />
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
