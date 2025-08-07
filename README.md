# 🥗 API NutriSmarter 

API developed in Node.js with Express and Prisma ORM for managing meals and their nutritional information.

---

## 📋 Features

- Food list
- Filter by name
- Sort by category (fruits, vegetables, dairy, etc.)

---

## ⚙️ Requirements

- [Node.js](https://nodejs.org/) v18 or higher
- [PostgreSQL](https://www.postgresql.org/) v15 or higher

---

## 🛠️ Installation and Configuration

### 1. Clone the repository

```bash
git clone https://github.com/joelrodriguesvieira/api-nutrismarter.git
cd api-nutrismarter
```
### 2. Install the dependencies

```bash
npm install
```
### 3. Configure environment variables
Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nutrismarter"
PORT=3000
```
### 4. Create the database in PostgreSQL
```bash
CREATE DATABASE nutrismarter
```
### 5. Generate the Prisma files
```bash
npx prisma generate
```
### 6. Run the API
```bash
npm run dev
```
A API will be up at:
📍 `http://localhost:3000`
