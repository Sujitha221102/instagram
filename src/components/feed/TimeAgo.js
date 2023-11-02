import { parseISO, formatDistanceToNow } from "date-fns";
import React from "react";
import { Typography } from "@mui/material";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <Typography title={timestamp} sx={{ ml: -2 }}>
      <Typography>
        <span
          style={{ fontWeight: "bold", fontSize: "1.5rem", marginTop: "10px" }}
        >
          .
        </span>{" "}
        {timeAgo}
      </Typography>
    </Typography>
  );
};

export default TimeAgo;
