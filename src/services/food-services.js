import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

// Buscar alimentos pelo nome
export async function getFoodbyName(name) {
  try {
    const foods = await prisma.food.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive' // sem diferenciar maiúsculas/minúsculas
        }
      },
      take: 20
    })
    return foods
  } catch (error) {
    console.error('Erro ao buscar alimentos:', error)
    throw new Error('Erro interno ao buscar alimentos')
  }
}

// Buscar substituições de alimentos pelo ID
export async function getSubstitutesById(id) {
  try {
    const original = await prisma.food.findUnique({
      where: { id: Number(id) }
    })

    if (!original) return null

    const substitutes = await prisma.food.findMany({
      where: {
        AND: [
          { id: { not: original.id } },
          {
            kcal: {
              gte: original.kcal - 20,
              lte: original.kcal + 20
            }
          }
        ]
      },
      take: 10
    })

    return substitutes
  } catch (error) {
    console.error('Erro ao buscar substitutos:', error)
    throw new Error('Erro interno ao buscar substitutos')
  }
}

export async function getAllFoods() {
  try {
    const foods = await prisma.food.findMany({
      orderBy: {
        name: 'asc'  // ordem alfabética
      }
    });
    return foods;
  } catch (error) {
    console.error('Erro ao buscar todos os alimentos:', error);
    throw new Error('Erro interno ao buscar alimentos');
  }
}
