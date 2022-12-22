import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  expires?: Date;
  sessionToken?: string | null;
  user?: UserWhereUniqueInput;
  userId?: string;
};
