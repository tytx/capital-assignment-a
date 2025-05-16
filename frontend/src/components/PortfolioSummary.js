import { Box, Text, Flex, Heading } from "@chakra-ui/react";

export default function PortfolioSummary({
  currency,
  currencySymbols,
  totalValue,
  totalCost,
  totalGain,
  percentageGain,
  formatCurrency
}) {
  return (
    <Box mb={8}>
      <Heading size="xl" mb={2}>Mutual Fund Portfolio</Heading>
      <Text fontSize="lg" color="gray.500">
        Track your investments across Singapore and Japan
      </Text>
      <Box
        bg="white"
        p={6}
        borderRadius="lg"
        boxShadow="md"
        borderWidth="1px"
        borderColor="gray.200"
        mt={6}
      >
        <Flex justifyContent="space-between" mb={4}>
          <Box>
            <Text fontWeight="bold">Total Portfolio Value</Text>
            <Text fontSize="2xl" fontWeight="bold">
              {currencySymbols[currency]}{formatCurrency(totalValue)}
            </Text>
            <Text color={percentageGain >= 0 ? "green.500" : "red.500"}>
              {percentageGain >= 0 ? "▲" : "▼"} {formatCurrency(percentageGain)}%
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Total Cost</Text>
            <Text fontSize="2xl" fontWeight="bold">
              {currencySymbols[currency]}{formatCurrency(totalCost)}
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Total P/L</Text>
            <Text fontSize="2xl" fontWeight="bold" color={totalGain >= 0 ? "green.500" : "red.500"}>
              {totalGain >= 0 ? "+" : ""}{currencySymbols[currency]}{formatCurrency(totalGain)}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}