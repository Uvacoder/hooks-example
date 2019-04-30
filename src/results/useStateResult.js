import React, { useState } from "react"

import "./example.css"

const ExampleUSResult = () => {
  const [value, setValue] = useState('')

  const onChange = event => {
    setValue(event.target.value)
  }

  return (
    <>
      <h1>useState example</h1>

      <input
        type="text"
        value={value}
        onChange={onChange}
      />

      <p>{value}</p>
    </>
  )
}

export default ExampleUSResult
