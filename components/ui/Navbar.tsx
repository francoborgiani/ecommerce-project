import NextLink from "next/link";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display={"flex"} alignItems={"center"} underline="none">
            <Typography variant="h6">Borgi |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box sx={{ flex: 1 }} />

        <Box>
          <NextLink href="/category/men" passHref>
            <Link>
              <Button>Men</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" passHref>
            <Link>
              <Button>Women</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kid" passHref>
            <Link>
              <Button>Kid</Button>
            </Link>
          </NextLink>
        </Box>

        <Box sx={{ flex: 1 }} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href="/cart">
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
