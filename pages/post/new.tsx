import CreatePostForm from "components/CreatePostForm/CreatePostForm";
import { IPost } from "interfaces/interfaces";
import { connect } from "react-redux";
import { createPost } from "store/actions/post";

const CreatePostPage = ({ createPost }): JSX.Element => {
  return <CreatePostForm createPost={createPost} />
};

const mapDispatchToProps = (dispatch: any) => ({
  createPost: (p: IPost) => dispatch(createPost(p)),
});

export default connect(null, mapDispatchToProps)(CreatePostPage);
