const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Portfolio = sequelize.define('Portfolio', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    ticker: DataTypes.STRING,
    units: DataTypes.FLOAT,
    average_cost_sgd: DataTypes.FLOAT,
    current_price_sgd: DataTypes.FLOAT,
    category: DataTypes.STRING,
    region: DataTypes.STRING,
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users', 
        key: 'id'
      }
    }
  }, {
    tableName: 'portfolios',
    timestamps: false,
    schema: 'public'
  });

  Portfolio.associate = function(models) {
    Portfolio.belongsTo(models.User, { foreignKey: 'userid' });
  };

  return Portfolio;
};