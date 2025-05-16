import { Table } from "@chakra-ui/react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useState, useMemo } from "react";
import { portfolioTableColumns } from "./portfolioTableColumns";

const PortfolioOverviewTable = ({
  filteredPortfolio,
  currency,
  currencySymbols,
  formatCurrency,
  convert,
}) => {
  const [sorting, setSorting] = useState([]);
  const data = useMemo(() => filteredPortfolio, [filteredPortfolio]);
  const columns = useMemo(
    () =>
      portfolioTableColumns(currency, currencySymbols, formatCurrency, convert),
    [currency, currencySymbols, formatCurrency, convert]
  );
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Table.Root variant="surface" borderWidth="1px" borderColor="gray.200">
      <Table.Header>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const isSorted = header.column.getIsSorted();
              const isNumeric = header.column.columnDef.meta?.isNumeric;
              return (
                <Table.ColumnHeader
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  textAlign={isNumeric ? "end" : "start"}
                  cursor="pointer"
                  userSelect="none"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {isSorted === "asc"
                    ? " 🔼"
                    : isSorted === "desc"
                    ? " 🔽"
                    : ""}
                </Table.ColumnHeader>
              );
            })}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body>
        {table.getRowModel().rows.length === 0 ? (
          <Table.Row>
            <Table.Cell colSpan={8} textAlign="center">
              No funds found for the selected region
            </Table.Cell>
          </Table.Row>
        ) : (
          table.getRowModel().rows.map((row) => (
            <Table.Row key={row.id}>
              {row.getVisibleCells().map((cell) => {
                const isNumeric = cell.column.columnDef.meta?.isNumeric;
                return (
                  <Table.Cell
                    key={cell.id}
                    textAlign={isNumeric ? "end" : "start"}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                );
              })}
            </Table.Row>
          ))
        )}
      </Table.Body>
    </Table.Root>
  );
};

export default PortfolioOverviewTable;
