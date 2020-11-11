import { IComment } from './interfaces';

export const CREATE_COMMENT = 'CREATE_COMMENT'; 

interface CreateCommentAction {
    type: typeof CREATE_COMMENT;
    comment: IComment;
}

export type CommentActionTypes = CreateCommentAction;