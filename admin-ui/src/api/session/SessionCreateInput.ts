import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  expires: Date;
  sessionToken?: string | null;
  user: UserWhereUniqueInput;
  userId: string;
};
