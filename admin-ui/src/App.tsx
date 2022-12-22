import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { NoteList } from "./note/NoteList";
import { NoteCreate } from "./note/NoteCreate";
import { NoteEdit } from "./note/NoteEdit";
import { NoteShow } from "./note/NoteShow";
import { VerificationTokenList } from "./verificationToken/VerificationTokenList";
import { VerificationTokenCreate } from "./verificationToken/VerificationTokenCreate";
import { VerificationTokenEdit } from "./verificationToken/VerificationTokenEdit";
import { VerificationTokenShow } from "./verificationToken/VerificationTokenShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"IZIIAPPS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="Note"
          list={NoteList}
          edit={NoteEdit}
          create={NoteCreate}
          show={NoteShow}
        />
        <Resource
          name="VerificationToken"
          list={VerificationTokenList}
          edit={VerificationTokenEdit}
          create={VerificationTokenCreate}
          show={VerificationTokenShow}
        />
      </Admin>
    </div>
  );
};

export default App;
