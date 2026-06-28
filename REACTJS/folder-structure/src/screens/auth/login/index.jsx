import React, { useState } from 'react'

function Login() {
  const [payload, setPaylaod] = useState({
    email: '',
    password: ''
  })

  const handleSendData = () => {
    console.log(payload)
  }
  return (
    <div>
      <h1>Login</h1>
      <input placeholder='Enter your email address' type='text' onChange={(e) => setPaylaod((prev) => ({ ...prev, email: e.target.value }))} />
      <input placeholder='Enter your password' type='password' onChange={(e) => setPaylaod((prev) => ({ ...prev, password: e.target.value }))} />

      <button onClick={handleSendData}>Submit</button>
    </div>
  )
}

export default Login