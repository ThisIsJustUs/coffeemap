import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

const getAllUsers = async (_req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.send(users);
};

const getUsersById = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(req.params.id);
    res.send(user);
};

const createUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const user = userRepository.create(req.body);
    const results = await userRepository.save(user);
    return res.send(results);
};

const updateUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const user: any = await userRepository.findOne(req.params.id);
    userRepository.merge(user, req.body);
    const results = await userRepository.save(user);
    return res.send(results);
};

const deleteUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const results = await userRepository.delete(req.params.id);
    return res.send(results);
};

export { getAllUsers, getUsersById, createUser, updateUser, deleteUser };
