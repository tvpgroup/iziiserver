import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="access_token" source="accessToken" />
        <TextField label="AccType" source="acctype" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="expires_at" source="expiresAt" />
        <TextField label="ID" source="id" />
        <TextField label="id_token" source="idToken" />
        <TextField label="provider" source="provider" />
        <TextField label="providerAccountId" source="providerAccountId" />
        <TextField label="refresh_token" source="refreshToken" />
        <TextField label="scope" source="scope" />
        <TextField label="session_state" source="sessionState" />
        <TextField label="token_type" source="tokenType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
      </Datagrid>
    </List>
  );
};
