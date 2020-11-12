import PostList from "components/LatestPosts/PostList";
import { RootState } from "interfaces/interfaces";
import { connect } from "react-redux";
import { fetchPosts } from "store/actions/post";

const LatestPosts = ({ posts, loading, error }): JSX.Element => {
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return <PostList posts={posts} />;
};

LatestPosts.getInitialProps = async ({ store }) => {
  store.dispatch(fetchPosts());
};

const mapStateToProps = ({ post }: RootState) => ({
  posts: post.posts,
  loading: post.loading,
  error: post.error,
});

export default connect(mapStateToProps)(LatestPosts);
