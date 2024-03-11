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


const steps = [
  {
    label: "UserForm",
    component: <UserForm />,
  },
  {
    label: "LLM Form",
    component: <LLMForm />,
  },
  {
    label: "Tools And Agents",
    component: <ToolsAndAgents />,
  },
  {
    label: "Prompt Manager",
    component: <PromptManager />,
  },
  {
    label: "Usecase Specific Settings",
    component: <UsecaseSpecificSettings />,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#005EB8" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function RegisterClick() {
  const [activeStep, setActiveStep] = React.useState(0);
  const done = { message: "Done", color: "green" };
  const InProgress = { message: "In Progress", color: "purple" };
  const status = InProgress;
  const navigate = useNavigate();
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

  const calledPreviousPage=()=> {
    navigate(<SideBar/>);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* app bar */}
      <AppBar position="static">
        <Toolbar style={{ height: "80px", fontSize: "40px" }} color="#005EB8">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, fontSize: '20px' }}
          >
            <ArrowCircleLeftOutlinedIcon onClick={calledPreviousPage} />
          </IconButton>

          <Typography variant="h5" color="inherit" component="div">
            Registration
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Left grid */}
      <Item sx={{ fontSize: "30px" }}>
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
                <Box sx={{ mb: 2 }}>
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
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
