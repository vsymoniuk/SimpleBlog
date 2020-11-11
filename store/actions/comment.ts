import { CommentActionTypes, CREATE_COMMENT } from "store/types/comment";

import { IComment } from "interfaces/interfaces";

export const createComment = (comment: IComment): CommentActionTypes => ({
  type: CREATE_COMMENT,
  comment,
});
