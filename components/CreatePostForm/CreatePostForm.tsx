import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { IPost } from "interfaces/interfaces";

interface Props {
  createPost: (post: IPost) => any;
}

function CreatePostForm({ createPost }: Props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const Router = useRouter();

  const clickHandler = async () => {
    await createPost({ body, title });
    Router.push("/");
  };

  return (
    <>
      <BackBtn onClick={() => Router.push("/")}>
        <i className="fas fa-arrow-left"></i>
      </BackBtn>
      <Container>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write the post title"
        />
        <TextArea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="A post body..."
        />
        <Button onClick={clickHandler}>Create a new post</Button>
      </Container>
    </>
  );
}

const BackBtn = styled.div`
  position: absolute;
  cursor: pointer;
  left: 20px;
  top: 20px;
  font-size: 2rem;
`;

const Container = styled.form`
  display: block;
  width: 680px;
  height: fit-content;
  color: #14213d;
  margin: 20px auto;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
  border: 2px solid #8d99ae;
  border-radius: 20px;
  outline: none;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 250px;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  border: 2px solid #8d99ae;
  border-radius: 20px;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 20px;
  border: #8d99ae;
  box-shadow: 2px 2px 2px #ccc;
  cursor: pointer;
  outline: none;

  font-size: 20px;
  line-height: 1.125;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export default CreatePostForm;
