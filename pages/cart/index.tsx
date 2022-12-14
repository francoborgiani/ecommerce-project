import { ShopLayout } from "../../components/layouts/ShopLayout";
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { CartList, OrderSummary } from "../../components/cart";
export const CartPage = () => {
  return (
    <ShopLayout
      title="Shopping Cart"
      pageDescription="Hey, this is your shopping cart"
    >
      <Typography variant="h1" component="h1">
        Cart Page
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList editable />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Orden</Typography>
              <Divider sx={{ my: 1 }} />

              <OrderSummary />

              <Box sx={{mt: 3}}>
                <Button variant="contained" color="primary" className="circular-btn" size="large">
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

export default CartPage;
