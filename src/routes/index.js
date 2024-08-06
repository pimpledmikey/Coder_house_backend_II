import { Router } from "express";
import productsRouter from "./products.routes.js";
import cartsRouter from "./carts.routes.js";
import sessionRouter from "./session.routes.js"

const router = Router();

router.use("/products", productsRouter); // Agregamos la ruta de products a nuestro router principal de rutas de la API para que sea accesible desde la URL /api/products
router.use("/carts", cartsRouter); // Agregamos la ruta de carts a nuestro router principal de rutas de la API para que sea accesible desde la URL /api/carts
router.use("/session", sessionRouter) // Agregamos la ruta de session a nuestro router principal de rutas de la API para que sea accesible desde la URL /api/session

router.get("*", (req, res) => {
    try {
        res.status(404).json({ status: "Error", msg: "Ruta no encontrada" });
    }catch (error) {
        console.log(error);
        res.status(500).json({ status: "Erro", msg: "Error interno del servidor" });
    }
});
export default router;