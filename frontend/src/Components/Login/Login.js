import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const history = useNavigate();
  const [user, setUser] = useState({
    gmail: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async    (e) => {
    e.preventDefault();
    try{
        const reponse = await sendRequest();
        if (reponse.status === "ok") {
            alert("Login Success");
            history("/userdetails");
        } else {
            alert("Login Error");
        }
    } catch (err) {
        alert("error" + err.message);
    }
  };

  const sendRequest = async () => {
    return await axios
      .post("http://localhost:5000/login", {
        gmail: user.gmail,
        password: user.password,
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <Nav />
      <h1>User Login</h1> <br />
      <form onSubmit={handleSubmit}>
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
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
