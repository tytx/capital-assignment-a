const app = require('./app');
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/database'); 


app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});