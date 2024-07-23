import React, { useState } from 'react'
import './style.css';


const ValidationForm = () => {
  const [user, setuser] = useState("")
  const [password, setpassword] = useState("")
  const [userErr, setuserErr] = useState(false)
  const [passErr, setpassErr] = useState(false)

  const submitform = (event) => {
    if (user.length < 3 || password.length < 3) {
      alert("Enter Correct value")
     
    }
    else {
      alert("all good")
      console.log(user,password);

    }
    event.preventDefault()
  }

  const userHandler = (event) => {

    let item = event.target.value
    if (item.length < 3) {
      console.log("invalid")
      setuserErr(true)
    }
    else {
      setuserErr(false)
    }
    setuser(item)
    // console.log(event.target.value);
  }


  const passHandler = (event) => {

    let item = event.target.value
    if (item.length < 3) {
      console.log("invalid")
      setpassErr(true)
    }
    else {
      setpassErr(false)
    }
    setpassword(item)
    // console.log(event.target.value);
    

  }

  return (
    
      <div className='wrapper'>
        <h1>Login</h1>
        <form onSubmit={submitform}>
          <input type="text" placeholder='Enter User Id' onChange={(userHandler)} /> {userErr ? <span>user not valid</span> : ""} <br />
          <input type="password" placeholder='Enter User Password' onChange={(passHandler)} /> {passErr ? <span>password not valid</span> : ""} <br />
           <button type='submit'>Submit</button>
        </form>
      </div>
    
  )
}
export default ValidationForm;