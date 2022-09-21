import { ShopLayout } from "../../components/layouts/ShopLayout";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import { CartList, OrderSummary } from "../../components/cart";
import NextLink from "next/link";
export const SummaryPage = () => {
  return (
    <ShopLayout
      title="Order Summary"
      pageDescription="This is your order resume"
    >
      <Typography variant="h1" component="h1">
        Order Summary
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resume (3 items)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <NextLink href="/checkout/address" passHref>
                  <Link underline="always">Edit</Link>
                </NextLink>
              </Box>

              <Typography variant="subtitle1">Shipping Address</Typography>
              <Typography>Franco Borgiani</Typography>
              <Typography>Minuanes M136 S8</Typography>
              <Typography>Salinas, 15100</Typography>
              <Typography>Uruguay</Typography>
              <Typography>+598 91308679</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" passHref>
                  <Link underline="always">Edit</Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button
                  variant="contained"
                  color="primary"
                  className="circular-btn"
                  size="large"
                >
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
