import type { NextApiRequest, NextApiResponse } from "next";
import { initialData } from "../../database";
import { connect, disconnect } from '../../database/db';
import { Product } from "../../models";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (process.env.NODE_ENV === "development") {
      await connect();
      await Product.deleteMany({});
      const products = await Product.insertMany(initialData.products);

      res.send(products)
    } else {
      res.status(404).send("Not Found")
    }

  } catch (error) {
    res.status(500).send("Internal Server Error");
  } finally {
    await disconnect()
  }
}
