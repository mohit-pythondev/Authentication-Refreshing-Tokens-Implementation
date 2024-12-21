import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/header";  // change Header.js to header.js

import PrivateRoute from "./utils/PrivateRoute"; // Assuming your PrivateRoute is in utils

function App() {
  return (
    <AuthProvider> {/* Wrap the AuthProvider around the Router to provide context throughout */}
      <Router>
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
    </AuthProvider>
  );
}

export default App;
