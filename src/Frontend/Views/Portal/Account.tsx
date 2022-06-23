import { EthAddress } from '@darkforest_eth/types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { logOut } from '../../../Backend/Network/AccountManager';
import { getAllTwitters } from '../../../Backend/Network/UtilityServerAPI';
import { Btn } from '../../Components/Btn';
import { TwitterLink } from '../../Components/Labels/Labels';
import { TextPreview } from '../../Components/TextPreview';

import dfstyles from '../../Styles/dfstyles';

function AccountDetails({ address }: { address: EthAddress }) {
  const [twitter, setTwitter] = useState<string | undefined>();

  useEffect(() => {
    getAllTwitters().then((t) => setTwitter(t[address]));
  }, []);

  return (
    <NamesContainer>
      <Large>
        {twitter ? (
          <TwitterLink twitter={twitter} />
        ) : (
          <TextPreview text={address} focusedWidth={'200px'} unFocusedWidth={'150px'} />
        )}
      </Large>
      <TextPreview text={address} focusedWidth={'200px'} unFocusedWidth={'120px'} />
    </NamesContainer>
  );
}

export function Account({ address }: { address: EthAddress }) {
  return (
    <PaneContainer>
      <AccountDetails address={address} />
      <Btn variant={'portal'} size='small' onClick={logOut}>Logout</Btn>
    </PaneContainer>
  );
}

const PaneContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${dfstyles.colors.border};
  background: rgba(255, 255, 255, 0.04);
  width: 100%;
  padding: 1em;
  border-radius: 10px;
`;

const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Large = styled.div`
  font-size: 1.25em;
`;