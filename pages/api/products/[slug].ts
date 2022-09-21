import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../interfaces/product";
import { Product } from "../../../models";
import { connect, disconnect } from '../../../database/db';

type Data = string | IProduct;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    switch (req.method) {
      case "GET":
        getSingleProduct(req, res);
        break;

      default:
        res.status(403).send("Method Not Allowed");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}
async function getSingleProduct(req: NextApiRequest, res: NextApiResponse) {
  await connect()
  const { slug } = req.query;
  if (slug) {
    const product = await Product.findOne({ slug }).lean();
    await disconnect()
    return product 
      ? res.send(product) 
      : res.status(404).send("Not Found");
  }

  return res.send("Bad Request");
}
