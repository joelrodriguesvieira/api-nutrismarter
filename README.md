# 🥗 API NutriSmarter 

API desenvolvida em Node.js com Express e Prisma ORM para gerenciamento de refeições e suas informações nutricionais.

---

## 📋 Funcionalidades

- Listagem de alimentos
- Filtro por nome
- Organização por categoria (frutas, vegetais, laticínios, etc.)

---

## ⚙️ Requisitos

- [Node.js](https://nodejs.org/) v18 ou superior  
- [PostgreSQL](https://www.postgresql.org/) v15 ou superior  

---

## 🛠️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/joelrodriguesvieira/api-nutrismarter.git
cd api-nutrismarter
```
### 2. Instale as dependências

```bash
npm install
```
### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nutrismarter"
PORT=3000
```
### 4. Crie o banco no PostgreSQL
```bash
CREATE DATABASE nutrismarter
```
### 5. Gere os arquivos do Prisma
```bash
npx prisma generate
```
### 6. Execute a API
```bash
npm run dev
```
A API será executada em:
📍 `http://localhost:3000`
