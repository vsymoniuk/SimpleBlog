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

export interface RootState  {
    post: PostsReducerState;
    comment: CommentReducerState;
}

export interface PostsReducerState {
    posts?: IPost[];
    currentPost?: IPost;
    error?: string;
}

export interface CommentReducerState {
    comments?: IComment[];
}