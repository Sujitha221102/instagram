import { Avatar, Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useAppContext } from "../../customHook/AppContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function Post() {
  const { save, setSave, click, setClick } = useAppContext();

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
  }

  return save.length === 0 ? (
    <Typography sx={{ml:70 ,mt:30}} variant="h5">You have not yet Saved any posts.</Typography>
  ) : (
    <Box sx={{ ml: 45, mt: 3 }}>
      {save.map((item, index) => {
        const isLiked = click.includes(item.name);
        const isSaved = save.includes(item);
        console.log(save);

        return (
          <Card
            sx={{
              p: 2,
              mt: 1,
            }}
            key={index}
          >
            <Box sx={{ display: "flex" }}>
              <Avatar
                sx={{ width: 50, height: 50 }}
                alt={item.username}
                src={item.people}
              />
              <Typography sx={{ ml: 2, mt: 2, width: 100 }}>
                {item.name}
              </Typography>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 460, height: 300 }}
              image={item.image}
              alt={item.name}
              onDoubleClick={() => handleDoubleClick(item)}
            />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
            >
              <Box sx={{ display: "flex" }}>
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
                <Box sx={{ ml: 1, mt: 1 }}>
                  <img src="chat.png" alt="img is loading" height="19px" />
                </Box>
                <Box sx={{ ml: 1, mt: 1 }}>
                  <img src="send.png" alt="img is loading" height="19px" />
                </Box>
              </Box>
              <Box sx={{ mr: 4, mt: 1 }} onClick={() => handleSave(item)}>
                {isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
              </Box>
            </Box>
            {isLiked ? (
              <Typography sx={{ textAlign: "start" }}>
                {item.liked + 1} likes
              </Typography>
            ) : (
              <Typography sx={{ textAlign: "start" }}>
                {item.liked} likes
              </Typography>
            )}
            <Typography sx={{ textAlign: "start" }}>
              {item.name} : {item.description}
            </Typography>
          </Card>
        );
      })}
    </Box>
  );
}
