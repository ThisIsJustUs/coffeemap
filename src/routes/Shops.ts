import express from 'express';
import {
    createShop,
    deleteShop,
    getAllShops,
    getShopById,
    updateShop,
} from '../controllers/Shops';
import isLoggedIn from '../middleware/isLoggedIn';

const router = express.Router();

router.use(isLoggedIn);

router.get('/', getAllShops);
router.get('/:id', getShopById);
router.post('/', createShop);
router.put('/:id', updateShop);
router.delete('/:id', deleteShop);

export { router };
