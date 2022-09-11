import { Box, Button } from "@mui/material";
import React, { FC } from "react";
import { ISize } from "../../interfaces/product";

interface Props {
  selectedSize?: ISize;
  sizes: ISize[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          style={{
            backgroundColor: size === selectedSize 
              ? "rgb(0,0,0,0.15)" : "#fff",
          }}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
