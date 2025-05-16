
export const portfolioTableColumns = (currency, currencySymbols, formatCurrency, convert) => [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "tickerCategory",
        header: "Ticker / Category",
        accessorFn: row => `${row.ticker} / ${row.category}`,
        cell: ({ row }) => `${row.original.ticker} / ${row.original.category}`,
    },
    {
        accessorKey: "units",
        header: "Units",
        meta: { isNumeric: true },
        cell: ({ getValue }) => getValue().toLocaleString(),
    },
    {
        accessorKey: "averageCost",
        header: "Avg Cost",
        meta: { isNumeric: true },
        accessorFn: row => convert(row.averageCostSGD, currency),
        cell: ({ row }) => {
            const v = convert(row.original.averageCostSGD, currency);
            return `${currencySymbols[currency]}${formatCurrency(v)}`;
        },
    },
    {
        accessorKey: "currentPrice",
        header: "Current Price",
        meta: { isNumeric: true },
        accessorFn: row => convert(row.currentPriceSGD, currency),
        cell: ({ row }) => {
            const v = convert(row.original.currentPriceSGD, currency);
            return `${currencySymbols[currency]}${formatCurrency(v)}`;
        },
    },
    {
        accessorKey: "marketValue",
        header: "Market Value",
        meta: { isNumeric: true },
        accessorFn: row => convert(row.currentPriceSGD, currency) * row.units,
        cell: ({ row }) => {
            const val = convert(row.original.currentPriceSGD, currency) * row.original.units;
            return `${currencySymbols[currency]}${formatCurrency(val)}`;
        },
    },
    {
        accessorKey: "profit",
        header: "P/L",
        meta: { isNumeric: true },
        accessorFn: row => (convert(row.currentPriceSGD, currency) - convert(row.averageCostSGD, currency)) * row.units,
        cell: ({ row }) => {
            const cost = convert(row.original.averageCostSGD, currency) * row.original.units;
            const val = convert(row.original.currentPriceSGD, currency) * row.original.units;
            const profit = val - cost;
            const color = profit >= 0 ? "green.500" : "red.500";
            return (
                <span style={{ color }}>
                    {profit >= 0 ? "+" : ""}
                    {currencySymbols[currency]}
                    {formatCurrency(profit)}
                </span>
            );
        },
    },
    {
        accessorKey: "profitPercent",
        header: "P/L%",
        meta: { isNumeric: true },
        accessorFn: row => {
            const cost = convert(row.averageCostSGD, currency) * row.units;
            const val = convert(row.currentPriceSGD, currency) * row.units;
            return cost > 0 ? ((val - cost) / cost) * 100 : 0;
        },
        cell: ({ row }) => {
            const cost = convert(row.original.averageCostSGD, currency) * row.original.units;
            const val = convert(row.original.currentPriceSGD, currency) * row.original.units;
            const pct = cost > 0 ? ((val - cost) / cost) * 100 : 0;
            const color = pct >= 0 ? "green.500" : "red.500";
            return (
                <span style={{ color }}>
                    {pct.toFixed(2)}%
                </span>
            );
        },
    },
];

export default portfolioTableColumns