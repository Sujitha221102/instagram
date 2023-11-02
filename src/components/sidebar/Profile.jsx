import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useAppContext } from "../../customHook/AppContext";
import Tabs from "../sidebar/ProfileTabs";
import { useState } from "react";
import Settings from "./Settings";

const Profile = () => {
  const { userName, objectsArray } = useAppContext();
  const [open, setOpen] = useState(false);
  const [popper, setPopper] = useState(false);

  const Filtering = objectsArray.filter((item) => {
    return item.name === userName;
  });
  const defaultAvatarUrl =
    objectsArray.find((value) => value.name === userName)?.people || userName;

  const avatar = objectsArray.filter((value) => {
    if (value.name === userName) {
      return defaultAvatarUrl;
    } else {
      return value.name;
    }
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPopper(false);
  };

  function handleSettings() {
    setPopper(true);
  }
  return (
    <Box>
      <Box sx={{ ml: 35, display: "flex" }}>
        <Box sx={{ p: 6, ml: 4 }}>
          <Avatar
            onClick={handleClickOpen}
            sx={{ width: 120, height: 120, cursor: "pointer" ,fontSize:90,fontWeight:'bold',p:2}}
            alt={userName}
            src={avatar}
          />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Change profile photo"}
            </DialogTitle>
            <DialogActions
              sx={{ display: "flex", flexDirection: "column", color: "black" }}
            >
              <Button onClick={handleClose}>Upload photo</Button>
              <Button onClick={handleClose}>Remove current photo</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Box sx={{ p: 6 }}>
          <Box
            sx={{ display: "flex", width: 500, justifyContent: "space-evenly" }}
          >
            <Typography variant="h5" sx={{ marginTop: "3px", ml: 2 }}>
              {userName}
            </Typography>
            <Button>Edit Profile</Button>
            <Button>View archive</Button>
            <IconButton>
              <img
                src="setting.png"
                alt="img is loading"
                height="27px"
                onClick={handleSettings}
              />
            </IconButton>
            <Settings popper={popper} onClose={handleClose} />
          </Box>
          <Box
            sx={{
              display: "flex",
              width: 300,
              ml: 4,
              mt: 2,
              justifyContent: "space-between",
            }}
          >
            <Typography>{Filtering.length} posts</Typography>
            <Typography>150 followers</Typography>
            <Typography>500 following</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Tabs />
      </Box>
    </Box>
  );
};

export default Profile;
