import { Button, Form, Input } from "antd";
import React, { useCallback, useState } from "react";
import useInput from "../../hooks/useInput";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

// 게시글의 아이디를 알기위해서 넘김
const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);

  return (
    <Form
      onFinish={onSubmitComment}
      style={{ position: "relative", margin: 0 }}
    >
      <Form.Item>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          row={4}
        />
        <Button
          type="primary"
          htmlType="submit"
          style={{ position: "absolute", right: 0, bottom: -40 }}
        >
          삐약
        </Button>
      </Form.Item>
      폼
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
