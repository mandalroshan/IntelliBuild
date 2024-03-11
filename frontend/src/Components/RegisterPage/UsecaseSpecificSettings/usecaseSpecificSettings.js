import React from 'react'


export const UsecaseSpecificSettings = (props) => {
    console.log("Step 5 receive user object");
    console.log(props.user);

    const handleLastStep = () => {
        props.lastStep();
    }
  return (
      <div>
          <h2>User Specific Settings</h2>
    </div>
  )
}
