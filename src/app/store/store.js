import create from "zustand";

const useStore = create((set) => ({
  cart: {
    pizzas: [],
  },
  setCart: (cart) => set(() => ({ cart })),
  addPizza: (pizza) =>
    set((state) => {
      const updatedCart = {
        ...state.cart,
        pizzas: [...state.cart.pizzas, pizza],
      };
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  removePizza: (pizzaId, pizzaSize) =>
    set((state) => {
      const updatedCart = {
        ...state.cart,
        pizzas: state.cart.pizzas.filter(
          (pizza) => !(pizza.id === pizzaId && pizza.size === pizzaSize)
        ),
      };
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  initializeCart: () => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      set(() => ({ cart: JSON.parse(storedCart) }));
    }
  },
}));

export { useStore };
