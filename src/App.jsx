import { Route, Routes } from "react-router-dom";
import { ToTop } from "./ui";
import { About, Cart, Contact, Error, Footer, Header, Home, ProductList, ProductPage } from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ToTop />
      <Footer />
    </div>
  );
};

export default App;
  