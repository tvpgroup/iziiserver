import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
