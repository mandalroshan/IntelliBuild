import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";

const BaseLLMNames=['AZure OpenAI','LLaMa']

export const LLMForm = ({formData,onChange}) => {

  const [SelectedLLM, setSelectedLLM] = useState({llmName:'',llmDeployName:'',llmApi_key:''});
  function handleChange(e) {
    const { name, value } = e.target;
    setSelectedLLM((prevData) => ({ ...prevData, [name]: value }));
    onChange({...formData, LLMForm: {...formData.LLMForm, [name]: value } });
    console.log(JSON.stringify(SelectedLLM))
  }

  return (
    <div>

      <Grid container spacing={2}>
        <Grid item xs={3} md={3}></Grid>
        <Grid item xs={8} md={4}>
        <div>
      <FormControl sx={{ mt: 1, width: '90%', mt: 3 }}>
      
        <InputLabel id="demo-simple-select-helper-label">Base LLM</InputLabel>
              <Select
              error={SelectedLLM.llmName==""?true:false}
          required
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={SelectedLLM.llmName}
          name='llmName'
          label="baseLLMtype"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {BaseLLMNames.map((item) => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
         ))}
          
        </Select>
      </FormControl>
          </div>
          <LLMFormChange handleChange={handleChange} SelectedLLM={SelectedLLM} setSelectedLLM={setSelectedLLM} />

        </Grid>
      </Grid>
    </div>
  );
};
//llm form based on the user selection
function LLMFormChange(props) {
  if (props.SelectedLLM.llmName == 'AZure OpenAI') {
    return (<div style={{display:'flex',alignItems:'left',justifyContent:'space-between' ,width:'600px',marginTop:'15px'}}>
      <TextField id="Deployment-Name" onChange={props.handleChange} name="llmDeployName" label="Deployment Name" variant="standard" value={props.SelectedLLM.llmDeployName}/>
      <TextField id="API_KEY" label="API KEY" onChange={props.handleChange} name="llmApi_key" value={props.SelectedLLM.llmApi_key} variant="standard" />
    </div>)
  }
  else if (props.SelectedLLM.llmName == 'LLaMa') {
    return (<div style={{display:'flex',alignItems:'left',justifyContent:'space-between' ,width:'600px',marginTop:'15px'}}>
      <TextField id="API_KEY" label="API KEY"  onChange={props.handleChange} name="llmApi_key" value={props.SelectedLLM.llmApi_key}  variant="standard"/>
      
    </div>)
  }
}