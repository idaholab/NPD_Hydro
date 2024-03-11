import React from "react";
import { Button } from "@mui/material";
import { createSvgIcon } from "@mui/material/utils";
import {
  GridToolbarContainer,
  gridExpandedSortedRowIdsSelector,
  useGridApiContext,
} from "@mui/x-data-grid";

const ExportIcon = createSvgIcon(
  <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />,
  "SaveAlt"
);

export default function Toolbar() {
  const apiRef = useGridApiContext();

  const getFilteredRows = ({ apiRef }) =>
    gridExpandedSortedRowIdsSelector(apiRef);
  const handleExport = (options) => apiRef.current.exportDataAsCsv(options);

  const buttonBaseProps = {
    color: "primary",
    size: "small",
    startIcon: <ExportIcon />,
  };

  return (
    <GridToolbarContainer>
      <Button
        sx={{ padding: "0.75rem 1rem", color: "#2BA8E0" }}
        {...buttonBaseProps}
        onClick={() => handleExport({ getRowsToExport: getFilteredRows })}
      >
        Export NPD Results
      </Button>
    </GridToolbarContainer>
  );
}
