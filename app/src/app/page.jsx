"use client";

// Hooks
import { useEffect, useState, useRef } from "react";

// Material
import {
  Box,
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

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <>
      <Grid
        direction={"column"}
        container
        sx={{ position: "relative", top: "7.5vh", backgroundColor: "black" }}
      >
        {mobile ? (
          <Grid item sx={{ height: "90vh" }}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "90vh",
              }}
              src={"/png/idahofalls.png"}
            />
            <Box
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
            </Box>
          </Grid>
        ) : (
          <Grid item sx={{ height: "90vh" }}>
            <Box sx={{ height: "90vh" }}>
              <video src="/idahofalls.mov" ref={vidRef} muted autoPlay loop />
              <Box
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
                  A non-powered dam assessment utility, for research
                  professionals
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
              </Box>
            </Box>
          </Grid>
        )}
        <Grid container direction={mobile ? "column" : "row"}>
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
