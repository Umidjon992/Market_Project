import { Button, ButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import "./style.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const products = await res.json();
        setData(products);
        setFilter(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const filterProduct = (category) => {
    if (category === "All") return setFilter(data);
    setFilter(data.filter((x) => x.category === category));
  };

  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <h1>Latest Products</h1>

      <ButtonGroup className="filter-buttons" variant="outlined">
        <Button onClick={() => filterProduct("All")}>All</Button>
        <Button onClick={() => filterProduct("men's clothing")}>
          Men's clothing
        </Button>
        <Button onClick={() => filterProduct("jewelery")}>Jewelery</Button>
        <Button onClick={() => filterProduct("electronics")}>
          Electronics
        </Button>
        <Button onClick={() => filterProduct("women's clothing")}>
          Women's clothing
        </Button>
      </ButtonGroup>

      <div className="products">
        {loading
          ? Array(10)
              .fill()
              .map((_, i) => (
                <div key={i} className="product-card">
                  <Skeleton height={180} />
                  <Skeleton height={20} style={{ marginTop: 10 }} />
                  <Skeleton height={20} width={80} />
                  <Skeleton height={36} width={100} style={{ marginTop: 10 }} />
                </div>
              ))
          : filter.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title.slice(0, 40)}...</h3>
                <p>${product.price}</p>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button variant="contained">Buy naw</Button>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Products;
