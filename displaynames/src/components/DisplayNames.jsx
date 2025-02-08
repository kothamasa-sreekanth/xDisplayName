import React, { useState } from 'react'

const DisplayNames = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [FullName, setFullName] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (FirstName.trim() && LastName.trim()) {
      setFullName(`${FirstName} ${LastName}`);
      setFirstName("");
      setLastName("");
    }
  };

  const handleClearFullName = () => {
    setFullName(""); // ✅ Clear full name when first name input is clicked
  };

  return (
    <div>
      <center>
        <h1>Full Name Display</h1>
        <form onSubmit={handlesubmit}>
          <div>
            <label>First Name : </label>
            <input className='Firstname' type="text" placeholder='First Name' value={FirstName} onChange={(e)=>setFirstName(e.target.value)} onClick={handleClearFullName} />
          </div>

          <div>
            <label>Last Name : </label>
            <input className='Lastname' type="text" placeholder='Last Name' value={LastName} onChange={(e)=>setLastName(e.target.value)} />
          </div>
          <button type='submit'>Submit</button>
        </form>
        
       {FullName && <h1>Full Name: {FullName}</h1>}
      </center>
    </div>
  )
}


export default DisplayNames;
