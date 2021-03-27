import React, { useState } from "react";
import Header from "../header/Header";
import {
  SettingsContainer,
  TitleContainer,
  TitleSettings,
  ContentContainer,
  MainContent,
} from "../../styles/settings/settings.styles";
import MenuSettings from "./MenuSettings";
import Account from "./Account";

const Settings = () => {
  const ACCOUNT = "Account";
  const PROFILE = 'Profile';
  
  const [state, setState] = useState(ACCOUNT);

  return (
    <>
      <Header />
      <SettingsContainer>
        <TitleContainer>
          <TitleSettings>Settings</TitleSettings>
          <TitleSettings>
            {state === ACCOUNT ? "Account" : "Profile"}
          </TitleSettings>
        </TitleContainer>
        <ContentContainer>
          <MenuSettings
            setState={setState}
            data={{ account: ACCOUNT, security: PROFILE }}
          />
          <MainContent>
            {state === ACCOUNT ? <Account /> : null}
          </MainContent>
        </ContentContainer>
      </SettingsContainer>
    </>
  );
};

export default Settings;
