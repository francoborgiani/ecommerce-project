import { Box, Grid, Typography, TextField, Button, Link } from "@mui/material";
import React from "react";
import { AuthLayout } from "../../components/layouts/AuthLayout";
import NextLink from "next/link";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register - Borgi Shop">
      <Box sx={{ width: 350, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 8 }}>
            <Typography variant="h1" component="h1">
              Sign up
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Name" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" type="email" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              className="circular-btn"
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="end">
            <NextLink href="/auth/login" passHref>
              <Link underline="always">Already have an account?</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default RegisterPage;
