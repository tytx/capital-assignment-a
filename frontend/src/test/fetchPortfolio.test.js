import { fetchPortfolioByUser } from '../api/portfolioApi';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
        {
          id: 1,
          name: 'Sample',
          ticker: 'SMP',
          units: '100',
          average_cost_sgd: '2.00',
          current_price_sgd: '2.50',
          category: 'Sample Category',
          region: 'Sample Region'
        }
      ]),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test('fetchPortfolioByUser returns mapped data', async () => {
  const data = await fetchPortfolioByUser(1);
  expect(data).toEqual([
    {
      id: 1,
      name: 'Sample',
      ticker: 'SMP',
      units: 100,
      averageCostSGD: 2,
      currentPriceSGD: 2.5,
      category: 'Sample Category',
      region: 'Sample Region'
    }
  ]);
});