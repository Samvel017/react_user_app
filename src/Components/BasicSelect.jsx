import React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ genderSelectHandler }) {
  const [age, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 140 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Gender"
          required
          onChange={handleChange}
        >
          <MenuItem
            value={'male'}
            onClick={() => {
              genderSelectHandler('Male');
            }}
          >
            Male
          </MenuItem>
          <MenuItem
            value={'female'}
            onClick={() => {
              genderSelectHandler('Female');
            }}
          >
            Female
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
