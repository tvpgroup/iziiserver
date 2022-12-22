import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteUpdateInput = {
  body?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput;
  userId?: string;
};
