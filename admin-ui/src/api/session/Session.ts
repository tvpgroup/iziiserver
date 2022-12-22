import { User } from "../user/User";

export type Session = {
  createdAt: Date;
  expires: Date;
  id: string;
  sessionToken: string | null;
  updatedAt: Date;
  user?: User;
  userId: string;
};
