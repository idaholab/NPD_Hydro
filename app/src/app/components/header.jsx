"use client";

// Hooks
import { useState, useEffect } from "react";

// Material
import {
  AppBar,
  Box,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";

// Next
import Link from "next/link";

// Router
import { usePathname } from "next/navigation";

function Header() {
  // Window dimensions
  let [mobile, setMobile] = useState(false);

  // URL
  const router = usePathname();

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 768 ? setMobile(true) : setMobile(false); // Mobile Devices can't use the tool
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobile]);

  return (
    <>
      <AppBar
        sx={{
          background: "#000000",
          zIndex: 10,
        }}
      >
        <Toolbar sx={{ height: "7.5vh" }}>
          <Link
            style={{
              textDecoration: "none",
            }}
            href="/"
          >
            <ListItemButton
              sx={{
                color: "white",
                padding: 0,
              }}
              dense={true}
            >
              <ListItem sx={{ padding: 0 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    padding: "1rem",
                  }}
                >
                  NPD HYDRO
                </Typography>
              </ListItem>
            </ListItemButton>
          </Link>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Link style={{ textDecoration: "none" }} href="/home">
            <ListItemButton
              sx={{
                color: "white",
                padding: 0,
                textDecoration: router === "/home" ? "underline" : "unset",
              }}
              dense={true}
            >
              <ListItem sx={{ padding: 0 }}>
                <Typography
                  sx={{ padding: "0.25rem", fontSize: "1rem" }}
                  variant="subtitle2"
                >
                  HOME
                </Typography>
              </ListItem>
            </ListItemButton>
          </Link>
          <Link style={{ textDecoration: "none" }} href="/about">
            <ListItemButton
              sx={{
                color: "white",
                padding: 0,
                textDecoration: router === "/about" ? "underline" : "unset",
              }}
              dense={true}
            >
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={{ padding: "0.25rem" }} variant="subtitle2">
                  ABOUT
                </Typography>
              </ListItem>
            </ListItemButton>
          </Link>
          {!mobile ? (
            <Link style={{ textDecoration: "none" }} href="/tool">
              <ListItemButton
                sx={{
                  color: "white",
                  padding: 0,
                  textDecoration: router === "/tool" ? "underline" : "unset",
                }}
                dense={true}
              >
                <ListItem sx={{ padding: 0 }}>
                  <Typography sx={{ padding: "0.25rem" }} variant="subtitle2">
                    TOOL
                  </Typography>
                </ListItem>
              </ListItemButton>
            </Link>
          ) : null}
          <Link style={{ textDecoration: "none" }} href="/userguide">
            <ListItemButton
              sx={{
                color: "white",
                padding: 0,
                textDecoration: router === "/userguide" ? "underline" : "unset",
              }}
              dense={true}
            >
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={{ padding: "0.25rem" }} variant="subtitle2">
                  USER GUIDE
                </Typography>
              </ListItem>
            </ListItemButton>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
