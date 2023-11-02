import React, { useState } from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {
  Avatar,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useAppContext } from "../../customHook/AppContext";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function SimpleDialog({ open, onClose }) {
  const { objectsArray, updateObjectsArray, userName, postArr, setPostArr } =
    useAppContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const [post, setPost] = useState(false);
  const [caption, setCaption] = useState("");

const defaultAvatarUrl =
  objectsArray.find((value) => value.name === userName)?.people ||
  userName;

const avatar = objectsArray.filter((value) => {
  if (value.name === userName) {
    return defaultAvatarUrl;
  } else {
    return value.name;
  }
});


  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleNext = () => {
    setPost(true);
  };

  const handleCancel = () => {
    setSelectedFile(null);
    onClose();
  };

  function handleBack() {
    setPost(false);
  }

  const handleCaption = (e) => {
    setCaption(e.target.value);
  };

  const handleShare = () => {
    if (selectedFile && caption) {
      const newObject = {
        people: avatar,
        name: userName,
        image: selectedFile,
        description: caption,
        id: objectsArray.length + 1,
        liked: 0,
        day: new Date().toISOString(),
      };

      updateObjectsArray([newObject, ...objectsArray]);
      setSelectedFile(null);
      setPostArr([...postArr, newObject]);
      setCaption("");
      onClose();
    }
  };

  return (
    <Dialog open={open} sx={{ p: 3 }}>
      <DialogTitle>Create new post</DialogTitle>
      <Divider />
      <Box sx={{ m: 2, p: 2 }}>
        {selectedFile ? (
          post ? (
            <Box style={imageContainerStyle}>
              <img src={selectedFile} alt="Selected" style={imageStyle} />
              <Box
                sx={{ width: 400, m: 1, borderLeft: "1px solid gray", p: 1 }}
              >
                <Box sx={{ display: "flex" }}>
                  <Avatar alt={userName} src={userName} />
                  <Typography sx={{ ml: 1, mt: 1, textAlign: "center" }}>
                    {userName}
                  </Typography>
                </Box>
                <TextField
                  id="standard-search"
                  label="Write a caption..."
                  type="search"
                  variant="standard"
                  value={caption}
                  onChange={handleCaption}
                />
                <Divider sx={{ mt: 1 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 1,
                  }}
                >
                  <Typography>Add Location</Typography>
                  <LocationOnOutlinedIcon />
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 1,
                  }}
                >
                  <Typography>Accessibility</Typography>
                  <ExpandMoreOutlinedIcon />
                </Box>
              </Box>
            </Box>
          ) : (
            <Box>
              <img src={selectedFile} alt="Selected" style={imageStyle} />
            </Box>
          )
        ) : (
          <>
            <Box style={dropzoneStyle}>
              <TextField
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="fileInput"
                onChange={handleFile}
              />
              <label htmlFor="fileInput" style={labelStyle}>
                <CollectionsRoundedIcon sx={{ width: 80, height: 90 }} />
                <Typography>Drag photos and videos here</Typography>
                <Typography variant="text">Select from Computer</Typography>
              </label>
            </Box>
            <ArrowBackIcon
              onClick={handleCancel}
              sx={{ marginRight: "20px", mt: 3 }}
            />
          </>
        )}
        <Box sx={{ display: "flex", mt: 2, justifyContent: "space-between" }}>
          {selectedFile &&
            (post ? (
              <>
                <ArrowBackIcon onClick={handleBack} />
                <Button onClick={handleShare}>Share</Button>
              </>
            ) : (
              <>
                <ArrowBackIcon onClick={handleCancel} />
                <Button variant="contained" onClick={handleNext}>
                  Next
                </Button>
              </>
            ))}
        </Box>
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const dropzoneStyle = {
  border: "2px dashed #cccccc",
  borderRadius: "5px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

const labelStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
};

const imageContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #cccccc",
  borderRadius: "5px",
  height: "200px",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export default SimpleDialog;
