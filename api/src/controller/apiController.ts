import { Request, Response } from 'express';
import axios from 'axios';

import { Repo } from '../models/Repo';

export const repo = async (_: Request, res: Response) => {

    try{

        res.header('Cache-Control', 'no-store');
        res.header('Content-Type', 'application/json')
    
        res.status(200);

        let url: string = process.env.API_BASE as string;

        const data = await axios.get<Repo[]>(url).then((repositories) => {
        
            let filteredRepo: Repo[] = repositories.data.filter(item => {
                return !item.fork;
            });
    
            return filteredRepo;
        }).catch(() => {throw 'Requisiton failed'});

        res.send(JSON.stringify(data, null, 2));

    } catch(error){
        res.status(503);
        res.json({msg: error});
    }
}