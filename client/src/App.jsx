import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Shop from "./pages/Shop";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import Confirmation from "./pages/Confirmation";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={<Navigate to="/shop" replace />}
        />

        {/* Shop */}
        <Route
          path="/shop"
          element={<Shop />}
        />

        {/* Marketplace */}
        <Route
          path="/marketplace"
          element={<Marketplace />}
        />

        {/* Product Details */}
        <Route
          path="/products/:slug"
          element={<ProductDetails />}
        />

        {/* Confirmation */}
        <Route
          path="/confirmation"
          element={<Confirmation />}
        />

        {/* 404 - MUST BE LAST */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;