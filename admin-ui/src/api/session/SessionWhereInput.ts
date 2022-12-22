import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  expires?: DateTimeFilter;
  id?: StringFilter;
  sessionToken?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  userId?: StringFilter;
};
