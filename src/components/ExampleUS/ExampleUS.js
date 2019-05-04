import React from "react"

import "../Example.css"

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
      <article className="example-us">
        <h1>useState example</h1>

        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        />

        <p>
          Value: {this.state.value}
        </p>
      </article>
    )
  }
}

export default ExampleUS
