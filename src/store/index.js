// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import counter from "./counter";

const store = configureStore({
  reducer: { counter, auth },
});

export default store;

// Redux way of creating store.
// const reducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "incrementbynumber") {
//     return {
//       counter: state.counter + action.number,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(reducer);
