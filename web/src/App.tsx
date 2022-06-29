import { Route, Routes } from 'react-router-dom';
import { HOME } from './pages/Home';
import { DETAILS } from './pages/Details';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HOME />} />
      <Route path="/:repo/details" element={<DETAILS />} />
    </Routes>
  );
}
