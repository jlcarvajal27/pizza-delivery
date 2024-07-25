import css from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={css.closeButton} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
