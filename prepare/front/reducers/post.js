export const initialState = {
  // 대문자와 소문자 차이는 sequelize 관계가 있다. - 정보끼리 관계가 있으면 합쳐주는데 그럴 때 대문자, id, nickname: 속성
  // 백엔드 개발자에게 어떤 구조인지 미리 소통하면 좋음 - 처음에 서버개발자와 리덕스 구조(데이터 구조)에 대해서 협의를 보거나 받아들이거나 주장하거나 합의점에 도달해야 편해질 것이다. 매번 바꿔주면 불편해진다
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫 번째 개시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://blog.kakaocdn.net/dn/WpktQ/btqSASa12K7/ZmGrfpFgAZ1EGvPkyobkek/img.jpg",
        },
        {
          src: "https://blog.kakaocdn.net/dn/WpktQ/btqSASa12K7/ZmGrfpFgAZ1EGvPkyobkek/img.jpg",
        },
        {
          src: "https://blog.kakaocdn.net/dn/WpktQ/btqSASa12K7/ZmGrfpFgAZ1EGvPkyobkek/img.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "우와 새로운 글이 올라왔군요~",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "얼른 보고 싶어요",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  contnet: "더미데티어입니다~",
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};

// 이전 state와 action을 받아서 다음 state를 돌려주는 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts], // 더미데이터를 앞에 추가해야 위에 나타난다
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
