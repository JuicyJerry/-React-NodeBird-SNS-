import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

import wrapper from "../store/configure";

// _app.js는 pages의 공통부분, AppLayout은 component의 공통부분
// Component = props.Component 입니다.
const NodeBird = ({ Component }) => {
  return (
    // <Provider store={store}>
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <div>공통메뉴</div>
      <Component />
    </>
    // </Provider>
  );
};

// 점검
// NodeBird.PropTypes = {
//   Component: PropTypes.elementType.isRequired,
// };
// <Component />처럼 JSX로 쓸 수 있는 것들을 elementType이라고 합니다.

// export default wrapper.widthRedux(NodeBird);
export default wrapper.withRedux(NodeBird);
