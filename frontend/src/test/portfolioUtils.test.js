import {
  convert,
  calculateTotalValue,
  calculateTotalCost,
  calculateTotalGain,
  calculatePercentageGain
} from '../utils/portfolioCalculations';

const portfolio = [
  { currentPriceSGD: 2, averageCostSGD: 1.5, units: 100 },
  { currentPriceSGD: 3, averageCostSGD: 2.5, units: 50 }
];

describe('currency conversion', () => {
  test('convert to SGD', () => {
    expect(convert(100, 'SGD')).toBe(100);
  });

  test('convert to JPY', () => {
    expect(convert(1, 'JPY')).toBe(110);
  });
});

describe('portfolio calculations in SGD', () => {
  test('total value', () => {
    expect(calculateTotalValue(portfolio, 'SGD')).toBe(350);
  });

  test('total cost', () => {
    expect(calculateTotalCost(portfolio, 'SGD')).toBe(275);
  });

  test('total gain', () => {
    expect(calculateTotalGain(portfolio, 'SGD')).toBe(75);
  });

  test('percentage gain', () => {
    expect(calculatePercentageGain(portfolio, 'SGD')).toBeCloseTo((75 / 275) * 100);
  });
});

describe('portfolio calculations in JPY', () => {
  test('total value', () => {
    expect(calculateTotalValue(portfolio, 'JPY')).toBe(350 * 110);
  });

  test('total cost', () => {
    expect(calculateTotalCost(portfolio, 'JPY')).toBe(275 * 110);
  });

  test('total gain', () => {
    expect(calculateTotalGain(portfolio, 'JPY')).toBe((350 - 275) * 110);
  });

  test('percentage gain', () => {
    expect(calculatePercentageGain(portfolio, 'JPY')).toBeCloseTo((75 / 275) * 100);
  });
});
