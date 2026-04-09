import { Button, TextField, InputAdornment, Chip, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import "./style.css";

const CATEGORIES = [
  { label: "All", value: "All" },
  { label: "Smartphones", value: "smartphones" },
  { label: "Laptops", value: "laptops" },
  { label: "Fragrances", value: "fragrances" },
  { label: "Skincare", value: "skincare" },
  { label: "Groceries", value: "groceries" },
  { label: "Home Decoration", value: "home-decoration" },
];

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const json = await res.json();
        setData(json.products);
        setFilter(json.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const applyFilters = (category, query) => {
    let result = data;
    if (category !== "All") {
      result = result.filter((x) => x.category === category);
    }
    if (query.trim()) {
      result = result.filter((x) =>
        x.title.toLowerCase().includes(query.toLowerCase()),
      );
    }
    setFilter(result);
  };

  const handleCategory = (value) => {
    setActiveCategory(value);
    applyFilters(value, searchQuery);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    applyFilters(activeCategory, query);
  };

  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <h1>Latest Products</h1>

      {/* MUI Search */}
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        placeholder="Mahsulot qidirish..."
        value={searchQuery}
        onChange={handleSearch}
        sx={{ mb: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />

      {/* Pill-style kategoriyalar */}
      <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
        {CATEGORIES.map((cat) => (
          <Chip
            key={cat.value}
            label={cat.label}
            onClick={() => handleCategory(cat.value)}
            variant={activeCategory === cat.value ? "filled" : "outlined"}
            color={activeCategory === cat.value ? "primary" : "default"}
            sx={{
              borderRadius: "999px",
              fontWeight: activeCategory === cat.value ? 600 : 400,
            }}
          />
        ))}
      </Stack>

      <div className="products">
        {loading ? (
          Array(10)
            .fill()
            .map((_, i) => (
              <div key={i} className="product-card">
                <Skeleton height={180} />
                <Skeleton height={20} style={{ marginTop: 10 }} />
                <Skeleton height={20} width={80} />
                <Skeleton height={36} width={100} style={{ marginTop: 10 }} />
              </div>
            ))
        ) : filter.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              width: "100%",
              marginTop: "20px",
              color: "#888",
            }}
          >
            Product not faund
          </p>
        ) : (
          filter.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} />

              <h3>{product.title.slice(0, 40)}...</h3>

              <p>${product.price}</p>

              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" size="small" fullWidth>
                  Buy now
                </Button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
