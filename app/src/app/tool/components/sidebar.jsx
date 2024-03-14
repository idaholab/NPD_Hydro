"use client";

import React from "react";

// Hooks
import { useState } from "react";

// Components
import Layers from "./layers/layers";
import Weights from "./layers/weights";

// Material
import { Alert, Box, Button, Divider, Drawer, Typography } from "@mui/material";

// Icons
import CalculateIcon from "@mui/icons-material/Calculate";
import ChevronLeft from "@mui/icons-material/ChevronLeft";

function Sidebar(props) {
  let [open, setOpen] = useState(true);

  // Handlers
  function handleSubmit() {
    props.setSubmit(true);
    props.handleClose();
    setOpen(false);
  }

  function handleOpen() {
    props.handleOpen();
    setOpen(true);
  }

  function handleClose() {
    props.handleClose();
    setOpen(false);
  }

  return (
    <>
      <Drawer
        open={open}
        sx={{
          zIndex: 2,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            maxWidth: "400px",
            boxSizing: "border-box",
            maxHeight: "90vh",
            top: "10vh",
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
                <Button
                  className="bg-electricity hover:bg-cherenkov text-white font-bold rounded"
                  onClick={() => handleSubmit()}
                  startIcon={<CalculateIcon />}
                >
                  CALCULATE NPD SCORES
                </Button>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Button
                  className="bg-electricity hover:bg-cherenkov text-white font-bold rounded"
                  onClick={handleClose}
                  startIcon={<ChevronLeft />}
                >
                  Close
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
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Sidebar;
