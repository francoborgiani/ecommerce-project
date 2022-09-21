import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Chip, Grid, Link, Typography, Box } from "@mui/material";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import NextLink from "next/link";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Name", width: 300 },
  {
    field: "paid",
    headerName: "Paid",
    width: 200,
    renderCell: (params) => {
      return params.row.paid ? (
        <Chip color="success" label="Paid" variant="outlined" />
      ) : (
        <Chip color="error" label="Not Paied" variant="outlined" />
      );
    },
  },
  {
    field: "",
    headerName: "",
    width: 200,
    renderCell: (params) => (
      <Box>
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link sx={{ cursor: "pointer" }}>View Order</Link>
        </NextLink>
      </Box>
    ),
  },
];

const rows = [
  { id: 1, paid: true, fullname: "Franco Borgiani" },
  { id: 2, paid: false, fullname: "Florence Capdevielle " },
  { id: 3, paid: false, fullname: "Nicolson Martinez" },
  { id: 4, paid: true, fullname: "Mia Martinez" },
  { id: 5, paid: false, fullname: "Alexander Sanchez" },
  { id: 6, paid: false, fullname: "Marianella Borgiani" },
];

const HistoryPage = () => {
  return (
    <ShopLayout title="Orders history" pageDescription="User order history">
      <Typography variant="h1">Orders</Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
