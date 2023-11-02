import { Box, Dialog, DialogActions, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = ({ popper, onClose }) => {
  const navigate = useNavigate();
  function handleLogout() {
    navigate("/login");
    localStorage.setItem("LoggedIn", false);
  }
  return (
    <Box>
      <Dialog
        open={popper}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions
          sx={{ display: "flex", flexDirection: "column", color: "black" }}
        >
          <Typography
            onClick={onClose}
            sx={{
              cursor: "pointer",
              p: 1,
              "&:hover": {
                backgroundColor: "#e6e6e6",
                borderRadius: "50",
              },
            }}
          >
            Apps and websites
          </Typography>
          <Divider sx={{ color: "red", width: 200 }} />
          <Typography
            onClick={onClose}
            sx={{
              cursor: "pointer",
              p: 1,
              "&:hover": {
                backgroundColor: "#e6e6e6",
                borderRadius: "50",
              },
            }}
          >
            QR code
          </Typography>
          <Divider sx={{ color: "red", width: 200 }} />
          <Typography
            onClick={onClose}
            sx={{
              cursor: "pointer",
              p: 1,
              "&:hover": {
                backgroundColor: "#e6e6e6",
                borderRadius: "50",
              },
            }}
          >
            Notifications
          </Typography>
          <Divider sx={{ color: "red", width: 200 }} />
          <Typography
            onClick={onClose}
            sx={{
              cursor: "pointer",
              p: 1,
              "&:hover": {
                backgroundColor: "#e6e6e6",
                borderRadius: "50",
              },
            }}
          >
            Settings and privacy
          </Typography>
          <Divider sx={{ color: "red", width: 200 }} />
          <Typography
            onClick={onClose}
            sx={{
              cursor: "pointer",
              p: 1,
              "&:hover": {
                backgroundColor: "#e6e6e6",
                borderRadius: "50",
              },
            }}
          >
            Supervision
          </Typography>
          <Divider sx={{ color: "red", width: 200 }} />
          <Typography
            onClick={handleLogout}
            sx={{
              cursor: "pointer",
              p: 1,
              "&:hover": {
                backgroundColor: "#e6e6e6",
                borderRadius: "50",
              },
            }}
          >
            Log out
          </Typography>
          <Divider sx={{ color: "red", width: 200 }} />
          <Typography
            onClick={onClose}
            sx={{
              cursor: "pointer",
              p: 1,
              "&:hover": {
                backgroundColor: "#e6e6e6",
                borderRadius: "50",
              },
            }}
          >
            Cancel
          </Typography>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Settings;
