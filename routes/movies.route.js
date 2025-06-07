import express from 'express';
import { MovieIndex } from '../controllers/movies.controller';
const router = express.Router();

// CRUD FUNCTIONALITY OF MOVIES

// R -- for Reading
router.get('/', MovieIndex);

// C -- for Creating
router.post('/', MovieCreate);

// U -- for Updating
router.put('/:id', MovieUpdate);

// D -- for Deleting
router.delete('/:id', MovieDelete);

export default router;
