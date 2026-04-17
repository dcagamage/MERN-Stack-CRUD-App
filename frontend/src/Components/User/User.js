import React from 'react'

function User(props) {

  const { _id, name, gmail, age, address } = props.user;

  return (
    <div>
      <h2> User Display </h2>
      <br></br>
      <h3>ID: {_id}</h3>
      <h3>Name: {name}</h3>
      <h3>Gmail: {gmail}</h3>
      <h3>Age: {age}</h3>
      <h3>Addess: {address}</h3>
      <button>Update</button>
      <button>Delete</button>
      <br/><br/>
    </div>
  )
}

export default User
