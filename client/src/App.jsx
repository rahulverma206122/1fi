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
        <Route path="/shop" element={<Shop />} />

        <Route path="/products/:slug" element={<ProductDetails />} />

        <Route
          path="/marketplace"
          element={<Marketplace />}
        />

        <Route path="*" element={<NotFound />} />

        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;