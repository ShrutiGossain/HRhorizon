import React from 'react'
import { Box, useTheme } from "@mui/material";
import { useGetEmployeesQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Employees = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetEmployeesQuery();
    console.log("data", data);

    const columns = [
        {
            field: "_id",
            headerName: "User ID",
            flex: 1,
          },
        {
            field: "Department",
            headerName: "Department",
            flex: 0.5,
        },
        {
            field: "Gender",
            headerName: "Gender",
            flex: 0.5,
        },
        {
            field: "Age",
            headerName: "Age",
            flex: 0.5,
        },
        {
            field: "Education",
            headerName: "Education",
            flex: 0.5,
        },
    ]

  return <Box m="1.5rem 2.5rem">
    <Header title="Employees" subtitle="List of Employees" />
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
}

export default Employees
