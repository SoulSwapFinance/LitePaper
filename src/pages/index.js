import React from "react";
import Layout from "@theme/Layout";
import Showcase from "../components/Showcase";
import Hackathons from "../components/Hackathons";
import AdditionalLinks from "../components/AdditionalLinks";
import SocialCallout from "../components/SocialCallout";
import { darkTheme } from "../theme";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Showcase/>
        <Hackathons/>
        <AdditionalLinks/>
        <SocialCallout/>
      </Layout>
    </ThemeProvider>
  );
}