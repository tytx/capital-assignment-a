
const sequelize = require('../config/database');
const PortfolioModel = require('../model/portfolioModel');

const Portfolio = PortfolioModel(sequelize);

exports.getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByPk(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getPortfoliosByUserId = async (req, res) => {
  try {
    const portfolios = await Portfolio.findAll({
      where: { userid: req.params.userid }
    });
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

