import React, { useState, useCallback, useMemo } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import PropTypes from "prop-types";

import useInput from "../../hooks/useInput";
import { loginAction } from "../../reducers/user";

// div 태그가 됨
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

// 10. 프롭을 받는게 아니라..
// const LoginForm = ({ setIsLoggedIn }) => {
const LoginForm = () => {
  // 11. 액션을 디스패치해야 돼죠. 리덕스 쓰면 useState 쓸 일이 많이 줄어들어요.
  const dispatch = useDispatch();

  const [id, onChangeId] = useInput("");
  // const [id, setId] = useState("");
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // }, []);

  const [password, onChangePassword] = useInput("");
  //   const [password, setPassword] = useState("");
  // const onChangePassword = useCallback((e) => {
  //   setPassword(e.target.value);
  // }, []);

  const style = useMemo(() => ({ marginTop: 10 }), []); // 리렌더링돼도 같은 객체가 유지

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction({ id, password })); // 12.
    // setIsLoggedIn(true);
  }, [id, password]);

  const FormWrapper = styled(Form)`
    padding: 10px;
  `;

  return (
    // <FormWrapper onFinish={onSubmitForm}>
    // <form onFinish={onSubmitForm}>
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper style={style}>
        {/* <div> */}
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
        {/* </div> */}
      </ButtonWrapper>
    </FormWrapper>
    // </FormWrapper>
  );
};

// 10. 프롭을 받는게 아니라..
// LoginForm.propTypes = {
//   setIsLoggedIn: PropTypes.func.isRequired,
// };

export default LoginForm;
