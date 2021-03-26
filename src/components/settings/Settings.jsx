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
import Security from "./Security";

const Settings = () => {
  const ACCOUNT = "account";
  const SECURITY = "security";

  const [state, setState] = useState(ACCOUNT);

  return (
    <>
      <Header />
      <SettingsContainer>
        <TitleContainer>
          <TitleSettings>Settings</TitleSettings>
          <TitleSettings>
            {state === ACCOUNT ? "Account" : "Security"}
          </TitleSettings>
        </TitleContainer>
        <ContentContainer>
          <MenuSettings
            setState={setState}
            data={{ account: ACCOUNT, security: SECURITY }}
          />
          <MainContent>
            {state === ACCOUNT ? <Account /> : null}

            {state === SECURITY ? <Security /> : null}
          </MainContent>
        </ContentContainer>
      </SettingsContainer>
    </>
  );
};

export default Settings;
