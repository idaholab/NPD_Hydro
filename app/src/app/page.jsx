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

// Components
import Logos from "./components/logos";
import Footer from "./components/footer";

function Home() {
  const vidRef = useRef();

  useEffect(() => {
    // vidRef.current.play();
  }, []);

  return (
    <>
      <Grid
        direction={"column"}
        container
        sx={{ position: "relative", top: "10vh" }}
        xs={12}
      >
        <Grid item sx={{ height: "90vh" }}>
          <Card sx={{ height: "90vh" }}>
            <video src="/idahofalls.mov" ref={vidRef} muted autoPlay loop />
            <CardContent
              style={{
                position: "absolute",
                top: "40%",
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
                  textShadow:
                    "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
                }}
              >
                NPD HYDRO
              </Typography>
              <Divider sx={{ borderBottomColor: "white" }} />
              <Typography
                variant="body"
                component="p"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  textShadow:
                    "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
                }}
              >
                A non-powered dam assessment utility, for research professionals
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
        <Grid container direction={"row"} sx={{ height: "15vh" }}>
          <Grid item xs={6}>
            <Logos background={"black"} />
          </Grid>
          <Grid item xs={6} sx={{ background: "black" }}>
            <Footer font={"white"} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
