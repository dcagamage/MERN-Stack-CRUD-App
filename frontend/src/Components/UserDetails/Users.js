import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import User from "../User/User";
import { useReactToPrint } from "react-to-print";

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Users() {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  const componentsRef = useRef();
  const handlePrint = useReactToPrint({
    contentRef: componentsRef,
    DocumentTitle: "Users Report",
    onafterprint: () => alert("User Report Successfully Downloaded !"),
  });

  return (
    <div>
      <Nav />
      <h1> User Details </h1>
      <hr />
      <div ref={componentsRef}>
        {users &&
          users.map((user, i) => (
            <div key={i}>
              <User user={user} />
            </div>
          ))}
      </div>
      <button onClick={handlePrint}>Download Report</button>
    </div>
  );
}

export default Users;
