import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { useAppContext } from "../../customHook/AppContext";

const Suggestions = ({setActive}) => {
  const { objectsArray,userName } = useAppContext();
  const defaultAvatarUrl =
    objectsArray.find((value) => value.name === userName)?.people || userName;

  const avatar = objectsArray.filter((value) => {
    if (value.name === userName) {
      return defaultAvatarUrl;
    } else {
      return value.name;
    }
  });
  
  function handleProfile(){
    setActive(2)
  }
  return (
    <Card
      sx={{ display: "flex", flexDirection: "column", p: 2, pt: 4, ml: 3 }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Box sx={{ display: "flex",cursor:'pointer' }} onClick={handleProfile}>
          <Avatar alt={userName} src={avatar}/>
          <Box sx={{ ml: 2 ,mt:1,textAlign:'start'}} >
            <Typography>{userName}</Typography>
          </Box>
        </Box>
        <Box>
          <Button sx={{ height: 30, ml: 5, mt: 1 }}>switch</Button>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography>Suggested for you</Typography>
          <Typography>See All</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 3 }}>
          <Box sx={{ display: "flex" }}>
            <Avatar alt="Syed athul" src="spring-bird.jpg" />
            <Box sx={{ ml: 2,textAlign:'start' }}>
              <Typography>__syed__</Typography>
              <Typography>syed athul</Typography>
            </Box>
          </Box>
          <Box>
            <Button sx={{ height: 30, ml: 5, mt: 1 }}>follow</Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 3 }}>
          <Box sx={{ display: "flex" }}>
            <Avatar alt="Rishi" src="butterfly.jpg" />
            <Box sx={{ ml: 2,textAlign:'start' }}>
              <Typography>rishiii_04</Typography>
              <Typography>rishikesh</Typography>
            </Box>
          </Box>
          <Box>
            <Button sx={{ height: 30, ml: 5, mt: 1 }}>follow</Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 3 }}>
          <Box sx={{ display: "flex" }}>
            <Avatar alt="aathmika" src="water.jpg" />
            <Box sx={{ ml: 2,textAlign:'start' }}>
              <Typography>athu_20</Typography>
              <Typography>aathmika</Typography>
            </Box>
          </Box>
          <Box>
            <Button sx={{ height: 30, ml: 5, mt: 1 }}>follow</Button>
          </Box>
        </Box>
      </Box>
      <Typography sx={{ color: "gray", textAlign: "center", mt: 4 }}>
        About.Help.Press.API.Jobs.Privacy.
      </Typography>
      <Typography sx={{ color: "gray", textAlign: "center", mt: 1 }}>
        Terms.Locations.Language.Meta verified.
      </Typography>
      <Typography sx={{ color: "gray", textAlign: "center", mt: 15 }}>
        @2023 INSTAGRAM FROM META
      </Typography>
    </Card>
  );
};

export default Suggestions;
