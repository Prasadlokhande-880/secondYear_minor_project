import React from "react";
import "./feedback.css";
import axios from "axios";
import { useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const uploadFeedback = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4000",
        data: {
          name,
          age,
          phone,
          email,
          password,
          feedback,
        },
      });
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <br />
          <h1>Feedback</h1>
        </div>
        <div className="row">
          <h4 style={{ textAlign: "center" }}>We'd love to hear from you!</h4>
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide" style={{ float: "left" }}>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Name</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input
                type="text"
                onChange={(e) => setAge(e.target.value)}
                required
              />
              <label>Age</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: "right" }}>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: "right" }}>
              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <label>Phone Number</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
            </div>
          </div>

          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea
                onChange={(e) => setFeedback(e.target.value)}
                required
              ></textarea>
              <label>Feedback</label>
            </div>
          </div>
          <div className="col-xs-12" id="iiq">
            <div onClick={uploadFeedback} className="btn-lrg submit-btn">
              Send Message
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;