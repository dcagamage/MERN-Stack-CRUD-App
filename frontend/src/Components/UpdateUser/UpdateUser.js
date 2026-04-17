import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../Nav/Nav";

function UpdateUser() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    age: "",
    address: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/users/${id}`);
        // console.log("Full API Response:", res.data);
        if (res.data && res.data.users) {
          setInputs(res.data.users);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/users/${id}`, {
        name: String(inputs.name),
        gmail: String(inputs.gmail),
        age: Number(inputs.age),
        address: String(inputs.address),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/userdetails"));
  };

  return (
    <div>
      <Nav />
      <h1>Update User</h1> <br />
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
          required
        ></input>
        <br />
        <br />
        <label>gmail</label>
        <br />
        <input
          type="text"
          name="gmail"
          onChange={handleChange}
          value={inputs.gmail}
          required
        ></input>
        <br />
        <br />
        <label>age</label>
        <br />
        <input
          type="text"
          name="age"
          onChange={handleChange}
          value={inputs.age}
          required
        ></input>
        <br />
        <br />
        <label>address</label>
        <br />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={inputs.address}
          required
        ></input>
        <br />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UpdateUser;
