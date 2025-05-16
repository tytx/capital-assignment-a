const express = require('express');
const request = require('supertest');

const mockPortfolio = {
    id: 1,
    name: "Nikko AM Singapore STI ETF",
    ticker: "G3B.SI",
    units: 500,
    average_cost_sgd: "2.00",
    current_price_sgd: "3.00",
    category: "Singapore Equity",
    region: "Singapore",
    userid: 1
};

jest.mock('../controller/portfolioController', () => ({
    getPortfolioById: jest.fn((req, res) => res.json(mockPortfolio)),
    getPortfoliosByUserId: jest.fn((req, res) => res.json([mockPortfolio])),
}));

const portfolioRoutes = require('../routes/portfolioRoutes'); // Adjust path if needed

const app = express();
app.use(express.json());
app.use('/portfolio', portfolioRoutes);

describe('Portfolio Routes', () => {
    it('GET /portfolio/:id returns portfolio by id', async () => {
        const res = await request(app).get('/portfolio/1');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(mockPortfolio);
    });

    it('GET /portfolio/user/:userid returns portfolios by user id', async () => {
        const res = await request(app).get('/portfolio/user/1');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([mockPortfolio]);
    });
});