// React
import React from "react";

// Material
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Checkbox,
  Divider,
  IconButton,
  List,
  Typography,
  Tooltip,
  Slider,
  Stack,
} from "@mui/material";

// Icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// Layers
import { communityLayers } from "./types/communityLayers";
import { environmentalLayers } from "./types/environmentalLayers";
import { gridLayers } from "./types/gridLayers";
import { industryLayers } from "./types/industryLayers";
import { batteryLayers } from "./types/batteryLayers";
import { hydrogenLayers } from "./types/hydrogenLayers";
import { pshLayers } from "./types/pshLayers";

// Store
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { weightActions } from "@/lib/features/weight";
import { communityActions } from "@/lib/features/community";
import { environmentalActions } from "@/lib/features/environmental";
import { gridActions } from "@/lib/features/grid";
import { industryActions } from "@/lib/features/industry";
import { batteryActions } from "@/lib/features/battery";
import { hydrogenActions } from "@/lib/features/hydrogen";
import { pshActions } from "@/lib/features/psh";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 0.25,
    label: ".25",
  },
  {
    value: 0.5,
    label: ".5",
  },
  {
    value: 0.75,
    label: ".75",
  },
  {
    value: 1,
    label: "1",
  },
];

function Weights() {
  const storeDispatch = useAppDispatch();
  const weightSelector = useAppSelector((state) => state.weight.weights);
  const communitySelector = useAppSelector((state) => state.community);
  const environmentalSelector = useAppSelector((state) => state.environmental);
  const gridSelector = useAppSelector((state) => state.grid);
  const industrySelector = useAppSelector((state) => state.industry);
  const batterySelector = useAppSelector((state) => state.battery);
  const hydrogenSelector = useAppSelector((state) => state.hydrogen);
  const pshSelector = useAppSelector((state) => state.psh);
  const priority = useAppSelector((state) => state.weight.benefit);

  // Handlers
  function communitySelectAll(event) {
    communityLayers.map((layer, index) => {
      return storeDispatch(
        communityActions.dispatchCommunityLayers({
          layer: layer.name,
          bool: event.target.checked,
        })
      );
    });
  }

  function environmentalSelectAll(event) {
    environmentalLayers.map((layer, index) => {
      return storeDispatch(
        environmentalActions.dispatchEnvironmentalLayers({
          layer: layer.name,
          bool: event.target.checked,
        })
      );
    });
  }
  function gridSelectAll(event) {
    gridLayers.map((layer, index) => {
      return storeDispatch(
        gridActions.dispatchGridLayers({
          layer: layer.name,
          bool: event.target.checked,
        })
      );
    });
  }
  function industrySelectAll(event) {
    industryLayers.map((layer, index) => {
      return storeDispatch(
        industryActions.dispatchIndustryLayers({
          layer: layer.name,
          bool: event.target.checked,
        })
      );
    });
  }

  return (
    <Box>
      <Accordion sx={{ boxShadow: 5 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle2">Community</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0 1.5rem" }}>
          <Typography variant="caption">
            Community benefits consider the energy burden and social
            vulnerability of a community, as well as the local air quality,
            percentage of fossil-fuel-based generation replaced by potential
            hydropower, level of policy/financial support for hydropower,
            critical infrastructure such as hospitals and schools, and risks
            from various natural hazards. Overall, the score associated with
            these benefits looks into resilience, cleaner energy, and
            potentially lower cost of electricity for the community.
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="subtitle">Community Weight</Typography>
          <br />
          <br />
          <Typography variant="caption">
            Use the slider to weigh Community benefits in the NPD score
          </Typography>
          <br />
          <br />
          <Slider
            defaultValue={
              priority == "community" ? 1 : weightSelector.community
            }
            step={0.25}
            marks={marks}
            min={0}
            max={1}
            valueLabelDisplay="off"
            onChangeCommitted={(event, value) => {
              storeDispatch(
                weightActions.dispatchWeights({
                  category: "community",
                  weight: value,
                })
              );
            }}
          />
          <br />
          <br />
          <Divider />
          <br />
          <br />
          <Typography variant="subtitle">Features Considered</Typography>
          <br />
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            <Checkbox
              defaultChecked={true}
              onChange={(event) => {
                communitySelectAll(event);
              }}
            />
            <Typography variant="body">Select All</Typography>
          </Box>
          <List>
            {communityLayers.map((layer, index) => {
              return (
                <Box key={index + 1} sx={{ padding: "0.5rem 0" }}>
                  <Stack direction={"row"}>
                    <Checkbox
                      key={index + 1}
                      checked={communitySelector[layer.name]}
                      value={communitySelector[layer.name]}
                      onChange={(event) => {
                        storeDispatch(
                          communityActions.dispatchCommunityLayers({
                            layer: layer.name,
                            bool: event.target.checked,
                          })
                        );
                      }}
                    />
                    <Typography
                      variant="body"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {layer.name}
                    </Typography>
                    <Tooltip title={layer.description}>
                      <IconButton>
                        <InfoOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Box>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: 5 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle2">Environmental</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0 1.5rem" }}>
          <Typography variant="caption">
            Environmental benefits consider the local air quality, percentage of
            fossil-fuel-based generation replaced by potential hydropower,
            presence of oceanic and inland species in the adjoining waterbodies,
            fish passage requirement, and dam removal considerations. Overall,
            the score associated with these benefits looks into providing
            options for cleaner energy in a way that will not exacerbate
            environmental issues in the ecosystem.
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="subtitle">Environmental Weight</Typography>
          <br />
          <br />
          <Typography variant="caption">
            Use the slider to weigh Environmental benefits in the NPD score
          </Typography>
          <br />
          <br />
          <Slider
            defaultValue={
              priority == "environmental" ? 1 : weightSelector.environmental
            }
            step={0.25}
            marks={marks}
            min={0}
            max={1}
            valueLabelDisplay="off"
            onChangeCommitted={(event, value) =>
              storeDispatch(
                weightActions.dispatchWeights({
                  category: "environmental",
                  weight: value,
                })
              )
            }
          />
          <br />
          <br />
          <Divider />
          <br />
          <br />
          <Typography variant="subtitle">Features Considered</Typography>
          <br />
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            <Checkbox
              defaultChecked={true}
              onChange={(event) => {
                environmentalSelectAll(event);
              }}
            />
            <Typography variant="body">Select All</Typography>
          </Box>
          <List>
            {environmentalLayers.map((layer, index) => {
              return (
                <Box key={index + 1} sx={{ padding: "0.5rem 0" }}>
                  <Stack direction={"row"}>
                    <Checkbox
                      key={index + 1}
                      checked={environmentalSelector[layer.name]}
                      value={environmentalSelector[layer.name]}
                      onChange={(event) => {
                        storeDispatch(
                          environmentalActions.dispatchEnvironmentalLayers({
                            layer: layer.name,
                            bool: event.target.checked,
                          })
                        );
                      }}
                    />
                    <Typography
                      variant="body"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {layer.name}
                    </Typography>
                    <Tooltip title={layer.description}>
                      <IconButton>
                        <InfoOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Box>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: 5 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle2">Grid</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0 1.5rem" }}>
          <Typography variant="caption">
            Grid benefits consider the power generation potential, proximity to
            substations, proximity to energy-intensive facilities, peak energy
            demand, and energy consumption and wholesale price of electricity in
            the region. Overall, the score associated with these benefits looks
            into grid transmission/interconnection, demand, and reasonable cost
            in the region.
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="subtitle">Grid Weight</Typography>
          <br />
          <br />
          <Typography variant="caption">
            Use the slider to weigh Grid benefits in the NPD score
          </Typography>
          <br />
          <br />
          <Slider
            defaultValue={priority == "grid" ? 1 : weightSelector.grid}
            step={0.25}
            marks={marks}
            min={0}
            max={1}
            valueLabelDisplay="off"
            onChangeCommitted={(event, value) =>
              storeDispatch(
                weightActions.dispatchWeights({
                  category: "grid",
                  weight: value,
                })
              )
            }
          />
          <br />
          <br />
          <Divider />
          <br />
          <br />
          <Typography variant="subtitle">Features Considered</Typography>
          <br />
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            <Checkbox
              defaultChecked={true}
              onChange={(event) => {
                gridSelectAll(event);
              }}
            />
            <Typography variant="body">Select All</Typography>
          </Box>
          <List>
            {gridLayers.map((layer, index) => {
              return (
                <Box key={index + 1} sx={{ padding: "0.5rem 0" }}>
                  <Stack direction={"row"}>
                    <Checkbox
                      key={index + 1}
                      checked={gridSelector[layer.name]}
                      value={gridSelector[layer.name]}
                      onChange={(event) => {
                        storeDispatch(
                          gridActions.dispatchGridLayers({
                            layer: layer.name,
                            bool: event.target.checked,
                          })
                        );
                      }}
                    />
                    <Typography
                      variant="body"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {layer.name}
                    </Typography>
                    <Tooltip title={layer.description}>
                      <IconButton>
                        <InfoOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Box>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: 5 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle2">Industry</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0 1.5rem" }}>
          <Typography variant="caption">
            Industrial benefits consider the power generation potential,
            proximity to substations, proximity to industries (providing
            additional electricity options), and retail price of electricity in
            the region. Overall, the score associated with these benefits looks
            into providing additional electricity options to nearby industries
            (i.e., energy-intensive facilities).
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="subtitle">Industry Weight</Typography>
          <br />
          <br />
          <Typography variant="caption">
            Use the slider to weigh Industry benefits in the NPD score
          </Typography>
          <br />
          <br />
          <Slider
            defaultValue={priority == "industry" ? 1 : weightSelector.industry}
            step={0.25}
            marks={marks}
            min={0}
            max={1}
            valueLabelDisplay="off"
            onChangeCommitted={(event, value) =>
              storeDispatch(
                weightActions.dispatchWeights({
                  category: "industry",
                  weight: value,
                })
              )
            }
          />
          <br />
          <br />
          <Divider />
          <br />
          <br />
          <Typography variant="subtitle">Features Considered</Typography>
          <br />
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            <Checkbox
              defaultChecked={true}
              onChange={(event) => {
                industrySelectAll(event);
              }}
            />
            <Typography variant="body">Select All</Typography>
          </Box>
          <List>
            {industryLayers.map((layer, index) => {
              return (
                <Box key={index + 1} sx={{ padding: "0.5rem 0" }}>
                  <Stack direction={"row"}>
                    <Checkbox
                      key={index + 1}
                      checked={industrySelector[layer.name]}
                      value={industrySelector[layer.name]}
                      onChange={(event) => {
                        storeDispatch(
                          industryActions.dispatchIndustryLayers({
                            layer: layer.name,
                            bool: event.target.checked,
                          })
                        );
                      }}
                    />
                    <Typography
                      variant="body"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {layer.name}
                    </Typography>
                    <Tooltip title={layer.description}>
                      <IconButton>
                        <InfoOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Box>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
      <br />
      <br />
      <Typography variant="subtitle2">Energy Storage</Typography>
      <Typography variant="body">
        Discover the feasibility of adding battery storage, hydrogen production,
        or pumped storage hydrogen in non-powered dams.
      </Typography>
      <br />
      <br />
      <Accordion sx={{ boxShadow: 5 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle2">
            Energy Storage Technology & Feasibility
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0 1.5rem" }}>
          <Typography variant="subtitle" sx={{ fontWeight: "bold" }}>
            Battery Storage Feasibility
          </Typography>
          <br />
          <br />
          <Typography variant="caption">
            Battery feasibility considers potential generation capacity and
            distance to substation as main features. These two features are
            directly related to $/MW connection to the grid. Moreover, battery
            feasibility is also dependent on proximity to industries, medical
            facilities, energy demand and retail price in the region
          </Typography>
          <br />
          <br />
          <Divider></Divider>
          <br />
          <Typography variant="subtitle">Features Considered</Typography>
          <List>
            {batteryLayers.map((layer, index) => {
              return (
                <Box key={index + 1} sx={{ padding: "0.5rem 0" }}>
                  <Stack direction={"row"}>
                    <Checkbox
                      key={index + 1}
                      checked={batterySelector[layer.name]}
                      value={batterySelector[layer.name]}
                      onChange={(event) => {
                        storeDispatch(
                          batteryActions.dispatchBatteryLayers({
                            layer: layer.name,
                            bool: event.target.checked,
                          })
                        );
                      }}
                    />
                    <Typography
                      variant="body"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {layer.name}
                    </Typography>
                    <Tooltip title={layer.description}>
                      <IconButton>
                        <InfoOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Box>
              );
            })}
          </List>
          <br />
          <Typography variant="subtitle" sx={{ fontWeight: "bold" }}>
            H2 Feasibility
          </Typography>
          <br />
          <br />
          <Typography variant="caption">
            Hydrogen feasibility considers the <br />
            1) amount of hydrogen production per year (hydrogen generation is
            directly proportional to the dam’s generation capacity and capacity
            factor), <br />
            2) proximity to industries, medical facilities and natural gas
            compressing stations and <br />
            3) states which have high price of electricity.
          </Typography>
          <br />
          <br />
          <Divider></Divider>
          <br />
          <Typography variant="subtitle">Features Considered</Typography>
          <List>
            {hydrogenLayers.map((layer, index) => {
              return (
                <Box key={index + 1} sx={{ padding: "0.5rem 0" }}>
                  <Stack direction={"row"}>
                    <Checkbox
                      key={index + 1}
                      checked={hydrogenSelector[layer.name]}
                      value={hydrogenSelector[layer.name]}
                      onChange={(event) => {
                        storeDispatch(
                          hydrogenActions.dispatchHydrogenLayers({
                            layer: layer.name,
                            bool: event.target.checked,
                          })
                        );
                      }}
                    />
                    <Typography
                      variant="body"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {layer.name}
                    </Typography>
                    <Tooltip title={layer.description}>
                      <IconButton>
                        <InfoOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Box>
              );
            })}
          </List>
          <br />
          <Typography variant="subtitle" sx={{ fontWeight: "bold" }}>
            Pumped Storage Hydro Feasibility
          </Typography>
          <br />
          <br />
          <Typography variant="caption">
            Select whether to consider Pumped Storage Hydro Feasibility in the
            NPD score
          </Typography>
          <br />
          <br />
          <List>
            {pshLayers.map((layer, index) => {
              return (
                <Box key={index + 1} sx={{ padding: "0.5rem 0" }}>
                  <Stack direction={"row"}>
                    <Checkbox
                      key={index + 1}
                      checked={pshSelector[layer.name]}
                      value={pshSelector[layer.name]}
                      onChange={(event) => {
                        storeDispatch(
                          pshActions.dispatchPshLayers({
                            layer: layer.name,
                            bool: event.target.checked,
                          })
                        );
                      }}
                    />
                    <Typography
                      variant="body"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {layer.name}
                    </Typography>
                    <Tooltip title={layer.description}>
                      <IconButton>
                        <InfoOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Box>
              );
            })}
          </List>
          <br />
          <br />
          <br />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Weights;
