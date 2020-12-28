import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Shop } from '../entity/Shop';

const getAllShops = async (_req: Request, res: Response) => {
    const shops = await getRepository(Shop).find();
    return res.send(shops);
};

const getShopById = async (req: Request, res: Response) => {
    const shop = await getRepository(Shop).findOne(req.params.id);
    res.json(shop);
};

const createShop = async (req: Request, res: Response) => {
    const shop = getRepository(Shop).create(req.body);
    const results = await getRepository(Shop).save(shop);
    return res.send(results);
};

const updateShop = async (req: Request, res: Response) => {
    const shopRepository = getRepository(Shop);
    const shop: any = await shopRepository.findOne(req.params.id);
    shopRepository.merge(shop, req.body);
    const results = await shopRepository.save(shop);
    return res.send(results);
};

const deleteShop = async (req: Request, res: Response) => {
    const shopRepository = getRepository(Shop);
    const shop = shopRepository.delete(req.params.id);
    return res.send(shop);
};

// app.get('/users/:id/shops', async (req: Request, res: Response) => {
//     const shop = await userRepository.findOne(req.params.id, {
//         relations: ['shops'],
//     });
//     return res.json(shop);
// });

export { getAllShops, getShopById, createShop, updateShop, deleteShop };
