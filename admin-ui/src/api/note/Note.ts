import { User } from "../user/User";

export type Note = {
  body: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User;
  userId: string;
};
