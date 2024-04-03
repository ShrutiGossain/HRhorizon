import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetUserPerformanceQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Performance = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetUserPerformanceQuery();
  console.log("data", data);

  const columns = [
    {
      field: "_id",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "Job Involvement",
      headerName: "Job Involvement",
      flex: 0.5,
    },
    {
      field: "Job Satisfaction",
      headerName: "Job Satisfaction",
      flex: 0.5,
    },
    {
      field: "Percent Salary Hike",
      headerName: "Percent Salary Hike",
      flex: 0.5,
    },
    {
      field: "Performance Rating",
      headerName: "Performance Rating",
      flex: 0.5,
    },
    {
      field: "Years Since Last Promotion",
      headerName: "Years Since Last Promotion",
      flex: 0.5,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Performance Rating" subtitle="List of employees performance rating" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Performance;



