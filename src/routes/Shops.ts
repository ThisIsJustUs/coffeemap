import express from 'express';
import {
    createShop,
    deleteShop,
    getAllShops,
    getShopById,
    updateShop,
} from '../controllers/Shops';

const router = express.Router();

router.get('/', getAllShops);
router.get('/:id', getShopById);
router.post('/', createShop);
router.put('/:id', updateShop);
router.delete('/:id', deleteShop);

export { router };
