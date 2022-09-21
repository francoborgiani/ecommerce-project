// ** Next Imports
import type { NextApiRequest, NextApiResponse } from "next";
// ** Database Imports
import { connect, disconnect, SHOP_CONSTANTS } from "../../../database";
import { Product } from "../../../models";
// ** Typescript Interfaces
import { IProduct } from "../../../interfaces/product";

type Data = string | IProduct[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;
    default:
      res.status(403).send("Method Not Allowed");
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();

  const { gender = "all" } = req.query;
  let condition = {};

  if (gender !== "all" && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
    condition = {
      gender,
    };
  }

  const products = await Product.find(condition)
    .select("title images price slug inStock -_id")
    .lean();

  await disconnect();
  res.send(products);
};
