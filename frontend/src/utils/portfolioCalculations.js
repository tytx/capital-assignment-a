const exchangeRates = {
  SGD: 1,
  JPY: 110
};

export const convert = (sgdValue, currency) => {
  if (typeof sgdValue !== "number" || !exchangeRates[currency]) return 0;
  return sgdValue * exchangeRates[currency];
};

export const calculateTotalValue = (portfolio, currency) => {
  if (!Array.isArray(portfolio) || portfolio.length === 0) return 0;
  let total = 0;
  portfolio.forEach(fund => {
    if (
      typeof fund.currentPriceSGD === "number" &&
      typeof fund.units === "number"
    ) {
      total += convert(fund.currentPriceSGD, currency) * fund.units;
    }
  });
  return isNaN(total) ? 0 : total;
};

export const calculateTotalCost = (portfolio, currency) => {
  if (!Array.isArray(portfolio) || portfolio.length === 0) return 0;
  let total = 0;
  portfolio.forEach(fund => {
    if (
      typeof fund.averageCostSGD === "number" &&
      typeof fund.units === "number"
    ) {
      total += convert(fund.averageCostSGD, currency) * fund.units;
    }
  });
  return isNaN(total) ? 0 : total;
};

export const calculateTotalGain = (portfolio, currency) => {
  const totalValue = calculateTotalValue(portfolio, currency);
  const totalCost = calculateTotalCost(portfolio, currency);
  return isNaN(totalValue - totalCost) ? 0 : totalValue - totalCost;
};

export const calculatePercentageGain = (portfolio, currency) => {
  const totalValue = calculateTotalValue(portfolio, currency);
  const totalCost = calculateTotalCost(portfolio, currency);
  if (!totalCost || isNaN(totalCost)) return 0;
  const percent = ((totalValue - totalCost) / totalCost) * 100;
  return isNaN(percent) ? 0 : percent;
};