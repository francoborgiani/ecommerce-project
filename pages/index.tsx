import {
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layouts/ShopLayout";
import { ProductList } from "../components/products";
import { initialData } from '../database/products';

const Home: NextPage = () => {
  return (
    <ShopLayout title={"Home"} pageDescription={""} imageFullUrl={""}>
      <Typography variant="h1" component="h1">
        Borgi | Shop
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        All Products
      </Typography>
      <ProductList products={initialData.products} />
    </ShopLayout>
  );
};

export default Home;
