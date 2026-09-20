import React from 'react'

function App() {
  const callapi = async () => {
    await fetch("https://backend-smit.vercel.app/add-product", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: "product 1", desc: "abc", price: 120 })
    })
  }
  return (
    <>
      <div>App</div>
      <button onClick={() => callapi()}>Add Product</button>
    </>
  )
}

export default App