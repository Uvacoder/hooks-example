import React from "react"

import "./CheatPanel.css"

const CheatPanel = () => {
  return (
    <div>
      <input type="checkbox" id="accordion"/>
      <label htmlFor="accordion" className="accordion_parent">
        <p className="accordion-title">Cheat Sheet</p>
        <span className="icon"></span>
      </label>
      <ul className="accordion-children">
        <li>
          <p>useState</p>
          <code>const [value, setValue] = useState('')</code>
        </li>
        <li>
          <p>useEffect</p>
          <code>useEffect(callback, [conditional trigger variables])</code>
        </li>
      </ul>
    </div>
  )
}

export default CheatPanel
