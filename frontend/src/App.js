import { useState, useEffect } from "react";
import { fetchPortfolioByUser } from "./api/portfolioApi";
import PortfolioSummary from "./components/PortfolioSummary";
import CurrencySelector from "./components/CurrencySelector";
import { Box, createListCollection } from "@chakra-ui/react";
import PortfolioOverviewTable from "./components/table/PortfolioOverviewTable";
import {
  calculateTotalValue,
  calculateTotalCost,
  calculateTotalGain,
  calculatePercentageGain,
  convert,
} from "./utils/portfolioCalculations";
import mockData from './mockData/mockData.json';

const currencies = createListCollection({
  items: [
    { label: "SGD", value: "SGD" },
    { label: "JPY", value: "JPY" },
  ],
});



export default function PortfolioTracker() {
  const [currency, setCurrency] = useState("SGD");
  const [portfolio, setPortfolio] = useState([]);
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);

  const currencySymbols = {
    SGD: "S$",
    JPY: "¥",
  };
  useEffect(() => {
    fetchPortfolioByUser(1)
      .then((data) => {
        setPortfolio(data);
        setFilteredPortfolio(data);
      })
      .catch((err) => {
        console.error(err);
        setPortfolio(mockData);
        setFilteredPortfolio(mockData);
      });
  }, []);

  const formatCurrency = (value, curr = currency) => {
    if (curr === "JPY") {
      return Math.round(value).toLocaleString();
    }
    return value.toFixed(2);
  };

  const totalValue = calculateTotalValue(filteredPortfolio, currency);
  const totalCost = calculateTotalCost(filteredPortfolio, currency);
  const totalGain = calculateTotalGain(filteredPortfolio, currency);
  const percentageGain = calculatePercentageGain(filteredPortfolio, currency);

  return (
    <Box>
      <PortfolioSummary
        currency={currency}
        currencySymbols={currencySymbols}
        totalValue={totalValue}
        totalCost={totalCost}
        totalGain={totalGain}
        percentageGain={percentageGain}
        formatCurrency={formatCurrency}
      />

      <CurrencySelector
        currencies={currencies}
        currency={currency}
        setCurrency={setCurrency}
      />
      <PortfolioOverviewTable
        filteredPortfolio={filteredPortfolio}
        formatCurrency={formatCurrency}
        currency={currency}
        currencySymbols={currencySymbols}
        convert={convert}
      />
    </Box>
  );
}
