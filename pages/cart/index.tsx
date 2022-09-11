import { ShopLayout } from "../../components/layouts/ShopLayout";
import { Typography } from '@mui/material';
export const CartPage = () => {
  return (
    <ShopLayout
      title="Shopping Cart"
      pageDescription="Hey, this is your shopping cart"
    >
      <Typography>Cart Page</Typography>
    </ShopLayout>
  );
};

export default CartPage;
