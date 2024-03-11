import React, { useState } from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HandymanIcon from '@mui/icons-material/Handyman';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Paper,
} from "@mui/material";
import styled from "@emotion/styled";

export const ToolsAndAgents = (props) => {
  const [InfoTools, setInfoTools] = useState([
    {
      id: 0,
      label: "",
      category: "",
    },
  ]);
  const [error, setError] = useState("");
  const validateLLM = () => {
    setError("");
    props.nextStep();
  };
  const ToolsOptions = [
    {
      id: 1,
      label: "Tool type 1",
      description:
        "creasing the elevation also makes the background color lighter.",
      category: "Tool",
    },
    {
      id: 2,
      label: "Tool type 2",
      description:
        "creasing the elevation also makes the background color lighter. ",
      category: "Tool",
    },
    {
      id: 3,
      label: "Tool type 3",
      description:
        "creasing the elevation also makes the background color lighter. ",
      category: "Tool",
    },
  ];

  const AgentsOptions = [
    {
      id: 4,
      label: "Agents type 1",
      description:
        "creasing the elevation also makes the background color lighter. ",
      category: "AgentsOptions",
    },
    {
      id: 5,
      label: "Agents type 2",
      description:
        "creasing the elevation also makes the background color lighter. ",
      category: "AgentsOptions",
    },
    {
      id: 6,
      label: "Agents type 3",
      description:
        "creasing the elevation also makes the background color lighter. ",
      category: "AgentsOptions",
    },
  ];
  // handling acordian
  const [expanded, setExpanded] = useState(false);

  const handleChangeAccordian = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //Item css
  const Item = styled(Paper)(({ theme }) => ({
    // ...theme.typography.body2,
    textAlign: "left",
    // color: theme.palette.text.secondary,
    height: 60,
    lineHeight: "60px",
  }));

  //handling checkbox.
  const handleChangeCheckBox = (option) => {
    // Check if the option is already in InfoTools
    const isOptionSelected = InfoTools.some((item) => item.id === option.id);
    console.log(InfoTools);

    // If the option is selected, remove it from InfoTools
    // Otherwise, add it to InfoTools
    if (isOptionSelected) {
      setInfoTools(InfoTools.filter((item) => item.id !== option.id));
    } else {
      setInfoTools([...InfoTools, option]);
    }
  };

  return (
    <div>
      <span style={{ color: "green" }}>{error}</span>

      <Grid container spacing={2}>
        <Grid item xs={2} md={2}></Grid>
        <Grid item xs={8} md={4}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChangeAccordian("panel1")}
            sx={{
              width: "200%",
              flexShrink: 0,
              marginBottom: "10%",
              fontSize: "20%",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <IconButton>
                <HandymanIcon fontSize='large'/>
              </IconButton>
              <Typography variant="h5" sx={{ width: "33%", flexShrink: 0 }}>
               Tools Configuration
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 300,
                    height: 250,
                    fontSize: 20,
                  },
                }}
              >
                {ToolsOptions.map((option) => (
                  <Paper key={option.id}>
                    <FormGroup sx={{ bgcolor: "#f5f7f7", mb: 5 }}>
                      <FormControlLabel
                        sx={{ fontSize: "20%" }}
                        control={
                          <Checkbox
                            sx={{ m: 2, mr: 5 }}
                            checked={InfoTools.some((item) => item.id === option.id)}
                    onChange={() => handleChangeCheckBox(option)}
                            inputProps={{ "aria-label": "" }}
                            value={option}
                          />
                        }
                        label={
                          <Typography variant="h6">{option.label} <IconButton sx={{marginLeft:5,}}>
                          <DiamondOutlinedIcon fontSize='medium'/>
                        </IconButton></Typography>
                          
                        }
                      />
                      
                    </FormGroup>
                    {option.description}
                  </Paper>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
          {/* second accordian */}
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChangeAccordian("panel2")}
            sx={{
              width: "200%",
              flexShrink: 0,
              marginBottom: "10%",
              fontSize: "20%",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <IconButton>
                <SupportAgentIcon fontSize='large'/>
              </IconButton>
              <Typography variant="h5" sx={{ width: "33%", flexShrink: 0,textAlign:'center' }}>
                Agents
              </Typography>
              
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 300,
                    height: 250,
                    fontSize: 20,
                  },
                }}
              >
                {AgentsOptions.map((option) => (
                  <Paper key={option.id}>
                    <FormGroup sx={{ bgcolor: "#f5f7f7", mb: 5 }}>
                      <FormControlLabel
                        sx={{ fontSize: "20%" }}
                        control={
                          <Checkbox
                            sx={{ m: 2, mr: 5 }}
                            checked={InfoTools.some((item) => item.id === option.id)}
                    onChange={() => handleChangeCheckBox(option)}
                            inputProps={{ "aria-label": "" }}
                            value={option}
                          />
                        }
                        label={
                          <Typography variant="h6">{option.label} <IconButton sx={{marginLeft:3,}}>
                          <DiamondOutlinedIcon fontSize='medium'/>
                        </IconButton></Typography>
                        }
                      />
                    </FormGroup>
                    {option.description}
                  </Paper>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
};


// export const ToolsAndAgents = (props) => {
//     const [InfoTool, setInfoTools] = useState({});
//     const [error,setError] = useState("");
//     const validateTools = () => {
//         setError("");
//         props.nextStep();
//     }
//   return (
//       <div>
//           <span style={{ color: 'green' }}>{error}</span>
//           <h1>This is Tools and Agents</h1>

//     </div>
//   )
// }
