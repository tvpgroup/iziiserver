import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NoteListRelationFilter } from "../note/NoteListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type UserWhereInput = {
  accounts?: AccountListRelationFilter;
  emailVerified?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  lastName?: StringNullableFilter;
  notes?: NoteListRelationFilter;
  sessions?: SessionListRelationFilter;
  username?: StringFilter;
};
