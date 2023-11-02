import { Avatar, Box, Card, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import HomeIcon from "@mui/icons-material/Home";
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import React, { useState } from "react";
import Popper from "@mui/material/Popper";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import SimpleDialog from "../feed/SimpleDialog";
import MoreInfo from "./MoreInfo";
import SearchDrawer from "../search/SearchDrawer";
import ExploreIcon from "@mui/icons-material/Explore";
import { useAppContext } from "../../customHook/AppContext";

const Sidebar = ({ setActive }) => {
  const { userName, setSavedPage, savedPage,objectsArray } = useAppContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [colored, setColored] = useState(false);
  const [explore, setExplore] = useState(false);

  const defaultAvatarUrl =
    objectsArray.find((value) => value.name === userName)?.people || userName;

  const avatar = objectsArray.filter((value) => {
    if (value.name === userName) {
      return defaultAvatarUrl;
    } else {
      return value.name;
    }
  });
  function handleSavedItem() {
    setSavedPage(!savedPage);
    setAnchorEl(!anchorEl);
  }

  function handleMore(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const [opens, setOpen] = React.useState(false);

  const handlePost = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function handleHome() {
    setColored(true);
    setExplore(false);
    setActive(0);
    setSavedPage(false);
  }
  function handleExplore() {
    setExplore(true);
    setColored(false);
    setActive(1);
    setSavedPage(false);
  }
  function handleProfile() {
    setExplore(false);
    setColored(false);
    setActive(2);
    setSavedPage(false);
  }
  return (
    <Box sx={{ position: "fixed" }}>
      <Card sx={{ p: 3, width: "200px" }}>
        <img src="instagram.png" alt="data not found" height="40px" />
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            p: 2,
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
          onClick={handleHome}
        >
          <Tooltip title="Home" placement="right-end">
            {colored ? <HomeIcon /> : <HomeOutlinedIcon />}
          </Tooltip>
          <Typography sx={{ ml: 2 }}>Home</Typography>
        </Box>
        <SearchDrawer />
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            p: 2,
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
          onClick={handleExplore}
        >
          <Tooltip title="Explore" placement="right-end">
            {explore ? <ExploreIcon /> : <ExploreOutlinedIcon />}
          </Tooltip>
          <Typography sx={{ ml: 2 }}>Explore</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            p: 2,
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
        >
          <Tooltip title="Reels" placement="right-end">
            <img src="video.png" alt="img is loading" height="24px" />
          </Tooltip>
          <Typography sx={{ ml: 2 }}>Reels</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            p: 2,
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
        >
          <Tooltip title="Messenger" placement="right-end">
            <img src="chat.png" alt="img is loading" height="22px" />
          </Tooltip>
          <Typography sx={{ marginLeft: "18px" }}>Messages</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            p: 2,
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
        >
          <Tooltip title="Notifications" placement="right-end">
            <FavoriteBorderRoundedIcon />
          </Tooltip>
          <Typography sx={{ ml: 2 }}>Notifications</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            p: 2,
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
          onClick={handlePost}
        >
          <Tooltip title="New Post" placement="right-end">
            <AddBoxOutlinedIcon />
          </Tooltip>
          <Typography sx={{ ml: 2 }}>Create</Typography>
        </Box>
        <SimpleDialog open={opens} onClose={handleClose} />
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            p: 2,
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
          onClick={handleProfile}
        >
          <Avatar alt={userName} src={avatar} sx={{ width: 25, height: 25 }} />
          <Typography sx={{ ml: 2, textAlign: "center" }}>Profile</Typography>
        </Box>
        <Box
          onClick={handleMore}
          sx={{
            display: "flex",
            cursor: "pointer",
            p: 2,
            "&:hover": {
              backgroundColor: "#e6e6e6",
              borderRadius: "50",
            },
          }}
        >
          <Tooltip title="Settings" placement="right-end">
            <img src="menu.png" alt="img is loading" height="25px" />
          </Tooltip>
          <Typography sx={{ ml: 2 }}>More</Typography>
        </Box>
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          sx={{ width: 280 }}
        >
          <MoreInfo onClick={handleSavedItem} />
        </Popper>
      </Card>
    </Box>
  );
};

export default Sidebar;
