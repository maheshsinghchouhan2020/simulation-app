"use client"

import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import React from 'react'

const Deployments = () => {

  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 1,
    maxColumns: 1,
  });

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#e0e0e0",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
          }}
        >
          Deployments Table
        </Box>

        <Box
          sx={{
            width: "95%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "100px",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <DataGrid
              {...data}
              loading={loading}
              slots={{ toolbar: GridToolbar }}
            />
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Deployments