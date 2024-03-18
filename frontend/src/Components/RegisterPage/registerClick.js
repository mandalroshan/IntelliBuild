import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
// import MenuIcon from '@mui/icons-material/Menu';
import { LLMForm } from "./LLMForm/llmForm";
import { ToolsAndAgents } from "./ToolsAndAgents/toolsAndAgents";
import { PromptManager } from "./PromptManager/promptManager";
import { UserForm } from "./UserForm/userForm";
import { UsecaseSpecificSettings } from "./UsecaseSpecificSettings/usecaseSpecificSettings";
import { light } from "@mui/material/styles/createPalette";
import { useNavigate } from "react-router-dom";
import { SideBar } from "../Landing_Page/home";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#005EB8" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function RegisterClick() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({ userName :'Anand',status:false});
  const done = { message: "Done", color: "green" };
  const InProgress = { message: "In Progress", color: "purple" };
  const status = InProgress;
  const navigate = useNavigate();
  function handleFormChange(newData) {
    setFormData({ ...formData, ...newData });
  }
  const steps = [
    {
      label: "UserForm",
      component: <UserForm formData={formData} onChange={handleFormChange} />,
    },
    {
      label: "LLM Form",
      component: <LLMForm formData={formData} onChange={handleFormChange} />,
    },
    {
      label: "Tools And Agents",
      component: (
        <ToolsAndAgents formData={formData} onChange={handleFormChange} />
      ),
    },
    {
      label: "Prompt Manager",
      component: <PromptManager />,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length) {
      status = done;
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  //Dialog button
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log(JSON.stringify(formData));
    setOpen(false);
    alert(`usecase ${formData.UserForm.useCaseName} Added.`);
  };

  const calledPreviousPage = () => {
    navigate("/home");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* app bar */}
      <AppBar position="static">
        <Toolbar style={{ height: "60px", fontSize: "35px" }} color="#005EB8">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 3 }}
            onClick={calledPreviousPage}
          >
            <ArrowCircleLeftOutlinedIcon fontSize="large" />
          </IconButton>

          <Typography variant="h5" color="inherit" component="div">
            Register New Usecase
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Left grid */}
      <Item>
        <Stepper variant="h6" activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step variant="h6" key={step.label}>
              <StepLabel
                variant="h4"
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                <Typography varient="h4">{step.label}</Typography>
              </StepLabel>
              <StepContent>
                {step.component}
                <Box sx={{ mb: 2, position: "absolute", right: 10, bottom: 1 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Item>

      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - Are you done?</Typography>
          <Button
            variant="outlined"
            color="success"
            sx={{ mt: 1, mr: 1 }}
            onClick={handleClickOpen}
          >
            Yes
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            // PaperComponent={PaperComponent}
            // aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
              Do you want to save the details?
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                No
              </Button>
              <Button onClick={handleReset}>Reset</Button>
              <Button onClick={handleClose}>Yes</Button>
            </DialogActions>
          </Dialog>
        </Paper>
      )}
    </Box>
  );
}
