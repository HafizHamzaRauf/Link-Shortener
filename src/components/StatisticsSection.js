import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import theme from "../theme";
import SearchBar from "./SearchBar";
import URLList from "./URLList";
import Cards from "./Cards";

const styles = {
  statisticsSection: {
    marginTop: "70px",
    backgroundColor: theme.palette.background.disabled,
    padding: {
      xs: "30px 30px 100px 30px",
      sm: "20px 130px 100px 130px",
    },
  },
};
const StatisticsSection = () => {
  const [list, setList] = useState([]);
  const isLargerScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const onShorten = (data) => {
    console.log(data);
    setList((prev) => [{ shortLink: data.link, link: data.long_url }, ...prev]);
  };
  return (
    <Box sx={styles.statisticsSection}>
      <SearchBar onShorten={onShorten}></SearchBar>
      <URLList list={list}></URLList>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "100px",
          gap: "20px",
          fontWeight: theme.typography.fontWeightBold,
        }}
      >
        <Typography variant={isLargerScreen ? "h3" : "h5"} component="p">
          Advanced Statistics
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color={theme.palette.text.tertiary}
        >
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Typography>
      </Stack>
      <Cards></Cards>
    </Box>
  );
};

export default StatisticsSection;
