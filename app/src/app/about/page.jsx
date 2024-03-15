// React
import React from "react";

// Material
import { Box, Divider, Grid, Typography } from "@mui/material";

// Google Analytics
import ReactGA from "react-ga4";

// Components
import Footer from "../components/footer";
import Logos from "../components/logos";

function About() {
  // GA pageview
  ReactGA.send({ hitType: "pageview", page: "/about" });

  return (
    <Grid
      container
      direction={"column"}
      sx={{
        position: "relative",
        top: "15vh",
        width: "90vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={9}>
        <Box sx={{ width: "75vw" }}>
          <Typography variant="h4" component="h2">
            About
          </Typography>
          <Divider />
          <br />
          <Typography variant="h6" component="h3">
            Overview
          </Typography>
          <br />
          <Typography variant="body" component="p">
            This tool is developed to analyze the feasibility of retrofitting
            existing non-powered dams (NPDs) with generation and energy storage
            technologies. The tool provides development feasibility ratings
            based on adding generation paired with energy storage (batteries,
            hydrogen, pumped storage hydro) to existing NPDs.
            <br />
            <br />
            This web-based interactive tool lets the user choose from a wide
            range of features to define each of the benefits through a
            user-friendly graphical user interface. These features are related
            to dam operation, hydropower opportunity, power market economy,
            social vulnerability and risk, proximity to critical infrastructure
            and energy generating facilities, environmental concerns (air,
            water, and critical habitat), and natural hazard potential. The
            overall priority score of NPDs is calculated based on user-defined
            weights for each of the benefits.
            <br />
            <br />
            Besides ranking NPDs, the tool can also be used to estimate the
            energy-storage feasibility (battery, hydrogen, and pump-storage
            hydro) at each of the potential sites.
          </Typography>
          <br />
          <Typography variant="h6" component="h3">
            Why the NPD Hydro Tool?
          </Typography>
          <br />
          <Typography variant="body" component="p">
            Currently, there are more than 80,000 non-powered dams (NPDs) in the
            United States. These NPDs provide a variety of non-energy benefits,
            including flood control, water supply, navigation, and recreation.
            <br />
            <br />
            Approximately 500 of these NPDs are identified as having the
            potential to add hydropower generation. A large share of investment
            costs and environmental impacts of dam construction have already
            been incurred at these NPDs. Hence, adding power to the existing dam
            structure is hypothesized to be achieved at a lower cost, with less
            risk, and a shorter timeframe than the development required for new
            dam construction.
            <br />
            <br />
            To assess the NPDs to hydropower conversion potential
            (retrofitting), we developed a GIS-based multi-criterial decision
            analysis tool, which allows users to rank these NPDs retrofits based
            on the grid, community, industry, and environmental benefits.
          </Typography>
          <br />
        </Box>
        <br />
      </Grid>
      <Grid item xs={1}>
        <Box sx={{ width: "75vw" }}>
          <Grid container direction={"row"}>
            <Grid item xs={6}>
              <Logos background={"white"} />
            </Grid>
            <Grid item xs={6}>
              <Footer font={"black"} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default About;
