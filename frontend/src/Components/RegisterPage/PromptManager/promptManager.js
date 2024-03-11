import React, { useState } from 'react'


export const PromptManager = (props) => {
    const [infoPrompt, setInfoPrompt] = useState({});
    const [error, setError] = useState("");
    const validatePrompt=() => {
        props.setError("");
    props.nextStep();
    }
  return (
      <div>
          <span style={{ color: 'green' }}>{error}</span>
          <h1>This is Prompt Manager</h1>


    </div>
  )
}
