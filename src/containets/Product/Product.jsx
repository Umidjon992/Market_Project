import React, { useEffect, useState } from "react";
import { Link, useParams, NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.css";
import { Button, ButtonGroup, Snackbar, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/actions";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [message, setMessage] = useState("");

  const handleClose = () => setOpen(false);

  const addProduct = () => {
    dispatch(addCart(product));
    setAlertType("success");
    setMessage(`"${product.title}" added to cart`);
    setOpen(true);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        console.log(e);
        setAlertType("error");
        setMessage("Failed to load product.");
        setOpen(true);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  return (
    <div className="container">
      <Link
        to={"/product"}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          margin: "20px",
          textDecoration: "none",
          position: "relative",
        }}
        className="link_product"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
        Back to Product
      </Link>

      {loading ? (
        <div className="product-details">
    <div className="details-left">
      <Skeleton height={350} width={350} />
    </div>

    <div className="details-right">
      <Skeleton height={40} width="80%" style={{ marginBottom: 15 }} />
      <Skeleton height={30} width="30%" style={{ marginBottom: 10 }} />
      <Skeleton height={20} width="40%" style={{ marginBottom: 20 }} />
      <Skeleton
        height={15}
        count={6}
        style={{ marginBottom: 8 }}
      />
      <div style={{ display: "flex", gap: "15px", marginTop: "25px" }}>
        <Skeleton height={40} width={150} />
        <Skeleton height={40} width={150} />
      </div>
    </div>
  </div>
      ) : (
        <div className="product-details">
          <div className="details-left">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="details-right">
            <h2>{product.title}</h2>
            <h3 className="price">${product.price}</h3>
            <p className="category">Category: {product.category}</p>
            <p className="description">{product.description}</p>

            <ButtonGroup variant="outlined" sx={{ mt: "20px" }}>
              <Button onClick={addProduct} className="add-cart-btn">
                Add to Cart
              </Button>

              <NavLink to="/cart">
                <Button className="add-cart-btn">Go to Cart</Button>
              </NavLink>
            </ButtonGroup>
          </div>
        </div>
      )}

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={alertType}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
 
export default Product;
