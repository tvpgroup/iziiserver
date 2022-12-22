import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteCreateInput = {
  body?: string | null;
  title?: string | null;
  user: UserWhereUniqueInput;
  userId: string;
};
