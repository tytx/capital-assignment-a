import { Box, Text, Select, Portal } from "@chakra-ui/react";

export default function CurrencySelector({ currencies, currency, setCurrency }) {
  return (
    <Box mb={4}>
      <Text fontWeight="bold" mb={2}>Select Currency</Text>
      <Select.Root
        collection={currencies}
        width="150px"
        value={currency}
        onValueChange={e => setCurrency(e.value)}
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder={currency} />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {currencies.items.map(curr => (
                <Select.Item item={curr} key={curr.value}>
                  {curr.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </Box>
  );
}