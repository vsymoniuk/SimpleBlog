import { IComment } from "../../interfaces/interfaces";

export const CREATE_COMMENT = "CREATE_COMMENT";

export interface CreateCommentAction {
  type: typeof CREATE_COMMENT;
  comment: IComment;
}

export type CommentActionTypes = CreateCommentAction;
