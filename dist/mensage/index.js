import express from 'express';
import create from './services/create';
import list from './services/list';

const router = express.Router();

//http://localhost:3000/mensage/
router.post('/', create);

//http://localhost:3000/mensage/
router.get('/', list);

export default router;