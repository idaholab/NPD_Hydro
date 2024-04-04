"use client";

// React
import React from "react";

// Hooks
import { useState, useEffect } from "react";

// Axios
import axios from "axios";

// File Saver
import { saveAs } from "file-saver";

// Material
import { Alert, Box, Button, Divider, Grid, Typography } from "@mui/material";

// Google Analytics
import ReactGA from "react-ga4";

// Components
import Footer from "../components/footer";
import Logos from "../components/logos";

function UserGuide() {
  // GA pageview
  ReactGA.send({ hitType: "pageview", page: "/userguide" });

  // Toggles
  const [userGuide, setUserGuide] = useState();
  const [database, setDatabase] = useState();

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

  async function downloadUserGuide() {
    // GA event
    ReactGA.event({
      category: "user guide",
      action: "download user guide",
    });

    setUserGuide(true);

    await axios
      .get(`/pdf/NPD_USER_GUIDE_V4.pdf`, {
        responseType: "blob",
      })
      .then((response) => {
        saveAs(response.data, "NPD_USER_GUIDE_V4.pdf");
      });
  }

  async function downloadDatabase() {
    // GA event
    ReactGA.event({
      category: "metadata",
      action: "download database",
    });

    setDatabase(true);

    await axios
      .get(`/xls/NPD_DATA.xlsx`, {
        responseType: "blob",
      })
      .then((response) => {
        saveAs(response.data, "NPD_DATA.xlsx");
      });
  }

  return (
    <Grid
      container
      direction={"column"}
      spacing={3}
      sx={{
        position: "relative",
        top: "15vh",
        width: "90vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12}>
        <Box sx={{ width: "75vw" }}>
          <Typography variant="h4" component="h2">
            User Guide
          </Typography>
          <Divider />
          <br />
          <Typography variant="h6" component="h3">
            Download the User Guide
          </Typography>
          <br />
          <Typography variant="body" component="p">
            The User Guide provides a comprehensive overview of the NPD HYDRO
            tool, including user instructions, tips for interacting with and
            gaining insight from the tool, and example case studies.
          </Typography>
          <br />
          <Button
            onClick={() => {
              downloadUserGuide();
            }}
          >
            Download User Guide
          </Button>
          {userGuide ? (
            <Alert severity="success">
              Please wait while your file downloads.
            </Alert>
          ) : null}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ width: "75vw" }}>
          <Typography variant="h4" component="h2">
            Non-Powered Dam Data
          </Typography>
          <Divider />
          <br />
          <Typography variant="h6" component="h3">
            Download NPD Data
          </Typography>
          <br />
          <Typography variant="body" component="p">
            Download NPD HYDRO data. This document has data identifying all
            non-powered dams in the database, as well as their metadata and
            field descriptions.
          </Typography>
          <br />
          <Button
            onClick={() => {
              downloadDatabase();
            }}
          >
            Download Data
          </Button>
          {database ? (
            <Alert severity="success">
              Please wait while your file downloads.
            </Alert>
          ) : null}
        </Box>
        <br />
      </Grid>
      <Grid item xs>
        <Grid container direction={mobile ? "column" : "row"}>
          <Grid item xs={7}>
            <Logos background={"white"} />
          </Grid>
          <Grid item xs={5}>
            <Footer font={"black"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UserGuide;
