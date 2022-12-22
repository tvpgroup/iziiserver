import { Account } from "../account/Account";
import { Note } from "../note/Note";
import { JsonValue } from "type-fest";
import { Session } from "../session/Session";

export type User = {
  accounts?: Array<Account>;
  createdAt: Date;
  emailVerified: string | null;
  firstName: string | null;
  id: string;
  image: string | null;
  lastName: string | null;
  notes?: Array<Note>;
  roles: JsonValue;
  sessions?: Array<Session>;
  updatedAt: Date;
  username: string;
};
