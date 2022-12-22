import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VerificationTokenWhereInput = {
  expires?: DateTimeNullableFilter;
  id?: StringFilter;
  token?: StringNullableFilter;
};
