import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import SavedItem from '../savedData/SavedItem'
import Box from "@mui/material/Box";
import ProfilePost from "./ProfilePost";
import { useAppContext } from "../../customHook/AppContext";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({postArr}) {
  const [value, setValue] = React.useState(0);
  const {save}=useAppContext();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderTop: 1, borderColor: "divider", ml: 40 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ ml: 35 }}
        >
          <Tab label="Posts" {...a11yProps(0)} />
          <Tab label="Saved" {...a11yProps(1)} />
          <Tab label="Tagged" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ProfilePost />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ width: 850, ml: 15, textAlign: "start" }}>
          {save.length === 0 ? (
            <Typography sx={{ml:61}}>You have not yet Saved any posts.</Typography>
          ) : (
            <SavedItem />
          )}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography sx={{ ml: 40 }}>
          You have been not yet tagged by Anyone.
        </Typography>
      </CustomTabPanel>
    </Box>
  );
}
