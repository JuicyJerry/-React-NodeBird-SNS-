export const initialState = {
  isLoggedIn: false,
  user: null,
  signupData: {},
  loginData: {},
};

// login action
export const loginAction = (data) => {
  console.log("loginAction");

  return {
    type: "LOG_IN",
    data,
  };
};

// logout action
export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

// 이전 state와 action을 받아서 다음 state를 돌려주는 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      console.log("rootReducer");

      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case "CHANGE_NICKNAME":
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
