import GlobalStyle from "./styles/global";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Suspense fallback={<div>Loading ... </div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/detail/:id/:title" element={<ProductDetailPage />} />

          {/* 관리자 페이지 (관리자 권한 확인 필요)*/}
          <Route path="/admin" element={<AdminPage />} />

          {/* notFound */}
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
