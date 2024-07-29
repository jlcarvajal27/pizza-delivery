import css from "./Payment.module.css";
import Modal from "../modal/Modal";

const PaymentModal = ({ payment, closeModal }) => {
  const total = typeof window !== "undefined" && localStorage.getItem("total");

  return (
    <Modal isOpen={payment === 1} onClose={closeModal}>
      <form className={css.formContainer}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="phone" placeholder="Phone Number" required />
        <textarea
          name="address"
          cols={8}
          rows={3}
          placeholder="Address"
        ></textarea>
        <span>
          You will pay <span> ${total}</span>
        </span>

        <button className="btn">Place Order</button>
      </form>
    </Modal>
  );
};

export default PaymentModal;
