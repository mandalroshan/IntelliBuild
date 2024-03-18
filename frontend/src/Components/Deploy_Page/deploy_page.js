import { AppBar, Box, Button, Divider, Paper, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Deploy_page = () => {
  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState("");
  const [selectedBtn, setSelectedBtn] = useState(true);
  useEffect(() => {}, [selectedBtn]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleTab(e) {
    setCurrentTab(e.target.name);
  }
  function handleBtnClick() {
    setSelectedBtn(!selectedBtn);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "50px",
        }}
      >
        <Box
          component="section"
          sx={{ p: 2, border: "1px dashed grey", width: "40%", mt: "20vh" }}
        >
          <div style={{ marginTop: "10px" }}>
            <Button
              variant={selectedBtn ? "contained" : ""}
              color={selectedBtn ? "success" : "primary"}
              onClick={handleBtnClick}
            >
              Expose as API{" "}
            </Button>
            <t> or </t>
            <Button
              variant={selectedBtn ? "" : "contained"}
              color={selectedBtn ? "primary" : "success"}
              onClick={handleBtnClick}
            >
              Deploy to Registry{" "}
            </Button>
            <Divider
              sx={{
                width: "100%",
                borderRadius: 2,
                border: "1px solid",
                mt: "20px",
                mb: "10px",
              }}
            />

            <Button variant="outlined">Paused/Delete as API</Button>
            <Box
              sx={{
                width: 400,
                height: 350,
                border: "2px solid grey",
                borderRadius: "15px",
                mt: "20px",
                ml: "30px",
              }}
            >
              <u>
                <h4>Logs</h4>
              </u>
            </Box>
          </div>
        </Box>
        <Divider orientation="horizontal" />
        <Paper elevation={3} sx={{ width: "40%", height: "50vh", mt: "20vh" }}>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Curl" name="curl" onClick={handleTab} />
              <Tab label="Python" name="python" onClick={handleTab} />
              <Tab label="Other" name="other" onClick={handleTab} />
            </Tabs>
            <Box
              sx={{
                width: 300,
                height: 250,
                border: "2px solid grey",
                borderRadius: "15px",
                mt: "20px",
                ml: "90px",
              }}
            ></Box>
          </Box>
        </Paper>
      </div>
    </>
  );
};
