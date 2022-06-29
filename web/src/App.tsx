import { Route, Routes } from 'react-router-dom';
import { HOME } from './pages/Home';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HOME />} />
    </Routes>
  );
}
