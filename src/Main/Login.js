import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <form className="login_form_left">
        <h4>Title</h4>
        <input type="text"></input>
        <h4>Author</h4>
        <input type="text"></input>
        <h4>ISBN</h4>
        <input type="text"></input>
        <button type="button" className="btn btn-success">
          Success
        </button>
      </form>
      <form className="login_form_right">

        <input type="text"></input>
      </form>
    </div>
  );
}
