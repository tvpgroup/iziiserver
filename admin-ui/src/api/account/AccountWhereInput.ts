import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type AccountWhereInput = {
  accessToken?: StringNullableFilter;
  acctype?: StringNullableFilter;
  expiresAt?: StringNullableFilter;
  id?: StringFilter;
  idToken?: StringNullableFilter;
  provider?: StringNullableFilter;
  providerAccountId?: StringNullableFilter;
  refreshToken?: StringNullableFilter;
  scope?: StringNullableFilter;
  sessionState?: StringNullableFilter;
  tokenType?: StringNullableFilter;
  user?: UserListRelationFilter;
  userId?: StringFilter;
};
