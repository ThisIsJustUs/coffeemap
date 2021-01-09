import express from 'express';
import {
    getUsersById,
    updateUser,
    deleteUser,
    getAllUsers,
} from '../controllers/Users';
import { isLoggedIn } from '../middleware/isLoggedIn';

const router = express.Router();

router.use(isLoggedIn);

/*
    User routes

    Create Route is under /auth
*/

router.get('/', getAllUsers);
router.get('/:id', getUsersById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export { router };
