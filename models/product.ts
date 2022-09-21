import mongoose, { Schema, model, Model } from "mongoose";
import { IProduct } from "../interfaces/product";

const ProductSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    inStock: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    sizes: [
      {
        type: String,
        enum: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        message: "{VALUE} is not an allowed size ",
      },
    ],
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["shirts", "pants", "hoodies", "hats"],
    },
    gender: {
      type: String,
      enum: ["men", "women", "kid", "unisex"],
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.index({ title: "text", tags: "text" });

export const Product: Model<IProduct> =
  mongoose.models.Product || model("Product", ProductSchema);
