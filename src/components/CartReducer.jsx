import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increaseQTY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "decreaseQTY":
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    case "addItem":
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case "removeItem":
      return state.filter((item) => item.id !== action.payload);
  }
}

const CartReducer = () => {
  const [state, dispatch] = useReducer(reducer, []);

  const products = [
    { id: 1, name: "Apple", price: 50 },
    { id: 2, name: "Banana", price: 30 },
    { id: 3, name: "Cherry", price: 75 },
  ];

  return (
    <>
      <div>
        {products.map((product) => (
          <div style={div} key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button
              onClick={() => dispatch({ type: "addItem", payload: product })}
            >
              Add Item
            </button>
          </div>
        ))}
      </div>
      <div>
        <h1>Cart Items</h1>
        {
          state.map((item) => (
            <div style={div} key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <button
                onClick={() =>
                  dispatch({ type: "increaseQTY", payload: item.id })
                }
              >
                +
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "decreaseQTY", payload: item.id })
                }
              >
                -
              </button>
              <button onClick={() => dispatch({ type: "removeItem", payload: item.id })}>
                Remove
              </button>
            </div>
          ))
        }
      </div>
    </>
  );
};

const div = {
  border: "1px solid #000",
  padding: "10px",
  margin: "10px",
  display: "inline-flex",
  gap: "10px",
  flexDirection: "column",
  width: "200px",
};

export default CartReducer;
