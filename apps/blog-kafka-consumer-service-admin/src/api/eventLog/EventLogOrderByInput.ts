import { SortOrder } from "../../util/SortOrder";

export type EventLogOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
