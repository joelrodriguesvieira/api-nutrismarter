import express from 'express';
import { createMeal, getAllMeals } from '../services/meal-services.js';

const router = express.Router(); 

router.post('/', async (req, res) => {
  const { title, foodMealIds } = req.body;

  if (!title || !foodMealIds || !Array.isArray(foodMealIds)) {
    return res.status(400).json({ error: 'Dados inválidos.' });
  }

  try {
    const meal = await createMeal(title, foodMealIds);
    res.status(201).json(meal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar refeição.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const meals = await getAllMeals();
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar refeições.' });
  }
});

export default router;