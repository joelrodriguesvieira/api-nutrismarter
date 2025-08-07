/*
  Warnings:

  - You are about to drop the `FoodShift` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shift` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `imageUrl` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Food` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."FoodType" AS ENUM ('Frutas', 'Proteinas', 'Verduras', 'Leguminosas', 'Cereais', 'Graos', 'Laticinios', 'Oleaginosas', 'Chas');

-- DropForeignKey
ALTER TABLE "public"."FoodShift" DROP CONSTRAINT "FoodShift_foodId_fkey";

-- DropForeignKey
ALTER TABLE "public"."FoodShift" DROP CONSTRAINT "FoodShift_shiftId_fkey";

-- AlterTable
ALTER TABLE "public"."Food" ADD COLUMN     "imageUrl" TEXT NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "public"."FoodType" NOT NULL;

-- DropTable
DROP TABLE "public"."FoodShift";

-- DropTable
DROP TABLE "public"."Shift";
