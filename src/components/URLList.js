import { Box, Stack } from "@mui/material";
import React from "react";
import Url from "./Url";

const URLList = ({ list }) => {
  return (
    <Stack sx={{ marginTop: "20px", gap: "12px" }}>
      {list.map((a) => (
        <Url link={a.link} shortLink={a.shortLink}></Url>
      ))}
    </Stack>
  );
};

export default URLList;
