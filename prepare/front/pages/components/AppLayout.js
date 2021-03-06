import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Row, Col, Input, Menu } from "antd"; //webpack이 알아서 css로 처리해줌
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import UserProfile from "../components/UserProfile";
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";

// const SearchInput = styled(Input.Search)`
//   vertical-align: middle;
// `;

// 공통적으로 쓸 레이아웃
const AppLayout = ({ children }) => {
  // 7.리덕스를 사용하면서 중앙관리소에서 관리하기 때문에 관리할 필요없지짐
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn); // 받아온다.
  const { isLoggedIn } = useSelector((state) => state.user); // 받아온다.
  // react-redux는 react와 redux를 연결시켜줌 useSelector는 react-redux
  // 8.isLoggedIn이 바뀌면 AppLayout이 리렌더링됨

  const Global = createGlobalStyle`
    .ant-row {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }

    .ant-col:first-child {
      padding-left: 0 !important;
    }
    
    .ant-col:last-child {
      padding-right: 0 !important;
    }
  `;

  console.log(isLoggedIn);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          {/* <SearchInput enterButton /> */}
          {/* <div enterButton></div> */}
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={13} md={6}>
          {isLoggedIn ? (
            // 9. 프롭스로 넘겨줄 필요가 없어지고 해당 컴포넌트로 가서...
            <UserProfile />
          ) : (
            // <UserProfile setIsLoggedIn={setIsLoggedIn} />
            (console.log(isLoggedIn), (<LoginForm />))
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.zerocho.com"
            target="_blank"
            rel="noreferrer noopener" // _blank의 보안위험 이슈 때문에 추가해줘야한다
          >
            Made by Jaylee
          </a>
        </Col>
      </Row>
    </div>
  );
};

// propTypes로 검사 (타입체킹)
// 화면에 들어갈, 리액트의 모든 것이 node (node.js 아님)
// AppLayout.prototype = {
//   children: PropTypes.node.isRequired,
// };

export default AppLayout;
