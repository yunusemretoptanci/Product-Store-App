import './App.css';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CreateProduct from './pages/CreateProduct';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail/:id" element={<ProductDetail/>} />
        <Route path="/create" element={<CreateProduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
