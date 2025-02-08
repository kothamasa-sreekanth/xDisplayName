import React, { useState } from "react";

const FullNameForm = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [fullname, setfullname] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (firstname && lastname) {
      setfullname(`${firstname} ${lastname}`);
    }
  };

  const handlereset = () => {
    setfirstname("");
    setlastname("");
    setfullname("");
  };
  return (
    <div>
    <center>
      <h1>Full Name Display</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="firstname">First Name : </label>
        <input
          className="Firstname"
          type="text"
          required
          value={firstname}
          placeholder="Enter First Name"
          onChange={(e) => setfirstname(e.target.value)}
          onClick={handlereset}
        />
        <br />
        <label htmlFor="lastname">Last Name : </label>
        <input
          type="text"
          class="Lastname"
          required
          value={lastname}
          placeholder="Enter Last Name"
          onChange={(e) => setlastname(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullname && <h2>Full Name: {fullname}</h2>}
      </center>
    </div>

  );
};

export default FullNameForm;