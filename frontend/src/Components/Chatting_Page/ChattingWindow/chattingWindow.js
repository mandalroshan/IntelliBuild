import React, { useState } from "react";
import "./chattingWindow.css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Switch from "@mui/material/Switch";
import InputSlider from "../ProgressBar";

export function ChattingWindow() {
  return (
    <div className="mainpage">
      <div className="leftOut">
        <LeftSection />
      </div>
      <div className="rightOut">
        <RightSection />
      </div>
    </div>
  );
}

//Left section

const LeftSection = () => {
  const [LLM, setLLM] = useState("select llm");
  const LLMoptions = [
    { id: 1, label: "LLM 1" },
    { id: 2, label: "LLM 2" },
    { id: 3, label: "LLM 3" },
  ];

  //llm selection change
  const LLMhandleChange = (event) => {
    setLLM(event.target.value);
    console.log(LLM);
  };
  const allChats = [
    {
      id: 1,
      chatName: "This is sample Chat 1 for chatgpt...",
    },
    {
      id: 2,
      chatName: "This is sample Chat 2 for chatgpt...",
    },
    {
      id: 3,
      chatName: "This is sample Chat 3 for chatgpt...",
    },
    {
      id: 4,
      chatName: "This is sample Chat 4 for chatgpt...",
    },
    {
      id: 5,
      chatName: "This is sample Chat 5 for chatgpt...",
    },
    {
      id: 6,
      chatName: "This is sample Chat 6 for chatgpt...",
    },
  ];
  return (
    <div className="leftSection">
      <div className="newChat text-center ms-5">
        <h3>Intellibuild</h3>
      </div>
      <div className="newChat">
        <div>
          <Button
            variant="outlined"
            fontSize='small'
            sx={{ width: "100%", ml: 5, mb: 5 }}
            color="success"
          >
            <span >
              {" "}
              <EditNoteIcon sx={{ fontSize: "30px" }} />
              New chat
            </span>
          </Button>
        </div>
      </div>
      <div className="allChats">
        <h6 style={{ backgroundColor: "grey" }}>Previous chat</h6>
        {allChats.map((chat) => (
          <div key={chat.id} className="chat">
            <Button sx={{ color: "black" }} className="text1">
              {chat.chatName}
            </Button>
          </div>
        ))}
      </div>
      <div className="newChat">
        <ViewInArRoundedIcon />
        
        <InputLabel>LLM</InputLabel>
        <Select
          sx={{width: "100%" }}
          color="primary"
          variant="standard"
          value={LLM}
          onChange={LLMhandleChange}
        >
          {LLMoptions.map((list) => (
            <MenuItem key={list.id} value={list.id}>
              {list.label}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="newChat">
          <img src="Images/kpmg2.webp" alt="" />
      </div>
    </div>
  );
};

//Right section
const RightSection = () => {
  const [message, setMessage] = useState("");

  const [allMessages, setAllMessages] = useState([]);
  console.log(message);
  //   const sendMessage = async () => {
  //     // console.log(message)
  //     let url = "https://api.openai.com/v1/chat/completions";

  //     let token = `Bearer openAiAPI`;
  //     let model = "gpt-3.5-turbo";

  //     let messagesToSend = [
  //       ...allMessages,
  //       {
  //         role: "user",
  //         content: message,
  //       },
  //     ];

  //     let res = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         Authorization: token,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         model: model,
  //         messages: messagesToSend,
  //       }),
  //     });
  //     let resjson = await res.json();
  //     if (resjson) {
  //       console.log(resjson);

  //       // console.log(resjson.choices[0].message)

  //       let newAllMessages = [...messagesToSend, resjson.choices[0].message];

  //       // console.log(newAllMessages)

  //       setAllMessages(newAllMessages);
  //       setMessage("");
  //     }
  //};
  function sendMessage() {
    let messagesToSend = [
      ...allMessages,
      {
        role: "user",
        content: message,
      },
    ];
    setAllMessages(messagesToSend);
    setMessage("");
    }
    const [open, setOpen] = useState(false);
    const handleClickOpen =
        () => {
            setOpen(true);
            console.log(open);
        };
        console.log(open);
    const handleClose =
        () => {
        setOpen(false);
      };
  return (
    <div className=" rightSection">
      <div style={{display: 'flex',position:'absolute',
  top:'5%',
  right:'5%',zIndex:'999'}}>
        <Button  variant="outlined" sx={{mr:2}} onClick={handleClickOpen}>
        Edit
      </Button>
        <MaxWidthDialog open={open} handleClose={handleClose} />

          <Button variant="contained" href="/deploy">Deploy</Button>
      </div>

      {allMessages.length > 0 ? (
        <div className="messages">
          {allMessages.map((msg, index) => (
            <div key={index} className="message">
              <img src={msg.role === "user" ? "Images/user-1.png" :"Images/kpmg2.webp"}alt="" />
              <div className="details">
                <h4>{msg.role === "user" ? "You" : "Assistant"}</h4>
                <p>{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="nochat ">
          <div className="s1">
            <img src="Images/kpmg-logo-1.png" />
            <h1>How can I help you today?</h1>
          </div>
          <div className="s2">
            <div className="suggestioncard">
              <h2>Recommend activities</h2>
              <p>psychology behind decision-making</p>
            </div>
            <div className="suggestioncard">
              <h2>Recommend activities</h2>
              <p>psychology behind decision-making</p>
            </div>
            <div className="suggestioncard">
              <h2>Recommend activities</h2>
              <p>psychology behind decision-making</p>
            </div>
            <div className="suggestioncard">
              <h2>Recommend activities</h2>
              <p>psychology behind decision-making</p>
            </div>
          </div>
        </div>
      )}

      <div className="bottomsection">
        <div className="messagebar">
          <input
            type="text"
            placeholder="Type your query..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <SendRoundedIcon onClick={sendMessage} className="Icon" />
        </div>
        <p>
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
};

///////// Edit parameter

function MaxWidthDialog({open,handleClose}) {
//   const [open, setOpen] = useState(false);
  const [value, setValue] = useState(true);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
  const handleValue = () => {
    setValue(!value);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Decoding</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <Box>
              Greedy 
              <FormControlLabel
                sx={{ mt: 1,ml:2 }}
                control={<Switch checked={value} onChange={handleValue} />}
              />
              Sampling <InfoOutlinedIcon  />
            </Box>

            <Box>
           
           <FormControlLabel
                sx={{ mt: 1 }}
                control={
                  <InputSlider
                    Min={0}
                    Max={2}
                    Step={0.1}
                    Title={"Temperature"}
                    Default={0.8}
                  />
                }
              />
            
              <FormControlLabel
                sx={{ mt: 1 }}
                control={
                  <InputSlider
                    Min={0}
                    Max={10}
                    Step={1}
                    Title={"Top K"}
                    Default={3}
                  />
                }
              />
              <FormControlLabel
                sx={{ mt: 1 }}
                control={
                  <InputSlider
                    Min={0}
                    Max={1}
                    Step={0.1}
                    Title={"Top P (nucleus sampling)"}
                    Default={1}
                  />
                }
              />

              <FormControlLabel
                sx={{ mt: 1 }}
                control={
                  <InputSlider
                    Min={1}
                    Max={2}
                    Step={1}
                    Title={"Repitition Penality"}
                    Default={2}
                  />
                }
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
