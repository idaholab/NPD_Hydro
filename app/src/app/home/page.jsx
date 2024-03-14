"use client";

import React, { useState, useEffect } from "react";

// Material
import { Box, Divider, Grid, Typography } from "@mui/material";

// Components
import Footer from "../components/footer";
import Questionnaire from "./questionnaire/questionnaire";

function Home() {
  // Window dimensions
  let [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 768 ? setMobile(true) : setMobile(false); // Mobile Devices can't use the tool
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobile]);

  return (
    <Grid
      container
      sx={{
        padding: "1rem",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
      spacing={3}
    >
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Typography variant="h4" component="h1">
          Welcome to the NPD HYDRO Tool
        </Typography>
        <Divider />
        <br />
        <Typography variant="body" component="div">
          The{" "}
          <b>
            Non-Powered Dam Hydropower Development and Ranking Opportunity Tool
          </b>{" "}
          is developed to analyze the feasibility of retrofitting existing
          non-powered dams (NPDs) with generation and energy storage
          technologies. The tool provides development feasibility ratings based
          on adding generation paired with energy storage (batteries, hydrogen,
          pumped storage hydro) to existing NPDs.
          <br />
          <br />
          This web-based interactive tool lets the user choose from a wide range
          of features to define each of the benefits through a user-friendly
          graphical user interface. These features are related to dam operation,
          hydropower opportunity, power market economy, social vulnerability and
          risk, proximity to critical infrastructure and energy generating
          facilities, environmental concerns (air, water, and critical habitat),
          and natural hazard potential. The overall priority score of NPDs is
          calculated based on user-defined weights for each of the benefits.
          <br />
          <br />
          {!mobile ? (
            <Box>
              Start by filling out a brief questionnaire designed to guide
              benefits selection.
              <br />
            </Box>
          ) : (
            <Box>
              <b>
                This application is not available on mobile devices. You need a
                desktop to explore this tool and NPD data.
              </b>
            </Box>
          )}
        </Typography>
      </Grid>
      {!mobile ? (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Questionnaire />
        </Grid>
      ) : null}
    </Grid>
  );
}

export default Home;
