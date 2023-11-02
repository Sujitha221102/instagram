import { Box, CardMedia, Link, Typography, Button } from "@mui/material";
import React from "react";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import SimpleDialog from "../feed/SimpleDialog";
import { useAppContext } from "../../customHook/AppContext";

const ProfilePost = () => {
  const {
    userName,
    objectsArray,
    setObjectsArray,
    postArr,
    setPostArr,
    save,
    setSave,
  } = useAppContext();
  const [opens, setOpen] = React.useState(false);

  const Filtering = objectsArray.filter((item) => item.name === userName);

  const handlePost = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleDelete(item) {
    const updatedArray = objectsArray.filter((value) => value.id !== item.id);
    setObjectsArray(updatedArray);
    const updatedArray1 = postArr.filter((value) => value.id !== item.id);
    setPostArr(updatedArray1);
    const updatedArray2 = save.filter((value) => value.id !== item.id);
    setSave(updatedArray2);
  }
  return Filtering.length === 0 ? (
    <Box sx={{ ml: 40 }}>
      <CameraAltOutlinedIcon
        onClick={handlePost}
        sx={{ width: 100, height: 50, cursor: "pointer" }}
      />
      <Typography variant="h5" sx={{ fontWeight: "bold", m: 2 }}>
        Share Posts
      </Typography>
      <Typography sx={{ m: 2 }}>
        When you share photos,they will appear on your profile.
      </Typography>
      <Link
        onClick={handlePost}
        style={{ textDecoration: "none", cursor: "pointer" }}
      >
        Share your first photo
      </Link>
      <SimpleDialog open={opens} onClose={handleClose} />
    </Box>
  ) : (
    Filtering.map((value) => {
      console.log(value.userName);
      return (
          <Box sx={{ width: 550, ml: 27, borderRadius: 2 ,mb:3}}>
            <CardMedia
              component="img"
              sx={{
                width: 350,
                height: 180,
                ml: 40,
                border:'1px solid gray',
              }}
              image={value?.image}
              alt={value?.name}
            />
            <Button onClick={() => handleDelete(value)} sx={{ml:53,border:'1px solid black',width:150}}>Delete Post</Button>
          </Box>
      );
    })
  );
};

export default ProfilePost;
