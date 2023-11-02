import { Box, Card, Divider, Typography } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Settings from "./Settings";

const MoreInfo = ({onClick}) => {
  const navigate=useNavigate();
  const [popper, setPopper] = useState(false);

function handleLogout() {
  navigate("/login");
  localStorage.setItem("LoggedIn", false);
}
function handleSettings() {
  setPopper(true);
}
const handleClose = () => {
  setPopper(false);
};
  return (
    <Card sx={{ ml: 2 }}>
      <Card sx={{ p: 1, mb: 1 }}>
        <Box
          onClick={handleSettings}
          sx={{
            display: "flex",
            mt: 1,
            p: 1,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
        >
          <SettingsOutlinedIcon />
          <Typography sx={{ ml: 2 }}>Settings</Typography>
        </Box>
        <Settings popper={popper} onClose={handleClose} />
        <Box
          sx={{
            display: "flex",
            mt: 1,
            p: 1,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
        >
          <img src="activity.png" alt="img is loading" height="25px" />
          <Typography sx={{ ml: 2 }}>Yours activity</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            mt: 1,
            p: 1,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
          onClick={onClick}
        >
          <BookmarkBorderOutlinedIcon />
          <Typography sx={{ ml: 2 }}>Saved</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            mt: 1,
            p: 1,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
        >
          <LightModeOutlinedIcon />
          <Typography sx={{ ml: 2 }}>Switch appearance</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            mt: 1,
            p: 1,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
            mb: 2,
          }}
        >
          <ReportProblemIcon />
          <Typography sx={{ ml: 2 }}>Report a problem</Typography>
        </Box>
      </Card>
      <Card sx={{ p: 1, mb: 1 }}>
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            p: 1,
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
        >
          <img src="threads-logo.png" alt="img is loading" height="25px" />
          <Typography sx={{ ml: 2 }}>Threads</Typography>
        </Box>
      </Card>
      <Card sx={{ p: 2, pt: 2, pb: 2 }}>
        <Typography
          sx={{
            cursor: "pointer",
            p: 1,
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
        >
          Switch Account
        </Typography>
        <Divider />
        <Typography
          sx={{
            cursor: "pointer",
            p: 1,
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
          onClick={handleLogout}
        >
          Log out
        </Typography>
      </Card>
    </Card>
  );
};

export default MoreInfo;
