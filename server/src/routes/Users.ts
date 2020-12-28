import express from 'express';
import isLoggedIn from '../middleware/isLoggedIn';
import {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/Users';

const router = express.Router();

// All /users routes are protected by authentication
router.use(isLoggedIn);

router.get('/', getAllUsers);
router.get('/:id', getUsersById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export { router };
