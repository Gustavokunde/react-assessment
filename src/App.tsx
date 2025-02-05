import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { withErrorBoundary } from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const HomeWithErrorBoundary = withErrorBoundary(Home);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomeWithErrorBoundary />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
