import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Option {
  label: string;
  value: string | number;
}

interface BasicSelectProps {
  label: string;
  value: string | number | any;
  onChange: (event: SelectChangeEvent) => void;
  options: Option[];
  className?: string; 
}

const BasicSelect: React.FC<BasicSelectProps> = ({ label, value, onChange, options, className }) => {
  return (
    <Box>
      <FormControl className={className || 'w-40 ml-2 rounded-2xl'}>
        <InputLabel id="basic-select-label">{label}</InputLabel>
        <Select
          labelId="basic-select-label"
          id="basic-select"
          value={value}
          label={label}
          onChange={onChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
