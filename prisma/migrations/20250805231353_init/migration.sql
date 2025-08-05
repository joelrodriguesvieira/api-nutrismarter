-- CreateTable
CREATE TABLE "public"."Food" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "kcal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Meal" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Shift" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Shift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FoodShift" (
    "id" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,
    "shiftId" TEXT NOT NULL,

    CONSTRAINT "FoodShift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FoodMeal" (
    "id" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,
    "mealId" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "FoodMeal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shift_name_key" ON "public"."Shift"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FoodShift_foodId_shiftId_key" ON "public"."FoodShift"("foodId", "shiftId");

-- CreateIndex
CREATE UNIQUE INDEX "FoodMeal_foodId_mealId_key" ON "public"."FoodMeal"("foodId", "mealId");

-- AddForeignKey
ALTER TABLE "public"."FoodShift" ADD CONSTRAINT "FoodShift_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "public"."Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FoodShift" ADD CONSTRAINT "FoodShift_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "public"."Shift"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FoodMeal" ADD CONSTRAINT "FoodMeal_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "public"."Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FoodMeal" ADD CONSTRAINT "FoodMeal_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "public"."Meal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
