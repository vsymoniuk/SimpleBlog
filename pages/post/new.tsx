import { IPost } from "interfaces/interfaces";
import { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "store/actions/post";
import { useRouter } from "next/router";

const CreatePostPage = ({ createPost }): JSX.Element => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const Router = useRouter();

  const clickHandler = async () => {
    await createPost({ body, title });
    Router.push("/");
  };

  return (
    <div>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
        />
      </div>
      <hr />
      <div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name="body"
          cols={30}
          rows={10}
        ></textarea>
      </div>
      <button onClick={clickHandler}>Save Post</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  createPost: (p: IPost) => dispatch(createPost(p)),
});

export default connect(null, mapDispatchToProps)(CreatePostPage);
