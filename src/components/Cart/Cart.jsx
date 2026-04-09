import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart, addCart } from "../../redux/actions";
import "./cart.css";
import {
  Button,
  ButtonGroup,
  Modal,
  Box,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  const showToast = (message, severity = "success") => {
    setToast({ open: true, message, severity });
  };

  const handleAdd = (item) => {
    dispatch(addCart(item));
    showToast(`Added: "${item.title}"`, "info");
  };

  const handleDelete = (item) => {
    dispatch(deleteCart(item));
    showToast(`Removed: "${item.title}"`, "error");
  };

  const handleClearAll = () => {
    dispatch({ type: "CLEAR_CART" });
    showToast("Cart cleared!", "error");
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const productNames = cart.map((item) => item.title).join(", ");
    showToast(`Order placed: ${productNames}`, "info");
    dispatch({ type: "CLEAR_CART" });
    setModalOpen(false);
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className="cart-empty">
          {" "}
          <h1 className="empty-title">Your Cart is Empty</h1>{" "}
          <p className="empty-text">
            Looks like you haven’t added anything yet.
          </p>{" "}
          <Link to="/product">
            <Button variant="contained" sx={{ mt: 2 }}>
              Go Shopping{" "}
            </Button>{" "}
          </Link>{" "}
        </div>
      ) : (
        <div className="cart-wrapper">
          {" "}
          <div className="cart-left">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                {" "}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="cart-img"
                />{" "}
                <div className="cart-info">
                  {" "}
                  <h3>{item.title}</h3>{" "}
                  <p className="cart-price">
                    ${item.price} <span className="qty">x{item.qty}</span>{" "}
                  </p>
                  <ButtonGroup sx={{ mt: 1 }}>
                    <Button onClick={() => handleDelete(item)}>-</Button>
                    <Button onClick={() => handleAdd(item)}>+</Button>{" "}
                  </ButtonGroup>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>
          <div className="cart-right">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Total Items:</span> <strong>{cart.length}</strong>
            </div>
            <div className="summary-row">
              <span>Total Price:</span> <strong>${totalPrice}</strong>
            </div>

            <ButtonGroup sx={{ mt: 2 }}>
              <Button variant="contained" onClick={() => setModalOpen(true)}>
                Checkout
              </Button>
              <Button color="error" onClick={handleClearAll}>
                Clear All
              </Button>
            </ButtonGroup>
          </div>
          <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <Box sx={style}>
              <Typography variant="h6" gutterBottom>
                Order Confirmation
              </Typography>

              {cart.map((item) => (
                <Typography key={item.id}>
                  {item.title} - {item.qty} x ${item.price}
                </Typography>
              ))}

              <Typography sx={{ fontWeight: "bold", mt: 2 }}>
                Total: ${totalPrice}
              </Typography>

              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={handleCheckout}
              >
                Confirm
              </Button>
            </Box>
          </Modal>
        </div>
      )}

      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToast({ ...toast, open: false })}
          severity={toast.severity}
          variant="filled"
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Cart;
