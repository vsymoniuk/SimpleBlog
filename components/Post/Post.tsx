import { IComment, IPost } from "interfaces/interfaces";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  post: IPost;
  createComment: (comment: IComment) => any;
}

function Post({ createComment, post }: Props) {
  const [newComment, setNewComment] = useState("");

  const clickHandler = async () => {
    await createComment({ body: newComment, postId: post.id });
    Router.reload();
  };

  const Router = useRouter();

  return (
    <>
      <BackBtn onClick={() => Router.push("/")}>
        <i className="fas fa-arrow-left"></i>
      </BackBtn>
      <Container>
        <PostBlock>
          <h1>{post.title}</h1>
          <HR />
          <p>{post.body}</p>
          <br />
        </PostBlock>

        <FullWidthHR />
        <h2>Discussion:</h2>
        <FullWidthHR />

        <Form>
          <Input
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
            type="text"
            name="comment"
            placeholder="Create new comment"
          />
          <Button onClick={clickHandler}>Add comment</Button>
        </Form>

        <FullWidthHR />

        <Comments>
          {post.comments.map((comment: IComment) => {
            return comment.body ? (
              <li key={comment.id}>
                <Comment>{comment.body}</Comment>
              </li>
            ) : null;
          })}
        </Comments>
      </Container>
    </>
  );
}

const Comments = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Comment = styled.p`
  width: 100%;
  height: fit-content;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 2px 2px 2px #ccc;
`;

const BackBtn = styled.div`
  position: absolute;
  cursor: pointer;
  left: 20px;
  top: 20px;
  font-size: 2rem;
`;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 680px;
  height: fit-content;
  color: rgb(29, 34, 35);
  margin: 50px auto;
`;

const HR = styled.hr`
  width: 200px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: rgb(29, 34, 35);
`;

const FullWidthHR = styled(HR)`
  width: 100%;
  height: 2px;
  margin: 5px auto;
`;

const PostBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  margin: 20px 0;
`;

const Input = styled.input`
  width: 360px;
  background: #fff;
  padding: 15px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  outline: none;
  border: 0;

  font-size: 18px;
  font-weight: 700;
`;

const Button = styled.button`
  border: 0;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  font-weight: 700;
  padding: 15px;

  font-size: 18px;
  color: rgb(29, 34, 35);
`;

export default Post;
