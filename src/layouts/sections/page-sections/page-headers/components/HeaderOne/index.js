import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from "axios";

import CryptoList from "layouts/sections/page-sections/page-headers/components/HeaderOne/CryptoList";
import bgImage from "assets/images/bg-coworking.jpeg";

function HeaderOne() {
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/atilsamancioglu/K21-JSONDataSet/master/crypto.json")
      .then((response) => {
        setCryptoData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Error fetching data.");
      });
  }, []);

  return (
    <Box component="header" position="relative" height="100%">
      <Box component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid container flexDirection="row" alignItems="center">
            <Typography
              component="a"
              href="#"
              variant="button"
              color="white"
              fontWeight="regular"
              py={0.8125}
              mr={2}
              sx={{ fontSize: "1rem" }}
            >
              Material Kit
            </Typography>
            <Button
              variant="outlined"
              color="white"
              sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
            >
              <Box component="i" color="white" className="fas fa-bars" />
            </Button>
          </Grid>
        </Container>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        minHeight="100%"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
            <Typography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Material Kit
            </Typography>
            <Typography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
              The time is now for it be okay to be great. People in this world shun people for being
              nice.
            </Typography>
            <Stack direction="row" spacing={1} mt={3}>
              <Button color="white">Get Started</Button>
              <Button variant="text" color="white">
                Read more
              </Button>
            </Stack>
            <Box
              mt={4}
              p={2}
              border="none"
              borderRadius="12px"
              boxShadow="sm"
              bgcolor="white"
              height="100%" // Ensure the container takes up the full height
            >
              <Typography variant="h5" color="primary" fontWeight="medium">
                Cryptocurrency List
              </Typography>
              {error ? (
                <Typography color="red">{error}</Typography>
              ) : (
                <Grid container spacing={2} justifyContent="center">
                  {cryptoData.slice(0, 20).map((crypto) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      key={crypto.id}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box
                        p={2}
                        bgcolor="grey.200"
                        borderRadius="8px"
                        boxShadow="sm"
                        width="100%" // Ensure the width of the box fills the Grid item
                        height="200px" // Set a fixed height for the boxes
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <CryptoList crypto={crypto} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default HeaderOne;
