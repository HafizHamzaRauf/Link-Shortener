import { Stack, Typography, Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import MyButton from "./UI/MyButton";
import theme from "../theme";

const styles = {
  stackBox: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.default,
    padding: "10px 40px",
    borderRadius: "9px",
  },
  copy: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
};
const Url = ({ link, shortLink }) => {
  const isLargerScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const truncatedLink = link.length > 25 ? `${link.substring(0, 25)}...` : link;

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 3 seconds
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  return (
    <Stack sx={styles.stackBox} direction={isLargerScreen ? "row" : "column"}>
      <Typography variant="h6" component={"p"}>
        {truncatedLink}
      </Typography>
      <Box sx={styles.copy}>
        <Typography
          color={theme.palette.primary.main}
          variant="h6"
          component={"p"}
        >
          {shortLink}
        </Typography>
        <MyButton
          sx={{
            backgroundColor: copied ? theme.palette.primary.second : "",

            "&:hover": {
              backgroundColor: copied ? theme.palette.primary.second : "",
            },
          }}
          borderRadius={true}
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy"}
        </MyButton>
      </Box>
    </Stack>
  );
};

export default Url;
