import redux from "redux";
import { createStore } from "redux";

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAMS";
const buyCake = {
  type: BUY_CAKE,
  info: "FIRST REDUX ACTION",
};

const buyIceCream = {
  type: BUY_ICECREAM,
  info: "SECOND REDUX ACTION",
};
const buyCakes = () => {
  return buyCake;
};

const buyIceCreams = () => {
  return buyIceCream;
};

const initialState = {
  numofCakes: 10,
  numofIceCreams: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };

    case BUY_ICECREAM:
      return {
        ...state,
        numofIceCreams: state.numofIceCreams - 1,
      };
    default:
      return state;
  }
};

const Store = createStore(reducer);

console.log("initialState", Store.getState());

const unsubscribe = Store.subscribe(() => {
  console.log("UPDATED STATE", Store.getState());
});

Store.dispatch(buyCakes());
Store.dispatch(buyCakes());
Store.dispatch(buyCakes());
Store.dispatch(buyCakes());
Store.dispatch(buyIceCreams());
Store.dispatch(buyIceCreams());
Store.dispatch(buyIceCreams());

unsubscribe();
