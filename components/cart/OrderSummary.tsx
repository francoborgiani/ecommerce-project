import { Grid, Typography } from '@mui/material';

export const OrderSummary = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant='subtitle1'>
          Items:
        </Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography variant='subtitle1'>
          3
        </Typography>
      </Grid>


      <Grid item xs={6}>
        <Typography variant='subtitle1'>
          Taxes:
        </Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography variant='subtitle1'>
          $23
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant='subtitle1'>
          Total:
        </Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography variant='subtitle1'>
          $128
        </Typography>
      </Grid>

    </Grid>
  )
}
