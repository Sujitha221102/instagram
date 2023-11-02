import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Typography } from "@mui/material";

export default function SearchInput() {
  return (
    <Stack spacing={2} sx={{ width: 350, p: 2}}>
      <Typography variant="h5" sx={{ color: "black" }}>
        Search
      </Typography>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.name)}
        renderInput={(params) => <TextField {...params} label="SearchInput" />}
      />
    </Stack>
  );
}
const top100Films = [
  { name: "John Doe" },
  { name: "Jane Smith" },
  { name: "David Johnson" },
  { name: "Emily Davis" },
  { name: "Michael Brown" },
  { name: "Sophia Wilson" },
  { name: "Liam Martinez" },
  { name: "sujitha Theivam" },
  { name: "sadhana Theivam" },
  { name: "aparna Theivam" },
  { name: "arunmozhi Theivam" },
  { name: "Theivam Arumugam" },
  { name: "muthulakshmy" },
  { name: "sanofer" },
];
