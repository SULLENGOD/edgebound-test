import { Router } from "express";
import { getInventory, getProduct} from "../controllers/ecomerce.controllers";

const router: Router = Router();

// router.get('/inventory', getInventory);
router.get('/inventory', getProduct)

export default router;