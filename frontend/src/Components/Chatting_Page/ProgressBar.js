import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';

const Input = styled(MuiInput)`
  width: 50px;
`;

export default function InputSlider({ Min, Max, Step,Title, Default}) {

  const [value, setValue] = React.useState(parseInt(Default));

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? Min : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value <Min) {
      setValue(Min);
    } else if (value > Max) {
      setValue(Max);
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="input-slider" gutterBottom>
        {Title}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
         {Min}
        </Grid>
        <Grid item xs>
          <Slider
            value={parseFloat((value/Max)*100)}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
        {Max}
          <Input
            sx={{ml:2}}
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: {Step},
              min: {Min},
              max: {Max},
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
           
        </Grid>
        <Grid item>
        
        </Grid>
      </Grid>
    </Box>
  );
}