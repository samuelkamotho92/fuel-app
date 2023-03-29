import React from 'react'

const trial = () => {
  return (
    <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <input
      style={{ padding: 10, marginBottom: 20 }}
      type="text"
      placeholder="username"
    />
    <input
      style={{ padding: 10, marginBottom: 20 }}
      type="password"
      placeholder="password"
    />
    <button  style={{ padding: 10, width:100 }}>
      Login
    </button>
  </div>
  )
}

export default trial