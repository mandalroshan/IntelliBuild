import styled from "@emotion/styled";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const UserForm = (props) => {
  const [InfoUser, setInfoUser] = useState({});
  const [error, setError] = useState("");
  const validateUser = () => {
    setError("");
    props.nextStep();
  };
  const UserTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#00338D",
      maxWidth: "50%",
      fontSize: "20px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E0E3E7",
      },
      "&:hover fieldset": {
        borderColor: "#B2BAC2",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6F7E8C",
      },
    },
  });
  return (
    <div style={{ marginBlock: "40px" }}>
      <span style={{ color: "green" }}>{error}</span>
      <h3>This is User form</h3>
      <Grid container spacing={2}>
        <Grid item xs={2} md={2}></Grid>
        <Grid item xs={6} md={4}>
          <UserTextField fullWidth label="Usercase Name" id="usercase-name" />
          <MultipleSelectPlaceholder />
        </Grid>
        <Grid item xs={4} md={4}>
          <UserTextField
            fullWidth
            label="Usercase Description"
            id="description"
          />
        </Grid>
      </Grid>
    </div>
  );
};

//switch list

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ mt: 1, width: '100%', mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
