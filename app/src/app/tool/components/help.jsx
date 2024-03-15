"use client";

// Hooks
import { useState } from "react";

// Material
import { Box, Button, Card, Dialog, Divider, Typography } from "@mui/material";

function Help(props) {
  let [open, setOpen] = useState(props.help);

  function handleClose(event, reason) {
    if (reason && reason === "backdropClick") {
      setOpen(false);
      props.handleHelp(false);
    }

    setOpen(false);
    props.handleHelp(false);
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <Card sx={{ minHeight: "50vh", overflow: "hidden" }}>
        <Box sx={{ padding: "1.5rem" }}>
          <Typography variant={"h6"} component={"h6"}>
            Explore the NPD map
          </Typography>
          <Divider />
          <Typography variant={"body2"} component={"p"}>
            The map contains all non-powered dams in the NPD HYDRO database, as
            well as any visual layers you've selected using the scoring utility
            at the left of this page.
            <br />
            <br />
            If you want to make adjustments, you can click the{" "}
            <Typography variant="caption">OPEN</Typography> button, make your
            changes, and then click{" "}
            <Typography variant="caption">CALCLUATE NPD SCORES</Typography>{" "}
            again.
            <br />
            <br />
            NPD candidates are ranked according to your scoring layers and
            weights.
          </Typography>
        </Box>
        <Box sx={{ padding: "1.5rem" }}>
          <Typography variant={"h6"} component={"h6"}>
            Inspect NPD data
          </Typography>
          <Divider />
          <Typography variant={"body2"} component={"p"}>
            The data table contains all NPD metadata in the NPD HYDRO database.
            You can scroll left or right on the table to examine NPD attributes.
            Hover over any column headers for more detailed information.
            <br />
            <br />
            This table updates automatically if you make any changes to your
            scoring layers and weights.
            <br />
            <br />
            You can export the results of your query by clicking the{" "}
            <Typography variant="caption">EXPORT TABLE</Typography> button.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end", padding: "1rem" }}>
          <Button
            className="bg-electricity hover:bg-cherenkov text-white rounded"
            onClick={handleClose}
          >
            OK
          </Button>
        </Box>
      </Card>
    </Dialog>
  );
}

export default Help;
