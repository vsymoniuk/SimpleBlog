import { CommentActionTypes, CREATE_COMMENT } from "@_types/comment";

import { IComment } from "@_types/interfaces";

export const createComment = (comment: IComment): CommentActionTypes => ({
  type: CREATE_COMMENT,
  comment,
});
