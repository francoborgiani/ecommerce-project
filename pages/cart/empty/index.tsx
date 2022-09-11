import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { ShopLayout } from "../../../components/layouts/ShopLayout";
import NextLink from "next/link";

export const EmptyCart = () => {
  return (
    <ShopLayout
      title="Empty Cart"
      pageDescription="There is no articles on your shopping cart"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh -200px)"
        style={{
          height: "calc(100vh - 200px)",
        }}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />

        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>Your cart is empty</Typography>

          <NextLink href="/" passHref>
            <Link typography="h4" color="secondary">
              Return to home
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyCart;
