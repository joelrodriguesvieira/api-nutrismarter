import express from 'express'
import cors from 'cors';
import mealRoutes from './routes/meal-routes.js';
import foodRoutes from './routes/food-routes.js';

const app = express()

app.use(cors());

app.use(express.json())
app.use('/meals', mealRoutes);
app.use('/foods', foodRoutes);

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`)
})
