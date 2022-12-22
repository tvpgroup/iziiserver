import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";
import { NoteUpdateManyWithoutUsersInput } from "./NoteUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SessionUpdateManyWithoutUsersInput } from "./SessionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  accounts?: AccountUpdateManyWithoutUsersInput;
  emailVerified?: string | null;
  firstName?: string | null;
  image?: string | null;
  lastName?: string | null;
  notes?: NoteUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  sessions?: SessionUpdateManyWithoutUsersInput;
  username?: string;
};
