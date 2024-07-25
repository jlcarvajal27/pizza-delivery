import Image from "next/image";
import css from "./pizza.module.css";
import { useEffect, useState } from "react";
import { useStore } from "@/app/store/store";
import toast from "react-hot-toast";
import Modal from "./Modal";

const ModalPizza = ({ pizza, closeModal, isOpen }) => {
  if (!pizza) return null;

  const [size, setSize] = useState(1);
  const [price, setPrice] = useState(pizza.price);
  const [quantity, setQuantity] = useState(1);

  const addPizza = useStore((state) => state.addPizza);
  const addCartPizzas = () => {
    const pizzaToAdd = {
      ...pizza,
      size,
      price,
      quantity,
    };
    addPizza(pizzaToAdd);
    closeModal();
    toast.success("Added to Cart");
  };

  const handleQuantity = (type) => {
    if (type === "decre" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (type === "incre") {
      setQuantity(quantity + 1);
    }
  };

  const sizePrices = [pizza.price * 0.7, pizza.price, pizza.price * 1.6];

  useEffect(() => {
    setPrice(sizePrices[size] * quantity);
  }, [size, sizePrices, quantity]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className={css.container}>
        <div>
          <Image
            className={css.image}
            src={pizza.image}
            alt={pizza.name}
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className={css.right}>
          <span>{pizza.name}</span>
          <hr />
          <span>{pizza.description}</span>
          <span>${price.toFixed(2)}</span>
          <div className={css.size}>
            <span>Size</span>
            <div className={css.sizeVariants}>
              <div
                className={size === 0 ? css.selected : ""}
                onClick={() => setSize(0)}
              >
                Small
              </div>
              <div
                className={size === 1 ? css.selected : ""}
                onClick={() => setSize(1)}
              >
                Medium
              </div>
              <div
                className={size === 2 ? css.selected : ""}
                onClick={() => setSize(2)}
              >
                Large
              </div>
            </div>
          </div>
          <div className={css.quantity}>
            <span>Quantity</span>
            <div className={css.counter}>
              <Image
                src="/arrowLeft.png"
                height={10}
                width={10}
                alt="left"
                onClick={() => handleQuantity("decre")}
              />
              <span>{quantity}</span>
              <Image
                src="/arrowRight.png"
                height={10}
                width={10}
                alt="right"
                onClick={() => handleQuantity("incre")}
              />
            </div>
          </div>
          <button onClick={addCartPizzas} className={`btn ${css.btn}`}>
            Add to Cart
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalPizza;
