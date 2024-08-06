import mongoose from "mongoose";

const cartCollection = "cart";

const cartSchema = new mongoose.Schema({
  products: {
    type: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: "product" }, quantity: Number }], // Array de objetos que contienen un producto y su cantidad
    default: [], // Si no se especifica la propiedad products, se inicializa como un array vacío
  },
});

export const cartModel = mongoose.model(cartCollection, cartSchema);
