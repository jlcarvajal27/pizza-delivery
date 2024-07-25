import React, { useState } from "react";
import css from "./Payment.module.css";
import Modal from "../modal/Modal";

const PaymentModal = ({ payment, closeModal }) => {
  const [formData, setFormData] = useState({});

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closeModal();
  };
  const total = typeof window !== "undefined" && localStorage.getItem("total");

  return (
    <Modal isOpen={payment === 0} onClose={closeModal}>
      <form onSubmit={handleSubmit} action="" className={css.formContainer}>
        <input
          onChange={handleInput}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          onChange={handleInput}
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
        />
        <textarea
          onChange={handleInput}
          name="address"
          cols={8}
          rows={3}
          placeholder="Address"
        ></textarea>
        <span>
          You will pay <span> ${total}</span> On delivery
        </span>
        <button className="btn">Place Order</button>
      </form>
    </Modal>
  );
};

export default PaymentModal;
