import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ShopLayout } from "../../components/layouts";

export const Address = () => {
  return (
    <ShopLayout
      title={"Address"}
      pageDescription={"Confirm address destination"}
    >
      <Typography variant="h1" component="h1">
        Address
      </Typography>

      <Grid container spacing={2} sx={{mt:2}}>
        <Grid item xs={12} sm={6}>
          <TextField label="First Name" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Last Name" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Address" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Second Address" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Postal Code" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select variant="filled" label="" value={null}>
              <MenuItem value={1}>Costa Rica</MenuItem>
              <MenuItem value={2}>Francia</MenuItem>
              <MenuItem value={3}>Uruguay</MenuItem>
              <MenuItem value={4}>Argentina</MenuItem>
              <MenuItem value={5}>Chile</MenuItem>
              <MenuItem value={6}>Japón</MenuItem>
              <MenuItem value={7}>China</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Phone Number" variant="filled" fullWidth />
        </Grid>
      </Grid>

      <Box sx={{mt: 5}} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="secondary"
          className="circular-btn"
          size="large"
        >
          Review Order
        </Button>
      </Box>
    </ShopLayout>
  );
};

export default Address;
