import React, { useState, useEffect } from "react"

import Spinner from "./Spinner"

const DogPhoto = (props) => {
  return (
    <img src={props.url} alt="dog" />
  )
}

const ExampleUEResult = () => {
  const [url, setUrl] = useState('')

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then(data => setUrl(data.message))
  }, [])

  return (
    <>
      <h1>useEffect example</h1>
      {url !== '' ? <DogPhoto url={url} /> : <Spinner />}
    </>
  )
}

export default ExampleUEResult
