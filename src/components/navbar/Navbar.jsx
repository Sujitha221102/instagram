import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Box sx={{ display: "flex", ml: 33, mt: 2 }}>
        <Stack direction="row" spacing={2}>
          <Box sx={{ cursor: "pointer" }}>
            <Avatar
              sx={{ border: "2px solid #ff1a8c", width: 60, height: 60 }}
              alt="RemySharp"
              src="person2.webp"
            />
            <Typography variant="h7">remysh..</Typography>
          </Box>
          <Box sx={{ cursor: "pointer" }}>
            <Avatar
              sx={{ border: "2px solid #ff1a8c", width: 60, height: 60 }}
              alt="Travis Howard"
            />
            <Typography variant="h7">travisho..</Typography>
          </Box>
          <Box sx={{ cursor: "pointer" }}>
            <Avatar
              sx={{ border: "2px solid #ff1a8c", width: 60, height: 60 }}
              alt="Cindrella"
              src="person3.jpg"
            />
            <Typography variant="h7">cindrella.</Typography>
          </Box>
          <Box sx={{ cursor: "pointer" }}>
            <Avatar
              sx={{ border: "2px solid #ff1a8c", width: 60, height: 60 }}
              alt="Haritha"
              src="person4.jpg"
            />
            <Typography variant="h7">haritha..</Typography>
          </Box>
          <Box sx={{ cursor: "pointer" }}>
            <Avatar
              sx={{ border: "2px solid #ff1a8c", width: 60, height: 60 }}
              alt="zanvi"
              src="person5.jpg"
            />
            <Typography variant="h7">zanvi...</Typography>
          </Box>
          <Box sx={{ cursor: "pointer" }}>
            <Avatar
              sx={{ border: "2px solid #ff1a8c", width: 60, height: 60 }}
              alt="shesha"
              src="person6.jpg"
            />
            <Typography variant="h7">shesha..</Typography>
          </Box>
          <Box sx={{ cursor: "pointer" }}>
            <Avatar
              sx={{ border: "2px solid #ff1a8c", width: 60, height: 60 }}
              alt="Cindy Baker"
              src="person7.jpg"
            />
            <Typography variant="h7">cindy..</Typography>
          </Box>
          <Box sx={{ cursor: "pointer" }}>
            <Avatar
              sx={{ border: "2px solid #ff1a8c", width: 60, height: 60 }}
              alt="preethi"
            />
            <Typography variant="h7">preethi.</Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Navbar;
