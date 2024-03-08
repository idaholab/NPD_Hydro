import React from "react";

// Material
import { Box, Stack, Link } from "@mui/material";

// Logos
import INL_STACKED from "../Assets/inl-logo-stacked.png";
import PNNL from "../Assets/pnnl-logo-copper.png";
import SAPERE from "../Assets/sapere-logo.png";

function Footer() {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        {" "}
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {/* <Box
            component="img"
            sx={{
              width: "15%",
            }}
            src={INL_STACKED}
          />
          <Box
            component="img"
            sx={{
              width: "20%",
            }}
            src={PNNL}
          />
          <Box
            component="img"
            sx={{
              width: "20%",
            }}
            src={SAPERE}
          /> */}
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <br />
        <Box sx={{ padding: "0", fontSize: "0.75rem" }}>
          Technical Contacts: |{" "}
          <Link sx={{ padding: "0" }} href="mailto:kazi.tamaddun@pnnl.gov">
            Research
          </Link>{" "}
          |{" "}
          <Link sx={{ padding: "0" }} href="mailto:nathan.woodruff@inl.gov">
            Site Administrator
          </Link>{" "}
          |{" "}
          <Link
            sx={{ padding: "0" }}
            href="https://doe.responsibledisclosure.com/hc/en-us"
          >
            DOE Cyber: Vulnerability Disclosure Program
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
