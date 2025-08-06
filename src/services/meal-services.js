import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();


// // Busca sugestões de alimentos com base no nome digitado da refeição
// export async function getSuggestionsByMealName(mealName) {
//   return await prisma.meal.findMany({
//     where: {
//       title: {
//         contains: mealName,
//         mode: 'insensitive'
//       }
//     },
//     take: 10
//   });
// }


// Criar uma nova refeição e relaciona com os alimentos informados
export async function createMeal(mealName, foodIds) {
  return await prisma.meal.create({
    data: {
      title: mealName,
      foodMeals: {
        create: foodIds.map(foodId => ({
          food: { connect: { id: foodId } },
          quantity: 100 
        }))
      }
    },
    include: {
      foodMeals: {
        include: { food: true }
      }
    }
  });
}

// Listar todas as refeições cadastradas com seus respectivos alimentos
export async function getAllMeals() {
  return await prisma.meal.findMany({
    include: {
      foodMeals: {
        include: { food: true }
      }
    }
  });
}

