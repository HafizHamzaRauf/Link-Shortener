import { Box, Input, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import MyButton from "./UI/MyButton";
import bgImageDesktop from "../images/bg-shorten-desktop.svg"; // Import the image
import bgImageMobile from "../images/bg-shorten-mobile.svg";
import theme from "../theme";

const styles = {
  search: {
    marginTop: "-70px",
    padding: {
      xs: "20px 20px",
      sm: "40px 60px",
    },
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Center content vertically and horizontally
    gap: "5px",
    backgroundColor: theme.palette.primary.second,
    backgroundImage: {
      xs: `url(${bgImageMobile})`,
      sm: `url(${bgImageDesktop})`,
    }, // Set the background image
    backgroundSize: "cover", // Adjust the background size
  },
  searchbox: {
    alignItems: "center",
    gap: "10px",
    width: "100%",
    direction: {
      xs: "column",
    },
  },
  button: {
    width: {
      xs: "100%",
      sm: "150px",
    },
  },
  input: {
    borderRadius: "5px",
    width: {
      xs: "100%",
      sm: "80%",
    },

    padding: "5px 30px",
    backgroundColor: theme.palette.background.default,
  },
  error: {
    color: "red",
    alignSelf: "flex-start",
  },
};

const SearchBar = ({ onShorten }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const isLargerScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the input
    if (!inputValue) {
      setError(true);
      return;
    }

    setError(false);

    // Call the API to shorten the URL
    try {
      const response = await fetch(`https://api-ssl.bitly.com/v4/shorten`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer d3e571d9aeff286b739d91dae384273d694d26ea",
        },
        body: JSON.stringify({
          domain: "bit.ly",
          long_url: inputValue,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setInputValue("");
        onShorten(data);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  return (
    <Box sx={styles.search}>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Stack
          sx={{ ...styles.searchbox, width: "100%" }}
          direction={isLargerScreen ? "row" : "column"}
        >
          <Input
            placeholder="Shorten Link here"
            sx={{
              ...styles.input,
              border: error ? "2px solid red" : "",
            }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <MyButton sx={styles.button} borderRadius={true}>
            Shorten It!
          </MyButton>
        </Stack>
        {error && (
          <Typography sx={styles.error} variant="p" component="p">
            Please Enter a valid Value
          </Typography>
        )}
      </form>
    </Box>
  );
};

export default SearchBar;
