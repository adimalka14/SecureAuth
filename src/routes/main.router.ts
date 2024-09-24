const express = require('express');
const router = express.Router();
import { Request, Response } from 'express';

router.get('/', (req: Request, res: Response) => {
    res.status(200).send('OK');
});

export default router;
