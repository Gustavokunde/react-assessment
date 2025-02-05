# Marvel React Assessment

## Overview
This project demonstrates React best practices using Zustand for state management, React Router for navigation, and Tailwind for styling. The app fetches Marvel characters and displays them beautifully with a clean UI.

## Tech Stack
- React 18
- Zustand 4
- TypeScript 5
- Tailwind CSS 3
- Axios 1.6
- Jest + React Testing Library

## Performance Optimizations
- Code Splitting & Lazy Loading
- Memoization using `useMemo`
- Zustand selectors to minimize re-renders

## Accessibility Features
- ARIA roles for screen readers
- `aria-live="polite"` for dynamic content updates

## Folder Structure
- `components/`: Reusable UI components with dedicated folders for tests
- `pages/`: Page components with integrated tests
- `store/`: Zustand store for API state management
- `services/`: API handling with Axios

## How to Run
```sh
yarn install
yarn dev
```

## Running Tests
```sh
yarn test
```

## Environment Variables
Create a `.env` file in the root directory and set the API base URL and Marvel API key:

```
REACT_APP_API_BASE_URL=https://gateway.marvel.com/v1/public
REACT_APP_MARVEL_API_KEY=your_marvel_api_key_here
```
