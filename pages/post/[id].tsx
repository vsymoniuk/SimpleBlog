import { ChangeEvent, useState } from "react";

import { IComment, RootState } from "interfaces/interfaces";
import { connect } from "react-redux";
import { fetchDetailedPost } from "store/actions/post";
import { createComment } from "store/actions/comment";
import { useRouter } from "next/router";

function PostPage({ createComment, currentPost, loading, error }): JSX.Element {
  const [newComment, setNewComment] = useState("");
  const Router = useRouter();

  const clickHandler = async () => {
    await createComment({ body: newComment, postId: currentPost.id });
    Router.reload();
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <div>
        <h1>{currentPost.title}</h1>
        <hr />
        <p>{currentPost.body}</p>
      </div>
      <hr />
      <input
        value={newComment}
        onChange={async (e: ChangeEvent<HTMLInputElement>) => {
          setNewComment(e.target.value);
        }}
        type="text"
        name="comment"
      />
      <button onClick={clickHandler}>Add comment</button>
      <hr />
      <ul>
        {currentPost.comments.map((comment: IComment) => {
          return (
            <li key={comment.id}>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

PostPage.getInitialProps = async ({ store, query }) => {
  store.dispatch(fetchDetailedPost(query.id as string));
  return { store };
};

const mapStateToProps = ({ post }: RootState) => ({
  currentPost: post.currentPost,
  loading: post.loading,
  error: post.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  createComment: (c: IComment) => dispatch(createComment(c)),
});

PostPage.displayName = "PostPage";

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
