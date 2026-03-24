import "./Home.css";
import Products from "../Product/Products";

const Home = () => {
  return (
    <div>
      <section className="home-section">
        <h1>Welcome to My NasExpress</h1>
        <p>It is my Favourite thing to sress</p>
      </section>

      <Products />
    </div>
  );
};

export default Home;
