import {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
} from './controller/Users';

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: '/users',
        method: 'get',
        action: getAllUsers,
    },
    {
        path: '/users/:id',
        method: 'get',
        action: getUsersById,
    },
    {
        path: '/users',
        method: 'post',
        action: createUser,
    },
    {
        path: '/users/:id',
        method: 'put',
        action: updateUser,
    },
    {
        path: '/users/:id',
        method: 'delete',
        action: deleteUser,
    },
];
