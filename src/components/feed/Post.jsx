import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Popper,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAppContext } from "../../customHook/AppContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Delete from "../feed/Delete";
import TimeAgo from "./TimeAgo";

export default function Post() {
  const { objectsArray, setObjectsArray, save, setSave,click,setClick,userName } = useAppContext();
  const [anchorEls, setAnchorEls] = useState(
    new Array(objectsArray.length).fill(null)
  );

  function handleDelete(event, index) {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = newAnchorEls[index] ? null : event.currentTarget;
    setAnchorEls(newAnchorEls);
  }

  function handleClick(item) {
    if (click.includes(item.name)) {
      setClick(click.filter((likedItem) => likedItem !== item.name));
    } else {
      setClick([...click, item.name]);
    }
  }

  function handleDoubleClick(item) {
    if (click.includes(item.name)) {
      setClick(click.filter((likedItem) => likedItem !== item.name));
    } else {
      setClick([...click, item.name]);
    }
  }

  function handleSave(item) {
    if (save.includes(item)) {
      setSave(save.filter((likedItem) => likedItem !== item));
    } else {
      setSave([...save, item]);
    }
    console.log(save);
  }

  return objectsArray.map((item, index) => {
    const isLiked = click.includes(item.name);
    const isSaved = save.includes(item);
    const anchorEl = anchorEls[index];
    console.log(item)

    return (
      <Card sx={{ ml: 34, p: 2, mt: 1 }} key={index}>
        <Box
          sx={{
            display: "flex",
            width: 550,
            ml: 2,
            mb: 1,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Avatar
                sx={{ width: 50, height: 50 }}
                alt={userName}
                src={item.people}
              />
            <Typography sx={{ mt: 1, width: 150, fontWeight: "bold" }}>
              {item.name}
            </Typography>
            <TimeAgo timestamp={item.day} />
          </Box>
          <Box onClick={(event) => handleDelete(event, index)}>
            <Tooltip title="More Options" placement="right-end">
              <MoreHorizIcon sx={{ mt: 1, cursor: "pointer" }} />
            </Tooltip>
            <Popper
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              sx={{ width: 230, mb: 20 }}
            >
              <Delete
                item={item}
                objectsArray={objectsArray}
                setObjectsArray={setObjectsArray}
              />
            </Popper>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{
            width: 550,
            height: 300,
            marginLeft: "13px",
            border: "1px solid black",
          }}
          image={item.image}
          alt={item.name}
          onDoubleClick={() => handleDoubleClick(item)}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 1,
            ml: 1,
          }}
        >
          <Box sx={{ display: "flex", cursor: "pointer" }}>
            <Tooltip title="Like" placement="bottom">
              {isLiked ? (
                <FavoriteIcon
                  sx={{ color: "red", marginTop: "6px" }}
                  onClick={() => handleClick(item)}
                />
              ) : (
                <FavoriteBorderRoundedIcon
                  sx={{ marginTop: "6px" }}
                  onClick={() => handleClick(item)}
                />
              )}
            </Tooltip>
            <Box sx={{ ml: 1, mt: 1 }}>
              <Tooltip title="Comment" placement="bottom">
                <img src="chat.png" alt="img is loading" height="19px" />
              </Tooltip>
            </Box>
            <Box sx={{ ml: 1, mt: 1 }}>
              <Tooltip title="Share Post" placement="bottom">
                <img src="send.png" alt="img is loading" height="19px" />
              </Tooltip>
            </Box>
          </Box>
          <Box
            sx={{ mr: 1, mt: 1, cursor: "pointer" }}
            onClick={() => handleSave(item)}
          >
            <Tooltip title="Save" placement="bottom">
              {isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </Tooltip>
          </Box>
        </Box>
        <Box sx={{ textAlign: "start", marginLeft: "11px" }}>
          {isLiked ? (
            <Typography>{item.liked + 1} likes</Typography>
          ) : (
            <Typography>{item.liked} likes</Typography>
          )}
          <Typography sx={{ marginLeft: "2px" }}>
            {item.name} : {item.description}
          </Typography>
        </Box>
      </Card>
    );
  });
}
