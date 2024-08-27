"use client";
import { useEffect, useState } from "react";
import { useStore } from "@/app/store/store";
import css from "../cardCart/CartCard.module.css";
import Image from "next/image";
import PaymentModal from "../../components/PaymentModal/PaymentModal";
import toast from "react-hot-toast";

const CartCard = () => {
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
        {cartData.pizzas.length > 0 &&
          cartData.pizzas.map((pizza, index) => (
            <div key={index} className={css.card}>
              <Image
                className={css.image}
                src={pizza.image}
                height={120}
                width={120}
                alt={pizza.name}
              />
              <div className={css.info}>
                <h3>{pizza.name}</h3>
                <p>
                  Size:{" "}
                  <span>
                    {pizza.size === 0
                      ? "Small"
                      : pizza.size === 1
                      ? "Medium"
                      : "Large"}
                  </span>
                </p>
                <p>
                  Price: <span>${pizza.price.toFixed(2)}</span>
                </p>
                <p>
                  Quantity: <span>{pizza.quantity}</span>
                </p>
                <p>
                  Total: $
                  <span>{(pizza.quantity * pizza.price).toFixed(2)}</span>
                </p>
              </div>
              <button
                className={css.delete}
                onClick={() => handleRemovePizza(pizza.id, pizza.size)}
              >
                X
              </button>
            </div>
          ))}
      </div>

      <div className={css.cartSummary}>
        <span>Cart Summary</span>
        <div className={css.summaryDetails}>
          <div className={css.labels}>
            <span>Items</span>
            <span>Total</span>
          </div>
          <div className={css.values}>
            <span>{cartData.pizzas.length}</span>
            <span>
              <span className="text-red-600">$</span> {total.toFixed(2)}
            </span>
          </div>
        </div>
        <div className={css.buttons}>
          <button className={css.button} onClick={handleOnDelivery}>
            Pay on Delivery
          </button>
          <button className={css.button} onClick={handleOnCheckout}>
            Pay Now
          </button>
        </div>
      </div>
      <PaymentModal payment={payment} closeModal={closeModal} />
    </div>
  );
};

export default CartCard;
