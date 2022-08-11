import { useReducer } from "react";
import CartContext from "./cart-contex";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedCartItems = [...state.items];

    if (existingCartIndex !== -1) {
      updatedCartItems[existingCartIndex].amount += action.item.amount;
    } else {
      updatedCartItems.push(action.item);
    }
    return {
      items: updatedCartItems,
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    };
  }

  if (action.type === "REMOVE") {
    const removingCartIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const removingCartItem = state.items[removingCartIndex];

    let updatedCartItems;
    if (removingCartItem.amount === 1) {
      updatedCartItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedCartItem = {
        ...removingCartItem,
        amount: --removingCartItem.amount,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[removingCartIndex] = updatedCartItem;
    }
    return {
      items: updatedCartItems,
      totalAmount: state.totalAmount - removingCartItem.price,
    };
  }

  if (action.type === "CLEAR") {
    return initialCartState;
  }
  return initialCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const clearCartHandler = (id) => {
    dispatchCartState({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
