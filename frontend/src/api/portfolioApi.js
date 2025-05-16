export async function fetchPortfolioByUser(userId) {
  
  const res = await fetch(`http://localhost:3001/portfolios/user/${userId}`);
  if (!res.ok) throw new Error("Failed to fetch portfolio");
  const data = await res.json();

  return data.map((fund) => ({
    id: fund.id,
    name: fund.name, 
    ticker: fund.ticker,
    units: Number(fund.units),
    averageCostSGD: Number(fund.average_cost_sgd),
    currentPriceSGD: Number(fund.current_price_sgd),
    category: fund.category,
    region: fund.region,
  }));
}
