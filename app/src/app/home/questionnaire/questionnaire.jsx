"use client";

// React
import React, { useState } from "react";

// Axios
import axios from "axios";

// Material
import {
  Box,
  Button,
  Container,
  MenuItem,
  FormControl,
  IconButton,
  InputLabel,
  Typography,
  Paper,
  Select,
  Stepper,
  Step,
  StepLabel,
  Tooltip,
  Divider,
} from "@mui/material";

// Icon
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// Form
import { steps, benefits, userGroups } from "./form";
import { states } from "./states";

// Store
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { weightActions } from "@/lib/features/weight";

// Router
import { useRouter } from "next/navigation";

// Google Analytics
import ReactGA from "react-ga4";

function Questionnaire() {
  // Hooks
  let [activeStep, setActiveStep] = useState(0);
  let [group, setGroup] = useState("");
  let [benefit, setBenefit] = useState("");

  // States and Counties
  let [state, setState] = useState("");
  let [county, setCounty] = useState("");
  let [counties, setCounties] = useState();

  // Store
  const storeDispatch = useAppDispatch();

  // Router
  const router = useRouter();

  // Function Handlers
  function handleNext() {
    setActiveStep(activeStep + 1);
  }

  async function handleFinish() {
    ReactGA.event({
      category: "questionnaire",
      action: "questionnaire submit",
    });

    switch (benefit) {
      case "community":
        storeDispatch(
          weightActions.dispatchWeights({
            category: "community",
            weight: 1,
          })
        );
        storeDispatch(
          weightActions.dispatchWeights({
            category: "environmental",
            weight: 0.5,
          })
        );
        storeDispatch(
          weightActions.dispatchWeights({
            category: "grid",
            weight: 0.5,
          })
        );
        storeDispatch(
          weightActions.dispatchWeights({
            category: "industry",
            weight: 0.5,
          })
        );
        break;
      case "environmental":
        storeDispatch(
          weightActions.dispatchWeights({
            category: "community",
            weight: 0.5,
          })
        );
        storeDispatch(
          weightActions.dispatchWeights({
            category: "environmental",
            weight: 1,
          })
        );
        storeDispatch(
          weightActions.dispatchWeights({
            category: "grid",
            weight: 0.5,
          })
        );
        storeDispatch(
          weightActions.dispatchWeights({
            category: "industry",
            weight: 0.5,
          })
        );
        break;
      case "grid":
        storeDispatch(
          weightActions.dispatchWeights({
            category: "community",
            weight: 0.5,
          })
        );
        storeDispatch(
          weightActions.dispatchWeights({
            category: "environmental",
            weight: 0.5,
          })
        );
        storeDispatch(
          weightActions.dispatchWeights({
            category: "grid",
            weight: 1,
          })
        );
        storeDispatch(
          weightActions.dispatchWeights({
            category: "industry",
            weight: 0.5,
          })
        );
        break;
      case "industry":
        storeDispatch(
          weightActions.dispatchWeights({
            category: "community",
            weight: 0.5,
          })
        );
        storeDispatch(
          weightActions.dispatchWeights({
            category: "environmental",
            weight: 0.5,
          })
        );
        storeDispatch(
          weightActions.dispatchWeights({
            category: "grid",
            weight: 0.5,
          })
        );
        storeDispatch(
          weightActions.dispatchWeights({
            category: "industry",
            weight: 1,
          })
        );
        break;
      default:
    }

    await axios
      .post(`api/questionnaire`, {
        userGroup: group,
        state: state,
        county: county,
        benefits: benefit,
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        storeDispatch(weightActions.benefit(benefit));
        router.push("/tool");
      });
  }

  function handleGroup(event) {
    setGroup(event.target.value);
  }

  async function handleRegion(event) {
    setState(event.target.value);
    let countyData = await getCounties(event.target.value);
    setCounties(countyData);
  }

  async function getCounties(state) {
    return await axios
      .post(`api/questionnaire/counties`, {
        state: state,
      })
      .then((response) => {
        // console.log(respinse);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleBenefit(benefit) {
    setBenefit(benefit);
  }

  return (
    <Container sx={{ fontSize: "14px" }}>
      <Paper sx={{ padding: "0 1rem", height: "fit-content" }}>
        <Container sx={{ padding: "1rem" }}>
          <Typography variant="h5">Getting Started</Typography>
          <Typography variant="body">
            Start using the tool by answering a brief questionnaire designed to
            tailor non-powered dam assets based on your stakeholder group,
            region of interest, and desired outcome from conversion.
            <br />
            <br />
            This questionnaire collects user input so as to inform future
            research about interest in non-powered dam conversion.
          </Typography>
          <br />
          <br />
          <Divider />
          <br />
          <Box>
            <Stepper activeStep={activeStep}>
              {steps.map((step, index) => {
                return (
                  <Step key={step.title}>
                    <StepLabel>{step.title}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <Container sx={{ minHeight: "250px", padding: "1.5rem 0" }}>
              {steps[activeStep].description}
              <br />
              <br />
              {/* This is an IIFE function, which serves as a JSX switch. Functions are not valid React children, and so you have to .call(this) at the end */}
              {(() => {
                switch (activeStep) {
                  case 0:
                    return (
                      <FormControl fullWidth>
                        <InputLabel id="user-group-select">
                          User Group
                        </InputLabel>
                        <Select
                          label={"User Group"}
                          value={group}
                          onChange={(event) => {
                            handleGroup(event);
                          }}
                        >
                          {userGroups.map((group, index) => {
                            return (
                              <MenuItem key={index} value={group}>
                                {group}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    );
                  case 1:
                    return (
                      <Box>
                        <FormControl fullWidth>
                          <InputLabel id="user-state-select">State</InputLabel>
                          <Select
                            labelId="user-state-select"
                            label={"State"}
                            value={state}
                            onChange={(event) => {
                              setCounty("");
                              handleRegion(event);
                            }}
                            MenuProps={{
                              PaperProps: { sx: { maxHeight: 350 } },
                            }}
                          >
                            {states.map((state, index) => {
                              return (
                                <MenuItem key={index} value={state}>
                                  {state}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                        <br />
                        <br />
                        {counties ? (
                          <FormControl fullWidth>
                            <InputLabel id="user-county-select">
                              County
                            </InputLabel>
                            <Select
                              labelId="user-county-select"
                              label={"County"}
                              value={county}
                              onChange={(event) => {
                                setCounty(event.target.value);
                              }}
                              MenuProps={{
                                PaperProps: { sx: { maxHeight: 350 } },
                              }}
                            >
                              {counties.map((county, index) => {
                                return (
                                  <MenuItem
                                    key={index}
                                    value={county.county_name}
                                  >
                                    {county.county_name[0] +
                                      county.county_name
                                        .slice(1, county.county_name.length)
                                        .toLowerCase()}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        ) : null}
                      </Box>
                    );
                  case 2:
                    return (
                      <Box>
                        <br />
                        {benefits.map(({ benefit, description }) => {
                          return (
                            <Box key={benefit}>
                              <Typography variant="caption">
                                {benefit}
                              </Typography>
                              <Tooltip placement={"right"} title={description}>
                                <IconButton>
                                  <InfoOutlinedIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </Box>
                          );
                        })}
                        <br />
                        <FormControl fullWidth>
                          <InputLabel id="benefits-select">Benefits</InputLabel>
                          <Select
                            label={"Benefits"}
                            value={benefit}
                            onChange={(event) => {
                              handleBenefit(event.target.value);
                            }}
                          >
                            {benefits.map(({ benefit, value }, index) => {
                              return (
                                <MenuItem key={index} value={value}>
                                  {benefit}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </Box>
                    );
                  default:
                    return;
                }
              }).call(this)}
            </Container>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep === steps.length - 1 ? (
                <Button
                  onClick={() => {
                    handleFinish();
                  }}
                >
                  Finish
                </Button>
              ) : (
                <Box>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Button
                      size="large"
                      onClick={() => {
                        handleNext();
                      }}
                    >
                      Next
                    </Button>
                  </Box>
                  <Divider />
                  <Box>
                    <Button
                      size="small"
                      sx={{ padding: "0.5rem 0" }}
                      onClick={() => {
                        router.push("/tool");
                      }}
                    >
                      Skip questionnaire
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </Paper>
    </Container>
  );
}

export default Questionnaire;
