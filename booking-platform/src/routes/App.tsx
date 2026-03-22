import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListingDetails from "./pages/ListingDetails";
import Bookings from "./pages/Bookings";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppProvider>
  );
}

export default App;