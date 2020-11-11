import { useEffect } from "react";
import { RootState } from "@_types/interfaces";
import { connect } from "react-redux";
import { fetchPosts } from "store/actions/post";

const LatestPosts = ({ posts, loading, error }): JSX.Element => {
  useEffect(() => {
    // async function load() {
    //   const response = await fetch('http://localhost:4200/posts')
    //   const json = await response.json()
    //   setPosts(json)
    // }
    // fetchPosts();
    // if (!posts) {
    // ()
    // }
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

LatestPosts.getInitialProps = async ({ store, req }) => {
  if (req) {
    console.log("aaaaфф");

    store.dispatch(fetchPosts());
  }
  if (!req) {
    console.log('aaaa', store.getState());

    return { store };
  }
};

const mapStateToProps = ({ post }: RootState) => ({
  posts: post.posts,
  loading: post.loading,
  error: post.error,
});

// const mapDispatchToProps = (dispatch: any) => ({
//   fetchPosts: () => dispatch(fetchPosts()),
// });

export default connect(mapStateToProps)(LatestPosts);
