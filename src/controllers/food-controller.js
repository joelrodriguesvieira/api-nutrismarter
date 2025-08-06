import express from 'express';
import { getFoodbyName, getSubstitutesById, getAllFoods } from '../services/food-services.js';

const router = express.Router(); 

// Buscar alimentos por nome
router.get('/search', async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Parâmetro "q" é obrigatório' });

  try {
    const foods = await getFoodbyName(q);
    res.json(foods);
  } catch (error) {
    console.error('Erro ao buscar alimentos:', error);
    res.status(500).json({ error: 'Erro interno ao buscar alimentos' });
  }
});

// Buscar substitutos por id
router.get('/:id/substitutes', async (req, res) => {
  const { id } = req.params;
  try {
    const substitutes = await getSubstitutesById(id);
    res.json(substitutes);
  } catch (error) {
    console.error('Erro ao buscar substitutos:', error);
    res.status(500).json({ error: 'Erro interno ao buscar substitutos' });
  }
});

// Listar todos os alimentos
router.get('/', async (req, res) => {
  try {
    const foods = await getAllFoods();
    res.json(foods);
  } catch (error) {
    console.error('Erro ao listar alimentos:', error);
    res.status(500).json({ error: 'Erro interno ao listar alimentos' });
  }
});

export default router;
