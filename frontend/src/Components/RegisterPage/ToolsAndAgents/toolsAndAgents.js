import React, { useEffect, useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import AddTwoTone from "@mui/icons-material/AddTwoTone";
const AgentsAndTools = [
  { Agent: "DoSQL", tools: ["SQL Generator", "SQL Executer", "Plot Chart"] },
  { Agent: "DoSearch", tools: ["RAG", "KG RAG", "Internet Search"] },
];
export const ToolsAndAgents = ({formData, onChange}) => {
  const [SelectedAgents, setSelectedAgent] = useState({ Agent: "", tool: "" });
  useEffect(() => {
    console.log(JSON.stringify(SelectedAgents)); // Log the updated state
  }, [SelectedAgents]);

  function handleAgentChange(e) {
    const { name, value } = e.target;
    setSelectedAgent((prev) => ({ ...prev, [name]: value }));
    onChange({...formData, ToolsAndAgents: {...formData.ToolsAndAgents, [name]: value } });
    console.log(JSON.stringify(SelectedAgents));
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3} md={3}></Grid>
        <Grid item xs={8} md={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <FormControl sx={{ width: "120%", mt: 3 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Select Existing Agent
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={SelectedAgents.Agent}
                name="Agent"
                label="Select Existing Agents"
                onChange={handleAgentChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {AgentsAndTools.map((item) => (
                  <MenuItem key={item.Agent} value={item.Agent}>
                    {item.Agent}
                  </MenuItem>
                ))}
              </Select>
              <ToolsForSlectedAgents
                agentName={SelectedAgents.Agent}
                SelectedAgents={SelectedAgents}
                handleAgentChange={handleAgentChange}
              />
            </FormControl>
          </div>
          {/* popup button */}

          <OpenDialog />
        </Grid>
      </Grid>
    </div>
  );
};

function ToolsForSlectedAgents(props) {
  return (
    <div style={{ marginTop: "20px", backgroundColor: "Window" }}>
      {/* <h6 style={{ borderRadius:'10px',textDecoration:'underline'}}>Tools for {props.agentName}</h6> */}

      {AgentsAndTools.map((item) => {
        if (item.Agent === props.SelectedAgents.Agent) {
          return (
            <FormControl sx={{ width: "100%", mt: 3 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Select tools for {props.agentName}
              </InputLabel>
              <Select
                key={item.Agent} // Added key prop to Select component
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={props.SelectedAgents.tool}
                name="tool"
                label="Select Existing Agents"
                onChange={props.handleAgentChange}
              >
                {item.tools.map((tool) => (
                  <MenuItem key={tool} value={tool}>
                    {tool}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          );
        } // Return null if the condition is not met
      })}
    </div>
  );
}

///   Dialog for new agent
const OpenDialog = () => {
  const [newAgent, setNewAgent] = useState({
    AgentName: "",
    AgentRole: "",
    AgentRoleDesc: "",
    AgentTool: "",
  });
  useEffect(() => {
    console.log(JSON.stringify(newAgent));
  }, [newAgent]);
  function handleChange(e) {
    const { name, value } = e.target;
    setNewAgent((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit() {
    alert(JSON.stringify(newAgent));
    handleCloseDialog();
  }

  //handle dialog open/close
  const [open, setOpen] = useState(false);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        onClick={handleClickOpenDialog}
        variant="outlined"
        color="info"
        sx={{ mt: "50px", width: "100%", p: 0 }}
      >
        <AddTwoTone /> Create New Agent
      </Button>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>New Agent</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="AgentName"
            onChange={handleChange}
            label="Name of new Agent"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="role"
            name="AgentRole"
            onChange={handleChange}
            label="Role of Agent"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="description"
            name="AgentRoleDesc"
            onChange={handleChange}
            label="Description of Role"
            type="text"
            fullWidth
            variant="standard"
          />

          <FormControl sx={{ width: "90%", mt: 3 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Select tools
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={newAgent.AgentTool}
              name="AgentTool"
              label="Select Tool"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {AgentsAndTools[0].tools.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
              {AgentsAndTools[1].tools.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
