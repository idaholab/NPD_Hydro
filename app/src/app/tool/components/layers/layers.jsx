// React
import React from "react";

// Layers
import { visibleLayers } from "./types/visibleLayers";

// Material
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Checkbox,
  IconButton,
  List,
  Typography,
  Tooltip,
} from "@mui/material";

// Icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// Store
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { visibleActions } from "@/lib/features/visible";

function Layers() {
  const storeDispatch = useAppDispatch();
  const visibleSelector = useAppSelector((state) => state.visible);

  return (
    <Box>
      <Accordion sx={{ boxShadow: 5 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle2">Layers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {visibleLayers.map((layer, index) => {
              return (
                <Box key={index + 1} sx={{ flexGrow: 1 }}>
                  <Checkbox
                    key={index + 1}
                    checked={visibleSelector[layer.name]}
                    value={visibleSelector[layer.name]}
                    onChange={(event) => {
                      storeDispatch(
                        visibleActions.dispatchVisibleLayers({
                          layer: layer.name,
                          bool: event.target.checked,
                        })
                      );
                    }}
                  />
                  <Typography
                    sx={{ display: "inline", fontSize: "0.75rem" }}
                    variant="body2"
                  >
                    {layer.name}
                  </Typography>
                  <Tooltip title={layer.description}>
                    <IconButton>
                      <InfoOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Layers;
