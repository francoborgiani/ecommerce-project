import React from "react";
import { useRouter } from "next/router";
import { ShopLayout } from "../../components/layouts";
import { initialData } from "../../database/products";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { SlideShow } from "../../components/products";
import { ItemCounter } from '../../components/ui/ItemCounter';
import { SizeSelector } from '../../components/products/SizeSelector';

export const SingleProduct = () => {
  const product = initialData.products[0];
  const router = useRouter();
  const { slug } = router.query;

  return (
    <ShopLayout title={product.title} pageDescription={""} imageFullUrl={""}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <SlideShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              ${product.price}
            </Typography>

            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Quantity</Typography>
              <ItemCounter />
              <SizeSelector
                sizes={product.sizes}
                selectedSize={product.sizes[0]}
              />
            </Box>

            <Button color="info" className="circular-btn">
              Add to cart
            </Button>

            {/* <Chip label="Out of stock" color="error" variant="outlined"></Chip> */}

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Description</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};
export default SingleProduct;
