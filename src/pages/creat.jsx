import React from "react";
import "./login.css";
import axios from "axios";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login logic here
    try {
      if (password === confirmPassword) {
        const response = await axios({
          method: "post",
          url: "http://localhost:5000/login",
          data: {
            email,
            password,
          },
        });
      } else throw new Error("Invalid credentials!");
    } catch (error) {
      console.log(error);
      alert(error?.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    // Perform signup logic here
    try {
      if (password === confirmPassword) {
        const response = await axios({
          method: "post",
          url: "http://localhost:5000/signup",
          data: {
            email,
            password:confirmPassword,
          },
        });
      } else throw new Error("Passwords do not match!");
    } catch (error) {
      console.log(error);
      alert(error?.message);
    }
  };

  return (
    <div className="main1">
      <h2 className="Modal">Create your account</h2>
      <p>welcome back</p>

      <button
        onClick={() =>
          (document.getElementById("id01").style.display = "block")
        }
        className="login"
      >
        Login
      </button>

      <div id="id01" className="modal">
        <form className="modal-content animate">
          <div className="imgcontainer">
            <span
              onClick={() =>
                (document.getElementById("id01").style.display = "none")
              }
              className="close"
              title="Close Modal"
            >
              &times;
            </span>
            <img
              src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
              alt="Avatar"
              className="avatar"
            />
          </div>

          <div className="container">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" onClick={handleLogin} className="ee">
              Login
            </button>
          </div>

          <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
            <button
              type="button"
              onClick={() =>
                (document.getElementById("id01").style.display = "none")
              }
              className="cancelbtn"
            >
              Cancel
            </button>
            <span className="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </div>

      <button
        onClick={() =>
          (document.getElementById("id02").style.display = "block")
        }
        className="sign"
      >
        Sign Up
      </button>

      <div id="id02" className="modal">
        <span
          onClick={() =>
            (document.getElementById("id02").style.display = "none")
          }
          className="close2"
          title="Close Modal"
        >
          &times;
        </span>
        <form className="modal-content">
          <div className="container">
            <h1 style={{ color: "black" }}>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <p>
              By creating an account you agree to our{" "}
              <a href="#" style={{ color: "dodgerblue" }}>
                Terms & Privacy
              </a>
              .
            </p>

            <div className="clearfix">
              <button
                type="button"
                onClick={() =>
                  (document.getElementById("id02").style.display = "none")
                }
                className="cancelbtn2"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSignup}
                className="signupbtn"
              >
                {/* <a href="/">Sign Up</a> */}
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;