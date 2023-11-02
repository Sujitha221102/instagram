import { Box } from "@mui/material";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Post from "./feed/Post";
import Suggestions from "./suggestion/Suggestions";
import { useAppContext } from "../customHook/AppContext";
import SavedItem from "./savedData/SavedItem";
import { useState } from "react";
import Explore from "./explore/Explore";
import Profile from "./sidebar/Profile";

function Main() {
  const { savedPage} = useAppContext();
  const [active, setActive] = useState(0);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar active={active} setActive={setActive} />
      {savedPage ? (
        <Box>
          <SavedItem />
        </Box>
      ) : active === 0 ? (
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Navbar />
            <Post />
          </Box>
          <Suggestions setActive={setActive} />
        </Box>
      ) : active === 1 ? (
        <Explore />
      ) : active === 2 ? (
        <Profile />
      ) : (
        ""
      )}
    </Box>
  );
}

export default Main;
