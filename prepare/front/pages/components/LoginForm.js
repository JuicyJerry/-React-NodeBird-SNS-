import React, { useState, useCallback, useMemo } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";

// div 태그가 됨
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
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

  const onSubmitForm = useCallback(
    (e) => {
      console.log(id, password);
      setIsLoggedIn(true);
    },
    [id, password]
  );

  const FormWrapper = styled(Form)`
    padding: 10px;
  `;

  return (
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
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;
