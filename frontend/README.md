# Capital Fund Web

A React web application for tracking mutual fund portfolios across Singapore and Japan.

## Features

- Track mutual fund investments
- Currency selection (SGD, JPY) with real-time conversion
- Portfolio summary: total value, cost, gain, and percentage gain
- Interactive, sortable portfolio overview table
- Responsive UI with Chakra UI

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Install dependencies:
    ```sh
    npm install
    ```

2. Start the development server:
    ```sh
    npm start
    ```
    The app will be available at [http://localhost:3000](http://localhost:3000).

### Running Tests

Run all unit tests:
```sh
npm test
```

## API

The app expects a backend API (start the backend express application first) endpoint at:
```
GET http://localhost:3001/portfolios/user/:userId
```
For development, mock data is used from `src/mockData/mockData.json`.

## Technologies Used

- React
- Chakra UI
- TanStack React Table
- Jest (testing)