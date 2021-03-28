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
import AccountSettings from "./AccountSettings";
import ProfileSettings from "./ProfileSettings";

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
            {state}
          </TitleSettings>
        </TitleContainer>
        <ContentContainer>
          <MenuSettings
            setState={setState}
            data={{ account: ACCOUNT, profile: PROFILE }}
          />
          <MainContent>
            {state === ACCOUNT ? <AccountSettings /> : null}
            {state === PROFILE ? <ProfileSettings /> : null}
          </MainContent>
        </ContentContainer>
      </SettingsContainer>
    </>
  );
};

export default Settings;
