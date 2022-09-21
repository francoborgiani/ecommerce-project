import { ShopLayout } from '../components/layouts/ShopLayout';
import { Typography, Box } from '@mui/material';
// pages/404.tsx
export default function Custom404() {
  return (
    <ShopLayout title='Not Found' pageDescription='not found'>
      <Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 123px)">
        <Typography variant='h1' align='center'>404 - Page Not Found</Typography>
      </Box>
    </ShopLayout>
  )
}