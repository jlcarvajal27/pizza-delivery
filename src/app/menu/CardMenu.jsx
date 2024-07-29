import { useState } from "react";
import css from "./Menu.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pizzaData } from "@/app/data/pizza-data";
import ModalPizza from "../components/pizzaModal/ModalPizza";

const CardMenu = () => {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = (pizza) => {
    setSelectedPizza(pizza);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPizza(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-16 -mx-[6rem] -px-[28rem] ">
        <Slider {...settings}>
          {pizzaData.map((pizza) => (
            <div key={pizza.id} className={css.card}>
              <div className={css.cardImageContainer}>
                <img className="w-full" src={pizza.image} alt={pizza.name} />
              </div>
              <div className={css.cardContent}>
                <h5 className={css.cardTitle}>{pizza.name}</h5>
                <p className={css.cardDescription}>{pizza.description}</p>
              </div>
              <div className={css.cardActions}>
                <button
                  className={css.cardButton}
                  type="button"
                  onClick={() => handleBuyClick(pizza)}
                >
                  Buy
                </button>
                <span className="text-red-600 font-semibold">
                  ${pizza.price}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {isModalOpen && (
        <ModalPizza
          isOpen={isModalOpen}
          pizza={selectedPizza}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default CardMenu;
