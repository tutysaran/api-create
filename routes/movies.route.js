import express from 'express';
const router = express.Router();

// CRUD FUNCTIONALITY OF MOVIES

// R -- for Reading
router.get('/', (req, res) => {
  res.send('Get all movies lists');
});

// C -- for Creating
router.post('/', (req, res) => {
  res.send('Create a new movie');
});

// U -- for Updating
router.put('/:id', (req, res) => {
  res.send('update a movie');
});

// D -- for Deleting
router.delete('/:id', (req, res) => {
  res.send('delete a movie');
});

export default router;
