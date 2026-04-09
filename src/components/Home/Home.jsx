import "./Home.css";
import Products from "../Product/Products";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="home-section">
        <div className="info">
          <h1>Welcome to My FastExpress</h1>
          <p>It is my Favourite thing to sress</p>

          <div>
            <ButtonGroup
              variant="contained"
              aria-label="Basic button group"
              sx={{ marginTop: "10px" }}
            >
              <Link to={"/product"}>
                <Button>Get Started</Button>
              </Link>
              <Link to={"/about"}>
              <Button>About Us</Button>
              </Link>
            </ButtonGroup>
          </div>
        </div>
      </section>

      <Products />
    </div>
  );
};

export default Home;
