import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";

const configureStore = () => {
  //   const enhancer =
  //     process.env.NODE_ENV === "production"
  //       ? compose(applyMiddleware([]))
  //       : compose(applyMiddleware([]));

  //   const store = createStore(reducer, enhancer);
  const store = createStore(reducer);

  store.dispatch({
    type: "CHANGE_NICKNAME",
    data: "boogicho",
  });

  /*
  {
    type: "CHANGE_NICKNAME",
    data: "boogicho",
  } 
  1. 액션 객체가 디스패치하는 순간 타입과 데이터가 리듀서로 전달이 돼요.
  */
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
