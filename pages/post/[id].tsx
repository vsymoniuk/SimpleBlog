import { IComment, RootState } from "interfaces/interfaces";
import { connect } from "react-redux";
import { fetchDetailedPost } from "store/actions/post";
import { createComment } from "store/actions/comment";
import Post from "components/Post/Post";

function PostPage({ createComment, currentPost, loading, error }): JSX.Element {
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return <Post createComment={createComment} post={currentPost} />;
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
