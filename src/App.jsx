import { Route, Routes } from "react-router-dom";
import { About, Cart, Contact, Error, Footer, Header, Home, Product, Products } from "./containets";
import { ToTop } from "./ui";

const App = () => {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <ToTop />
      <Footer />
    </div>
  );
};

export default App;
