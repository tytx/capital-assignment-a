# capital-backend-express

This is a Node.js backend API built with Express and Sequelize for mutal funds. It connects to a PostgreSQL database and provides endpoints to retrieve portfolio data.

## Features

- REST API for portfolio management
- PostgreSQL database integration via Sequelize ORM
- Environment variable configuration

## Project Structure

```
.env
docker-compose.yml
Dockerfile
index.js
package.json
config/
  database.js
controller/
  portfolioController.js
model/
  portfolioModel.js
routes/
  portfolioRoutes.js
```

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Environment Variables

Configure your database credentials in a `.env` file per sample below:

```
DB_USER=postgres
DB_HOST=your-db-host
DB_NAME=postgres
DB_PASSWORD=your-db-password
DB_PORT=5432
```

**To get your database credentials, copy them from Doppler using [this link](https://share.doppler.com/s/xxd5gfgoisjjyqicnp8dxynklmnoianf0epteab1#FqTfge0pAxIlFKnwpHXMqVXhodyZH2qqTT9r66aQg1NpYveN7JCknw5KnYa09ACu).**

## Running the Project

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the server:**

   ```sh
   node index.js
   ```

3. The backend will be available at [http://localhost:3001](http://localhost:3001).

## API Endpoints

- `GET /api/portfolio/:id`  
  Get a portfolio by its ID.

- `GET /api/portfolio/user/:userid`  
  Get all portfolios for a specific user.

## Notes

- The backend expects a PostgreSQL database to be available (in this case AWS RDS Postgres DB) and accessible using the credentials in `.env`.