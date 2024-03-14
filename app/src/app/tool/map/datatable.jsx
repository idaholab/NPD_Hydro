// React
import React, { useEffect, useState } from "react";

// MUI
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Datagrid Slots
import Toolbar from "./components/toolbar";

// Store
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

function DataTable(props) {
  let [pageSize, setPageSize] = useState(5);

  const pshSelector = useAppSelector((state) => state.psh);

  useEffect(() => {
    setPageSize(10);
  }, []);

  // Column definitions
  let columns = [
    {
      field: "rank",
      headerName: "Rank",
      description: "The rank is determined by the total score of a NPD",
      width: 100,
    },
    {
      field: "total_score",
      headerName: "Total Score",
      description:
        "The total score is determined by multiplying each Community, Environmental, Grid, and Industry weight by its respective normalized score for each NPD, and adding them together",
      width: 120,
    },
    { field: "dam_name", headerName: "Name", width: 150 },
    { field: "state", headerName: "State", width: 145 },
    { field: "county", headerName: "County", width: 140 },
    { field: "owner_name", headerName: "Owner", width: 250 },
    { field: "fed_reg", headerName: "Federally Regulated", width: 180 },
    { field: "owner_type", headerName: "Owner Type", width: 180 },
    {
      field: "cap_mw",
      headerName: "Potential Capacity (MW)",
      description: "Potential energy generation capacity of a NPD",
      width: 175,
    },
    {
      field: "dist_subst",
      headerName: "Distance to Substation (km)",
      description: "Distance from the NPD to the nearest existing substation",
      width: 215,
    },
    {
      field: "comm_score",
      headerName: "Community",
      description:
        "Community benefits consider the energy burden and social vulnerability of a community, the local air quality and proximity to energy generation facilities, as well as the level of policy support for hydropower in the state and the risk the community faces from various natural hazards, providing resilience options and cleaner energy production in the area, and potentially lowering energy costs",
      width: 105,
    },
    {
      field: "env_score",
      headerName: "Environmental",
      description:
        "Environmental benefits consider the local air quality, proximity to energy generation facilities, number of existing species and fish passage requirements at the site, providing cleaner energy production in a way that will not exacerbate environmental issues in the riverine ecosystem. This category also includes whether or not a site is located in a critical habitat or near an endangered species",
      width: 110,
    },
    {
      field: "grid_score",
      headerName: "Grid",
      description:
        "Grid benefits consider high value of power generation potential with close proximity to transmission/interconnection, peak-load shaving, serving near-by industries and maintaining reasonable cost in the region",
      width: 90,
    },
    {
      field: "industry_score",
      headerName: "Industry",
      description:
        "Industrial benefits consider high value of power generation potential with close proximity to transmission/interconnection, providing additional electricity options to nearby energy-intensive industries",
      width: 110,
    },
    {
      field: "batteries_score",
      headerName: "Batteries",
      description:
        "Battery feasibility considers potential generation capacity and distance to substation as main features. These two features are directly related to $/MW connection to the grid.  Moreover, battery feasibility is also dependent on proximity to industries, medical facilities, energy demand and retail price in the region",
      width: 110,
    },
    {
      field: "h2_feasibility_score",
      headerName: "H2 Feasibility",
      description:
        "Hydrogen feasibility considers the 1) amount of hydrogen production per year (hydrogen generation is directly proportional to the dam’s generation capacity and capacity factor), 2) proximity to industries, medical facilities and natural gas compressing stations and 3) states which have high price of electricity.",
      width: 125,
    },
    {
      field: "psh_feasibility",
      headerName: "PSH Feasibility",
      description: "",
      width: 125,
    },
    {
      field: "crit_hab",
      headerName: "Critical Habitat",
      description:
        "Whether the NPD is located in a designated critical habitat area",
      width: 130,
    },
    {
      field: "prot_land",
      headerName: "Protected Land",
      description:
        "Whether the NPD is located in a designated protected land area",
      width: 130,
    },
    {
      field: "imp_stream",
      headerName: "Impaired Stream",
      description: "Whether the NPD is associated with an impaired stream",
      width: 130,
    },
    {
      field: "elec_prc",
      headerName: "Retail Price of Electricity (cents/kWh)",
      description:
        "Statewide average retail price of electricity in cents per kilowatt hour",
      width: 255,
    },
    {
      field: "wholesale_prc",
      headerName: "Wholesale Price of Electricity ($/MWh)",
      description:
        "Statewide average wholesale price of electricity in dollars per megawatt hour",
      width: 265,
    },
    {
      field: "hyd_fin_ct",
      headerName: "Financial Incentives",
      description:
        "Number of hydroelectric financial incentives available in the state",
      width: 150,
    },
    {
      field: "hyd_reg_ct",
      headerName: "Regulatory Policies",
      description:
        "Number of regulatory policies promoting hydroelectricity in the state",
      width: 150,
    },
  ];

  return (
    <Box sx={{ padding: "1rem 0" }}>
      <DataGrid
        sx={{
          width: "calc(100vw / 1.25)",
          maxWidth: "75vw",
          backgroundColor: "#FFFFFF",
        }}
        columns={columns}
        slots={{ toolbar: Toolbar }}
        experimentalFeatures={{ columnGrouping: true }}
        columnGroupingModel={[
          {
            groupId: "Owner Information",
            children: [
              {
                field: "owner_name",
              },
              {
                field: "fed_reg",
              },
              {
                field: "owner_type",
              },
            ],
          },
          {
            groupId: "Individual Scores",
            children: [
              {
                field: "comm_score",
              },
              {
                field: "env_score",
              },
              {
                field: "grid_score",
              },
              {
                field: "industry_score",
              },
            ],
          },
          {
            groupId: "Feasibility Scores",
            children: [
              {
                field: "batteries_score",
              },
              {
                field: "h2_feasibility_score",
              },
              {
                field: "psh_feasibility",
              },
            ],
          },
          {
            groupId: "Land Use Restrictions",
            children: [
              {
                field: "crit_hab",
              },
              {
                field: "prot_land",
              },
              {
                field: "imp_stream",
              },
            ],
          },
          {
            groupId: "Grid Information",
            children: [
              {
                field: "cap_mw",
              },
              {
                field: "dist_subst",
              },
            ],
          },
          {
            groupId: "Economic Features",
            children: [
              {
                field: "elec_prc",
              },
              {
                field: "wholesale_prc",
              },
              {
                field: "hyd_fin_ct",
              },
              {
                field: "hyd_reg_ct",
              },
            ],
          },
        ]}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
          columns: {
            columnVisibilityModel: {
              psh_feasibility: pshSelector["Include PSH Feasibility"],
            },
          },
        }}
        autoHeight={true}
        rows={props.dams}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        pageSizeOptions={[10, 25, 50, 100]}
        pageSize={pageSize}
        getRowId={(row) => {
          return row.objectid;
        }}
        getRowHeight={() => "auto"}
        getEstimatedRowHeight={() => 52}
      ></DataGrid>
    </Box>
  );
}

export default DataTable;
