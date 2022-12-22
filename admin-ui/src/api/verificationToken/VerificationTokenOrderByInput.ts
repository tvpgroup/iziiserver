import { SortOrder } from "../../util/SortOrder";

export type VerificationTokenOrderByInput = {
  createdAt?: SortOrder;
  expires?: SortOrder;
  id?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
};
