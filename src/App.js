import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdenesPage } from "./pages/OrdenesPage";
import { OrdenPage } from "./pages/OrdenPage";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/producto/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/mis-ordenes" element={<OrdenesPage />} />
        <Route path="/mis-ordenes/:id" element={<OrdenPage />} />
        <Route path={`*`} element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
