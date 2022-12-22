import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";
import { NoteCreateNestedManyWithoutUsersInput } from "./NoteCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SessionCreateNestedManyWithoutUsersInput } from "./SessionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  accounts?: AccountCreateNestedManyWithoutUsersInput;
  emailVerified?: string | null;
  firstName?: string | null;
  image?: string | null;
  lastName?: string | null;
  notes?: NoteCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  sessions?: SessionCreateNestedManyWithoutUsersInput;
  username: string;
};
