"use client";

// React
import React, { useCallback } from "react";

// Hooks
import { useState, useEffect } from "react";

// Helpers
import { validate, query } from "./helpers";

// Material
import { Box, Button, Grid, Skeleton, Typography } from "@mui/material";

// Icons
import ChevronRight from "@mui/icons-material/ChevronRight";

// Next
import dynamic from "next/dynamic";

// Components
import Sidebar from "./components/sidebar";
import DataTable from "./map/datatable";
// You have to disable server side rendering for ArcGIS maps because they need access to the DOM at runtime
const Map = dynamic(() => import("./map/map"), {
  ssr: false,
});

// Dependencies
import axios from "axios";

// Google Analytics
import ReactGA from "react-ga4";

// Store
import { useAppSelector } from "@/lib/hooks";

function Tool() {
  // GA pageview
  ReactGA.send({ hitType: "pageview", page: "/tool" });

  // Responsiveness
  let [open, setOpen] = useState(true);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  // Window dimensions
  let [mobile, setMobile] = useState(false);

  // Layers
  const communitySelector = useAppSelector((state) => state.community);
  const environmentalSelector = useAppSelector((state) => state.environmental);
  const gridSelector = useAppSelector((state) => state.grid);
  const industrySelector = useAppSelector((state) => state.industry);
  const batterySelector = useAppSelector((state) => state.battery);
  const hydrogenSelector = useAppSelector((state) => state.hydrogen);
  const visibleSelector = useAppSelector((state) => state.visible);

  // Weights
  const weightSelector = useAppSelector((state) => state.weight.weights);

  // Map
  const [data, setData] = useState();
  const [render, setRender] = useState(false);
  const [dams, setDams] = useState<Array<object> | null>();
  const [popup, setPopup] = useState();

  // Validate Query
  const [valid, setValid] = useState(true);

  // Logic
  const [submit, setSubmit] = useState(true);

  // Hooks
  const submitCallback = useCallback(async () => {
    if (!submit) return;
    // If true, render Skeletons
    setRender(true);
    // If true, render Map and Data Table
    setDams(null);

    // GA event
    ReactGA.event({
      category: "tool",
      action: "query npd",
    });

    let valid = validate(
      communitySelector,
      environmentalSelector,
      gridSelector,
      industrySelector
    );

    setValid(valid);

    if (valid) {
      let response = await query(
        communitySelector,
        environmentalSelector,
        gridSelector,
        industrySelector,
        visibleSelector,
        batterySelector,
        hydrogenSelector,
        weightSelector
      );

      setData(response!.metadata);
      setDams(response!.dams);
      setRender(response!.render);
      setSubmit(response!.submit);
    }
    // eslint-disable-next-line
  }, [submit]);

  useEffect(() => {
    submitCallback();
  }, [submitCallback]);

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 540 ? setMobile(true) : setMobile(false);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Grid container direction={"row"}>
      <Grid item xs={3} md={3} lg={3}>
        {open ? (
          <Sidebar
            handleClose={handleClose}
            handleOpen={handleOpen}
            setSubmit={setSubmit}
            valid={valid}
          />
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              className="bg-electricity hover:bg-cherenkov text-white rounded"
              onClick={handleOpen}
              sx={{ width: "65%" }}
              endIcon={<ChevronRight />}
            >
              Open
            </Button>
          </Box>
        )}
      </Grid>
      <Grid item xs={9} md={6} lg={9}>
        {dams ? (
          <>
            <Map data={data} open={open} setPopup={setPopup} />
            <DataTable dams={dams} popup={popup}></DataTable>
          </>
        ) : render && valid ? (
          <>
            <Skeleton
              variant="rectangular"
              width={window.innerWidth / 1.5}
              height={window.innerHeight / 1.75}
            />
            <br />
            <Skeleton
              variant="rectangular"
              width={window.innerWidth / 1.5}
              height={window.innerHeight / 2.75}
            />
          </>
        ) : null}
      </Grid>
    </Grid>
  );
}

export default Tool;
