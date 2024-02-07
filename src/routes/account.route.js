
import { Router } from 'express';

export const accountRouter = Router();

accountRouter.get('', async (req, res) => {

    res.json({ username: 'Stiven Gomez'});
    
});