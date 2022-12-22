import { UserUpdateManyWithoutAccountsInput } from "./UserUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  accessToken?: string | null;
  acctype?: string | null;
  expiresAt?: string | null;
  idToken?: string | null;
  provider?: string | null;
  providerAccountId?: string | null;
  refreshToken?: string | null;
  scope?: string | null;
  sessionState?: string | null;
  tokenType?: string | null;
  user?: UserUpdateManyWithoutAccountsInput;
  userId?: string;
};
