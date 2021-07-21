import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Row, Col, Input, Menu } from "antd"; //webpack이 알아서 css로 처리해줌
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import UserProfile from "../components/UserProfile";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

// 공통적으로 쓸 레이아웃
const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={13} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
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
AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
