import React from "react";
import SearchBar from "../theme/SearchBar";
import { makeStyles } from "@mui/styles";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import CardLink from "./CardLink";
import BackgroundSoulSwap from "../../static/img/soul.png"
import useThemeContext from '@theme/hooks/useThemeContext';

const useStyles = makeStyles(() => ({
  root: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const showcaseCards = [
  {
    title: "Protocol Overview",
    description: "Onboard with us and join our ecosystem on Fantom.",
    cta: "Get Started",
    link: "/soul-protocol/soul-overview"
  },
  {
    title: "User Guides",
    description: "Interact with our products, including earning more Soul.",
    cta: "Start Learning",
    link: "/guides/farming"
  },
  {
    title: "Our Tokenomics",
    description: "Discover details regarding our emissions, allocation, and incentives.",
    cta: "Explore More",
    link: "/soul-protocol/tokenomics"
  },
];

export default function Showcase() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const {isDarkTheme} = useThemeContext();

  return (
    <Box mt={12} marginBottom={6} position="relative" zIndex={0}>
      <Box
        sx={{
          position: "absolute",
          left: "-15vw",
          maxWidth: theme.breakpoints.values.xl,
          opacity: 0.15,
          overflow: "hidden",
          top: "-30vh",
          zIndex: -1,
          "& img": {
            width: "120vw",
          },
        }}
      >
        <img src={BackgroundSoulSwap} />
      </Box>
      <Container maxWidth="lg">
        {/* <Typography variant="h2" component="h1" align="center">
          Welcome to SoulSwap!
        </Typography> */}
        {/* <Box 
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: theme.spacing(4),
            width: "100%",
            "& .navbar__search": {
              pl: 0,
            },
          }}
        >
          <SearchBar />
        </Box> */}
        <Grid container spacing={4} mt={4}>
          {showcaseCards.map((card) => {
            return (
              <Grid item xs={12} md={4} key={card.title}>
                <CardLink link={card.link} shine>
                  <Typography variant="h5" component="h3" fontWeight="800">
                    {card.title}
                  </Typography>
                  <Box mt={1} color={"var(--ifm-heading-color)"}>
                    <Typography variant="body1">
                      {card.description}
                    </Typography>
                  </Box>
                  <Box mt={1}>
                    <Typography variant="body1" fontWeight="800" className="card-link">
                      {card.cta} &#8250;
                    </Typography>
                  </Box>
                </CardLink>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  );
} 