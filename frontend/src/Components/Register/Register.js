import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => {
        alert("Register Success");
        history("/userdetails");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/register", {
        name: String(user.name),
        gmail: String(user.gmail),
        password: String(user.password),
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <Nav />
      <h1>User Register</h1> <br />
      <form onSubmit={handleSubmit}>
        <label>Name</label> <br />
        <input
          type="text"
          value={user.name}
          onChange={handleInputChange}
          name="name"
          required
        ></input>{" "}
        <br />
        <br />
        <label>Gmail</label> <br />
        <input
          type="text"
          value={user.gmail}
          onChange={handleInputChange}
          name="gmail"
          required
        ></input>{" "}
        <br />
        <br />
        <label>Password</label> <br />
        <input
          type="password"
          value={user.password}
          onChange={handleInputChange}
          name="password"
          required
        ></input>{" "}
        <br />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
