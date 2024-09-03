import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import Popular from './pages/Popular';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div>
        <Navbar /> 
        <div className="flex">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/popular" element={<Popular />} />
          </Routes>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
