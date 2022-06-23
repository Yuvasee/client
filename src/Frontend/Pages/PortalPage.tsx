import { EthConnection } from '@darkforest_eth/network';
import { EthAddress } from '@darkforest_eth/types';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { InitRenderState, Wrapper } from '../Components/GameLandingPageComponents';
import { HideSmall } from '../Components/Text';
import { PortalMainView } from '../Views/Portal/PortalMainView';
import { PortalSidebarView } from '../Views/Portal/PortalSidebarView';
import { PrettyOverlayGradient } from './LandingPage';
import { PortalLandingPage } from './PortalLandingPage';

export function PortalPage() {
  const [connection, setConnection] = useState<EthConnection | undefined>();
  const [ownerAddress, setOwnerAddress] = useState<EthAddress | undefined>();

  const onReady = useCallback(
    (connection: EthConnection) => {
      setConnection(connection);
      setOwnerAddress(connection.getAddress());
    },
    [setConnection]
  );

  if (connection && ownerAddress) {
    return <Portal playerAddress={ownerAddress} />;
  } 
  return (
    <Wrapper initRender={InitRenderState.NONE} terminalEnabled={false}>
      <PortalLandingPage onReady={onReady} />
    </Wrapper>
  );
}

function Portal({ playerAddress }: { playerAddress: EthAddress }) {

  return (
    <>
      <PrettyOverlayGradient />
      <PortalContainer>
        <HideSmall>
          <PortalSidebarView playerAddress={playerAddress} />
        </HideSmall>
        <PortalMainView/>
      </PortalContainer>
    </>
  );
}

const PortalContainer = styled.div`
  vertical-align: baseline;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 245px 800px;
  min-height: 100vh;
  justify-content: center;

`;