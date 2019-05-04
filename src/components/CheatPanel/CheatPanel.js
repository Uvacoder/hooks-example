import React from "react"

import "./CheatPanel.css"

const CheatPanel = () => {
  return (
    <details className="cp-details">
      <summary className="cp-summary">Cheat Sheet</summary>
      <li>
        <p>useState</p>
        <code>const [value, setValue] = useState('')</code>
      </li>
      <li>
        <p>useEffect</p>
        <code>useEffect(callback, [conditional trigger variables])</code>
      </li>
    </details>
  )
}

export default CheatPanel
