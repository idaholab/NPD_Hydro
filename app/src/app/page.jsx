"use client";

// Hooks
import { useEffect, useRef } from "react";

// Material
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";

// Next
import Link from "next/link";

function Home() {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <Grid container>
      <Grid item>
        <Card sx={{ height: "100vh", width: "100vw" }}>
          <video src="/idahofalls.mov" ref={vidRef} muted autoPlay loop />
          <CardContent
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: "bold",
                color: "white",
                opacity: "70%",
                textShadow:
                  "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
              }}
            >
              NPD HYDRO
              <Divider sx={{ borderBottomColor: "white" }} />
            </Typography>
            <br />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  backgroundColor: "black",
                }}
                href="/home"
              >
                <ListItemButton
                  sx={{
                    color: "white",
                    padding: 0,
                    background: "black",
                    opacity: "70%",
                  }}
                  dense={true}
                >
                  <ListItem sx={{ padding: 0 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "200px",
                      }}
                    >
                      <Typography
                        sx={{
                          padding: "0.5rem",
                        }}
                        variant="h6"
                      >
                        Start
                      </Typography>
                    </Box>
                  </ListItem>
                </ListItemButton>
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Home;
