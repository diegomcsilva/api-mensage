import express from 'express'
import create from './services/create'
import list from './services/list'
import remove from './services/remove'

const router = express.Router()

//http://localhost:3000/
router.post('/', create)

//http://localhost:3000/
router.get('/', list)

//http://localhost:3000/5a7fa01c4fd22a0004225633
router.delete('/:id', remove)

export default router
