import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/header';
import PrivateRoute from './utils/PrivateRoute'; // Assuming your PrivateRoute is in utils

function App() {
  return (
    <Router> {/* Wrap the routes in BrowserRouter */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          {/* Use PrivateRoute to wrap the HomePage route */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
