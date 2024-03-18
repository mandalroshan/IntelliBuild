import styled from "@emotion/styled";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid, InputLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export const UserForm = ({formData,onChange}) => {
  const [InfoUser, setInfoUser] = useState({useCaseName:"",useCaseDescription:"",useCaseType:""});
  const [error, setError] = useState("");
  function handleChange(event) {
    const { name, value } = event.target;
    setInfoUser((prevData) => ({ ...prevData, [name]: value }));
    onChange({...formData, UserForm: {...formData.UserForm, [name]: value } });
    console.log(JSON.stringify(InfoUser));
  }

  return (
    <div style={{ marginBlock: "40px" }}>
      <Grid container spacing={2}>
        <Grid item xs={2} md={2}></Grid>
        <Grid item xs={4} md={4}>
          <TextField fullWidth label="Usercase Name" id="usercase-name" name="useCaseName" value={InfoUser.useCaseName} onChange={handleChange} />
          <FormControl sx={{ mt: 1, width: '90%', mt: 3 }}>
              <InputLabel id="demo-simple-select-helper-label">Usecase type</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="usercaseType"
                name="userCaseType"
                value={InfoUser.useCaseType}
                label="UseCase Type"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {useCaseNames.map((item) => (
                  <MenuItem key={item} value={item}>{item}</MenuItem>
              ))}
                
              </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4} md={4}>
          <TextField
            fullWidth
            label="Usercase Description"
            id="description"
            name="useCaseDescription"
            value={InfoUser.useCaseDescription}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </div>
  );
};



const useCaseNames = [
  "Conversation Bot",
  "Classification",
  "Summarization",
  "Extraction",

];


function MultipleSelectPlaceholder(props) {

  // const [useCaseTypeName, setuseCaseTypeName] = React.useState([]);

  // const handleChange = (event) => {
  //   setuseCaseTypeName(event.target.value);
  // };

  return (
    <div>
      <FormControl sx={{ mt: 1, width: '90%', mt: 3 }}>
      
        <InputLabel id="demo-simple-select-helper-label">Usecase type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="usercaseType"
          name="userCaseType"
          value={props.InfoUser.useCaseType}
          label="UseCase Type"
          onChange={props.handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {useCaseNames.map((item) => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
         ))}
          
        </Select>
      </FormControl>
      {/* </FormControl> */}
    </div>
  );
}
