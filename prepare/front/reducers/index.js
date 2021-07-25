import { HYDRATE } from "next-redux-wrapper";

// ex
const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signupData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};

// login action
export const loginAction = (data) => {
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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return { ...state, ...action.payload };
    case "CHANGE_NICKNAME":
      return {
        ...state,
        user: {
          ...state,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {
          ...state,
          isLoggedIn: false,
          user: null,
        },
      };
    default:
      return state;
  }
};

// example end.

// const initialState = {
//   name: "zerocho",
//   age: 27,
//   password: "babo",
// };

// const changeNickname = {
//   type: "CHANGE_NICKNAME",
//   data: "boogicho",
// };

// //action creator
// const changeNickname = (data) => {
//   return {
//     type: "CHANGE_NICKNAME",
//     data,
//   };
// };

// // changeNickname('boogicho');
// // changeNickname('neue_zeal');

// StorageEvent.dispatch(changeNickname("might tak"));
// // 5. 이렇게 되면 이 action creator로 어떤 액션이든지 즉석에서 만들어서 바로 디스패치 할 수 있게 되는 거에요.
// // 6. redux-saga에서 async acton creator로 하는 방법이 나온다.

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "CHANGE_NICKNAME":
//       return {
//         ...state,
//         name: action.data,
//       };
//   }

//   /**
//    2. 전달 받은 액션 객체로 다음 state가 만들어져요. (initialState랑 다름!)
//    3. rootReducer는 (이전 상태, 액션) => 다음 상태를 만들어내는 함수! (두개를 받아서 하나로 축소하죠)
//    3번에 의해 리덕스라는 이름이 나왔는데요.
//    4. 데이터를 바꾸고 싶으면 항상 액션을 만드시면돼요.
//    액션을 만드는데에서 다양한 기법이 나오는데..

//    //#1
//    const changeNickname = {
//     type: "CHANGE_NICKNAME",
//     data: "boogicho",
//     };

//     //#2
//     const changeNickname = {
//     type: "CHANGE_NICKNAME",
//     data: "kimkanu",
//     };

//     #1, #2처럼 하게 되면 중복이 발생돼 액션을 만들어 주는 함수를 만들어줘요.

//    */
// };

export default rootReducer;
