export interface IPost {
  id?: number;
  title: string;
  body: string;
  comments?: IComment[];
}

export interface IComment {
  id?: number;
  postId: number;
  body: string;
}

export interface RootState {
  post: PostsReducerState;
}

export interface PostsReducerState {
  posts: IPost[] | null;
  currentPost: IPost | null;
  loading: boolean;
  error: string | null;
}

