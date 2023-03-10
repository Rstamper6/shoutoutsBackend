import express, {Request, Response} from "express";
import { getClient } from '../db';
import Shoutout from '../models/ShoutOuts';

export const shoutOutRoutes = express.Router()

shoutOutRoutes.get("/", async (req:Request, res:Response) => {
    try {
        //connect to the database
        const client = await getClient();

        const result = client.db('test').collection<Shoutout>('shoutouts').find({}).toArray();

        return res.status(200).json(result)
    }
    catch(error){
        console.log(error);
        return res.status(500).send(error)
    }
})