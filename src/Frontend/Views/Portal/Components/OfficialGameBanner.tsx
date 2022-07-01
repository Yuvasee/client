import { getConfigName } from '@darkforest_eth/procedural';
import { EthAddress, Leaderboard } from '@darkforest_eth/types';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { loadArenaLeaderboard } from '../../../../Backend/Network/ArenaLeaderboardApi';
import { loadConfigFromHash } from '../../../../Backend/Network/ConfigApi';
import { loadRecentMaps } from '../../../../Backend/Network/MapsApi';
import { ArenaLeaderboardDisplay } from '../../ArenaLeaderboard';
import { ArenaPortalButton } from '../PortalHomeView';

export const OfficialGameBanner: React.FC<{
  configHash: string;
}> = ({ configHash }) => {
  const [leaderboardError, setLeaderboardError] = useState<Error | undefined>();
  const [leaderboard, setLeaderboard] = useState<Leaderboard | undefined>();
  const [lobbyAddress, setLobbyAddress] = useState<EthAddress | undefined>();

  useEffect(() => {
    setLeaderboard(undefined);
    loadArenaLeaderboard(configHash, false)
      .then((board) => {
        setLeaderboardError(undefined);
        setLeaderboard(board);
      })
      .catch((e) => setLeaderboardError(e));
    loadRecentMaps(1, configHash).then((maps) => {
      setLobbyAddress(maps ? maps[0].lobbyAddress : undefined);
    });
  }, [configHash]);

  return (
    <Banner>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <BannerTitle>{getConfigName(configHash)}</BannerTitle>
        <span>{lobbyAddress}</span>
        <span style={{}}>Official DFDAO Map</span>
        {lobbyAddress && (
          <Link
            style={{ minWidth: '250px' }}
            target='blank'
            to={`/play/${lobbyAddress}?create=true`}
          >
            <ArenaPortalButton>Play</ArenaPortalButton>
          </Link>
        )}
      </div>
      {leaderboard && (
        <div style={{ maxHeight: '25vh', overflowY: 'auto', marginBottom: '3rem' }}>
          <ArenaLeaderboardDisplay leaderboard={leaderboard} error={leaderboardError} />
        </div>
      )}
    </Banner>
  );
};

const Banner = styled.div`
  width: 100%:
  height: 100%;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 6px;
  min-height: 270px;
  max-height: 25vh;
  overflow: hidden;
`;

const BannerTitle = styled.span`
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;