"use client";

import React from "react";

// Hooks
import { useState } from "react";

// Components
import Layers from "./layers/layers";
import Weights from "./layers/weights";

// Material
import {
  Alert,
  Box,
  Button,
  Divider,
  Drawer,
  Link,
  Typography,
} from "@mui/material";

function Sidebar(props) {
  function handleSubmit() {
    props.setSubmit(true);
  }

  return (
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          zIndex: 2,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: "30%",
            maxWidth: "400px",
            boxSizing: "border-box",
            maxHeight: "calc(100vh - 85px)",
            top: "85px",
            zIndex: 5,
          },
        }}
      >
        <Box m={2}>
          <Box>
            <Box sx={{ position: "relative", fontSize: "14px" }}>
              <Box sx={{ display: "flex", justifyContent: "start" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Non-Powered Dam Scores
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  padding: "0.5rem 0",
                }}
              >
                <Button variant={"contained"} onClick={() => handleSubmit()}>
                  CALCULATE NPD SCORES
                </Button>
              </Box>
              {!props.valid ? (
                <Box>
                  <Alert severity="error">
                    Please select at least 1 Feature for any Community,
                    Environmental, Grid, or Industry Scoring Layer
                  </Alert>
                </Box>
              ) : null}
              <Divider />
              <br />
              <Typography variant="h5">Start Exploring NPDs</Typography>
              <br />
              <Typography variant="subtitle2">
                Scoring Layers and Weights
              </Typography>
              <Typography variant="body">
                Assign weights to Community, Environmental, Grid, or Industry
                subcategories, and select input data to be used in the scoring
                calculation for each subcategory
              </Typography>
              <br />
              <br />
              <Weights location={props.location} />
              <br />
              <br />
              <br />
              <Typography variant="subtitle2">Visual Layers</Typography>
              <Typography variant="body">
                Add visual layers to the map for additonal information
              </Typography>
              <br />
              <br />
              <Layers />
              <Box sx={{ height: "8vh" }}></Box> <Divider />
              {/**This last <Box> element (above) is a hack to get the drawer to scroll */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ padding: "1.5rem 0 2rem 0", fontSize: "0.75rem" }}>
                  Technical Contacts:
                  <br />
                  <br />
                  <Link
                    sx={{ padding: "0" }}
                    href="mailto:kazi.tamaddun@pnnl.gov"
                  >
                    Research
                  </Link>
                  <br />
                  <Link
                    sx={{ padding: "0" }}
                    href="mailto:nathan.woodruff@inl.gov"
                  >
                    Site Administrator
                  </Link>
                  <br />
                  <Link
                    sx={{ padding: "0" }}
                    href="https://doe.responsibledisclosure.com/hc/en-us"
                  >
                    DOE Cyber: Vulnerability Disclosure Program
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
