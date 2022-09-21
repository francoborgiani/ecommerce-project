import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../interfaces/product";
import { connect, disconnect } from '../../../database/db';
import { Product } from "../../../models";

type Data = string | IProduct[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return searchProducts(req, res);
    default:
      return res.status(403).send("Method Not Allowed");
  }
}
async function searchProducts(req: NextApiRequest, res: NextApiResponse<Data>) {
  await connect()
  let { q = "" } = req.query;
  
  if (q.length == 0) {
    return res.status(400).send("Search must have a query")
  }
  q = q.toString().toLowerCase()

  const products = await Product.find({
    $text: {
      $search: q
    }
  })
    .select("title price images inStock slug -_id")
    .lean()
  
  await disconnect()
  return res.send(products)
}
