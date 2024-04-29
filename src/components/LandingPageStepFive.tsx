import { Alert, AlertTitle, Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'

function createData(name: string, calories: string, fat: number) {
  return { name, calories, fat };
}

const rows = [createData("jhon", "good", 1)];

const LandingPageStepFive = () => {
  return (
    <>
      <Box sx={{ paddingTop: "40px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack sx={{ width: "92%" }} spacing={2}>
            <Alert severity="warning" onClose={() => {}}>
              <AlertTitle>warning</AlertTitle>
              Preview of a query may take several minutes
            </Alert>
          </Stack>
        </Box>

        <Box sx={{ paddingTop: "20px", marginLeft: "30px" }}>
          <Stack spacing={2} direction="row">
            <Button variant="outlined">SHOW PREVIEW</Button>
          </Stack>
        </Box>

        <Box sx={{ paddingTop: "20px", marginLeft: "30px" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>queryName</TableCell>
                  <TableCell align="right">conditions</TableCell>
                  <TableCell align="right">maxCount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default LandingPageStepFive