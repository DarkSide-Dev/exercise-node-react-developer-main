import { Request, Response } from 'express';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

import { Repo } from '../models/Repo';
import { Commit } from '../models/Commit';

const generateJSON = (repos: Repo[]): void => {
    try{
        fs.writeFile(path.join(__dirname, '../../data/repos.json'), JSON.stringify(repos, null, 2), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    } catch(error){
        console.log(error);
    }
}

const getJSON = (): any => {
    try{
        const response = fs.readFileSync(path.join(__dirname, '../../data/repos.json'));
        return JSON.parse(response.toString());
    } catch(error){
        return false;
    }
}

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

        generateJSON(data);

        res.send(JSON.stringify(data, null, 2));

    } catch(error){
        res.json(getJSON());
    }
}

export const commits = async (req: Request, res: Response) => {

    try{

        res.header('Cache-Control', 'no-store');
        res.header('Content-Type', 'application/json')
    
        res.status(200);

        let url: string = process.env.COMMIT_BASE as string;

        const data = await axios.get<Commit[]>(`${url}/${req.params.repo}/commits?per_page=1`).then((repositories) => {
        
            return repositories.data;

        }).catch(() => {throw 'Commit requisiton failed'});

        res.send(JSON.stringify(data, null, 2));

    } catch(error){
        res.status(503);
        res.json({status: 503, message: error});
    }

}