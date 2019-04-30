import React from "react"

import "./ExampleUS.css"

class ExampleUS extends React.Component {
  state = {
    value: ''
  }

  onChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <>
        <h1>useState example</h1>

        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        />

        <p>
          Value: {this.state.value}
        </p>
      </>
    )
  }
}

export default ExampleUS
