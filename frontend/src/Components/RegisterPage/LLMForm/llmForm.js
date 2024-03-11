import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
} from "@mui/material";
import styled from "@emotion/styled";

export const LLMForm = (props) => {
  const [InfoLLM, setInfoLLM] = useState([
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
  const BaseLLMoptions = [
    {
      id: 1,
      label: "Base LLM type 1",
      description:
        "creasing the elevation also makes the background color lighter.",
      category: "BaseLLM",
    },
    {
      id: 2,
      label: "Base LLM type 2",
      description:
        "creasing the elevation also makes the background color lighter. ",
      category: "BaseLLM",
    },
    {
      id: 3,
      label: "Base LLM type 3",
      description:
        "creasing the elevation also makes the background color lighter. ",
      category: "BaseLLM",
    },
  ];

  const DynamicLLMoptions = [
    {
      id: 4,
      label: "Dynamic LLM type 1",
      description:
        "creasing the elevation also makes the background color lighter. ",
      category: "DynamicLLM",
    },
    {
      id: 5,
      label: "Dynamic LLM type 2",
      description:
        "creasing the elevation also makes the background color lighter. ",
      category: "DynamicLLM",
    },
    {
      id: 6,
      label: "Dynamic LLM type 3",
      description:
        "creasing the elevation also makes the background color lighter. ",
      category: "DynamicLLM",
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
  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleChangeCheckBox = (option) => {
  //   setSelectedOption(option.id === selectedOption ? null : option.id);
  //   if (selectedOption === option.id) {
  //     setInfoLLM(InfoLLM.filter((obj) => obj.id !== option.id));
  //   } else {
  //     setInfoLLM([
  //       ...InfoLLM,
  //       {
  //         id: option.id,
  //         label: option.label,
  //         description: option.description,
  //         category: option.category,
  //       },
  //     ]);
  //   }
  // };
  const handleChangeCheckBox = (option) => {
    // Check if the option is already in InfoLLM
    const isOptionSelected = InfoLLM.some((item) => item.id === option.id);
    console.log(InfoLLM);

    // If the option is selected, remove it from InfoLLM
    // Otherwise, add it to InfoLLM
    if (isOptionSelected) {
      setInfoLLM(InfoLLM.filter((item) => item.id !== option.id));
    } else {
      setInfoLLM([...InfoLLM, option]);
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
              <Typography variant="h5" sx={{ width: "33%", flexShrink: 0 }}>
                Base LLM selection
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
                {BaseLLMoptions.map((option) => (
                  <Paper key={option.id}>
                    <FormGroup sx={{ bgcolor: "#f5f7f7", mb: 5 }}>
                      <FormControlLabel
                        sx={{ fontSize: "20%" }}
                        control={
                          <Checkbox
                            sx={{ m: 2, mr: 5 }}
                            checked={InfoLLM.some((item) => item.id === option.id)}
                    onChange={() => handleChangeCheckBox(option)}
                            inputProps={{ "aria-label": "" }}
                            value={option}
                          />
                        }
                        label={
                          <Typography variant="h6">{option.label}</Typography>
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
              <Typography variant="h5" sx={{ width: "33%", flexShrink: 0 }}>
                Base LLM selection
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
                {DynamicLLMoptions.map((option) => (
                  <Paper key={option.id}>
                    <FormGroup sx={{ bgcolor: "#f5f7f7", mb: 5 }}>
                      <FormControlLabel
                        sx={{ fontSize: "20%" }}
                        control={
                          <Checkbox
                            sx={{ m: 2, mr: 5 }}
                            checked={InfoLLM.some((item) => item.id === option.id)}
                    onChange={() => handleChangeCheckBox(option)}
                            inputProps={{ "aria-label": "" }}
                            value={option}
                          />
                        }
                        label={
                          <Typography variant="h6">{option.label}</Typography>
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
