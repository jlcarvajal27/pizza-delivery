"use client";
import { useEffect, useState } from "react";
import { useStore } from "@/app/store/store";
import css from "./Cart.module.css";
import Image from "next/image";
import PaymentModal from "../components/PaymentModal/PaymentModal";
import toast from "react-hot-toast";

const Cart = () => {
  const cartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);
  const initializeCart = useStore((state) => state.initializeCart);
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    initializeCart();
  }, [initializeCart]);

  const handleRemovePizza = (pizzaId, pizzaSize) => {
    removePizza(pizzaId, pizzaSize);
  };

  const total = cartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0);

  const handleOnDelivery = () => {
    setPayment(1);
  };

  const handleOnCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(cartData.pizzas),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.url) {
      window.location = data.url;
    } else {
      toast.error("Something went wrong, please try again.");
    }
  };

  const closeModal = () => {
    setPayment(null);
  };

  return (
    <div className={css.container}>
      <div className={css.details}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>Pizza</th>
              <th>Name</th>
              <th>Size</th>
              <th> Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={css.body}>
            {cartData.pizzas.length > 0 &&
              cartData.pizzas.map((pizza, index) => (
                <tr key={index}>
                  <td className={css.cell}>
                    <Image
                      className={css.image}
                      src={pizza.image}
                      height={120}
                      width={120}
                      alt={pizza.name}
                    />
                  </td>
                  <td>{pizza.name}</td>
                  <td>
                    {pizza.size === 0
                      ? "Small"
                      : pizza.size === 1
                      ? "Medium"
                      : "Large"}
                  </td>
                  <td>{pizza.price}</td>
                  <td>{pizza.quantity}</td>
                  <td>{pizza.quantity * pizza.price.toFixed(2)}</td>
                  <td
                    className={css.delete}
                    onClick={() => handleRemovePizza(pizza.id, pizza.size)}
                  >
                    X
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className={css.cart}>
        <span>Cart</span>
        <div className={css.CartDetails}>
          <div>
            <span>Items</span>
            <span>{cartData.pizzas.length}</span>
          </div>
          <div>
            <span>Total</span>
            <span>$ {total.toFixed(2)}</span>
          </div>
        </div>
        <div className={css.buttons}>
          <button className="btn" onClick={handleOnDelivery}>
            Pay on Delivery
          </button>
          <button className="btn" onClick={handleOnCheckout}>
            Pay Now
          </button>
        </div>
      </div>
      <PaymentModal payment={payment} closeModal={closeModal} />
    </div>
  );
};

export default Cart;
