import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="access_token" source="accessToken" />
        <TextInput label="AccType" source="acctype" />
        <TextInput label="expires_at" source="expiresAt" />
        <TextInput label="id_token" source="idToken" />
        <TextInput label="provider" source="provider" />
        <TextInput label="providerAccountId" source="providerAccountId" />
        <TextInput label="refresh_token" source="refreshToken" />
        <TextInput label="scope" source="scope" />
        <TextInput label="session_state" multiline source="sessionState" />
        <TextInput label="token_type" source="tokenType" />
        <ReferenceArrayInput
          source="user"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
