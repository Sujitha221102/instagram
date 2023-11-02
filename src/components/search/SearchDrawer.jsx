import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import SearchInput from "./SearchInput";
import { Tooltip, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "left" || anchor === "right" ? "auto" : 250  }}
      role="presentation"
    >
      <SearchInput />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Typography onClick={toggleDrawer(anchor, true)}>
            <Box
              sx={{
                display: "flex",
                cursor:'pointer',
                p: 2,
                "&:hover": {
                  backgroundColor: "#e6e6e6",
                },
              }}
            >
              <Tooltip title="Search" placement="right-end">
                <SearchOutlinedIcon />
              </Tooltip>
              <Typography sx={{ ml: 2 }}>Search</Typography>
            </Box>
          </Typography>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
