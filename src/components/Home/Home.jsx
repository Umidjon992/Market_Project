import "./Home.css";
import Products from "../Product/ProductList";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="home-section">
        <div className="info">
          <h1>Welcome to My FastExpress</h1>
          <p>It is my Favourite thing to sress</p>

          <div style={{display: "flex", justifyContent: "center"}}>
              <Link to={"/product"}>
                <Button variant="contained" sx={{mt: "5px"}}>Get Started</Button>
              </Link>
          </div>
        </div>
      </section>

      <Products />
    </div>
  );
};

export default Home;
