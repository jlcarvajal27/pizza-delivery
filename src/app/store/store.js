import { create } from "zustand";

export const useStore = create((set) => ({
  cart: {
    pizzas: [],
  },

  // addPizza

  addPizza: (data) =>
    set((state) => {
      const existingPizzaIndex = state.cart.pizzas.findIndex(
        (pizza) => pizza.id === data.id && pizza.size === data.size
      );

      if (existingPizzaIndex >= 0) {
        const updatedPizzas = state.cart.pizzas.map((pizza, index) =>
          index === existingPizzaIndex
            ? { ...pizza, quantity: pizza.quantity + data.quantity }
            : pizza
        );
        return {
          cart: {
            pizzas: updatedPizzas,
          },
        };
      }

      return {
        cart: {
          pizzas: [...state.cart.pizzas, data],
        },
      };
    }),
  // removePizza

  removePizza: (pizzaId, pizzaSize) =>
    set((state) => {
      const updatedPizzas = state.cart.pizzas.filter(
        (pizza) => !(pizza.id === pizzaId && pizza.size === pizzaSize)
      );

      return {
        cart: {
          pizzas: updatedPizzas,
        },
      };
    }),
}));
