import { User } from "../user/User";

export type Account = {
  accessToken: string | null;
  acctype: string | null;
  createdAt: Date;
  expiresAt: string | null;
  id: string;
  idToken: string | null;
  provider: string | null;
  providerAccountId: string | null;
  refreshToken: string | null;
  scope: string | null;
  sessionState: string | null;
  tokenType: string | null;
  updatedAt: Date;
  user?: Array<User>;
  userId: string;
};
