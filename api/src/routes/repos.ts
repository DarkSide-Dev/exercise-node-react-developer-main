import { Router } from 'express';
import * as RepoApi from '../controller/apiController';

export const repos = Router();

repos.get('/', RepoApi.repo);
repos.get('/:repo/', RepoApi.commits);
repos.get('/:repo/readme/', RepoApi.readme);
