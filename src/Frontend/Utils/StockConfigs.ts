import { LobbyInitializers } from '../Panes/Lobbies/Reducer';

const onePlayerRace: LobbyInitializers = {
  ADMIN_CAN_ADD_PLANETS: true,
  WORLD_RADIUS_LOCKED: true,
  WORLD_RADIUS_MIN: 3000,
  DISABLE_ZK_CHECKS: true,
  PLANETHASH_KEY: 1317,
  SPACETYPE_KEY: 1318,
  BIOMEBASE_KEY: 1319,
  PERLIN_LENGTH_SCALE: 512,
  PERLIN_MIRROR_X: false,
  PERLIN_MIRROR_Y: false,
  CLAIM_PLANET_COOLDOWN: 0,
  MAX_NATURAL_PLANET_LEVEL: 4,
  TIME_FACTOR_HUNDREDTHS: 1700,
  PERLIN_THRESHOLD_1: 11,
  PERLIN_THRESHOLD_2: 15,
  PERLIN_THRESHOLD_3: 19,
  INIT_PERLIN_MIN: 0,
  INIT_PERLIN_MAX: 32,
  BIOME_THRESHOLD_1: 14,
  BIOME_THRESHOLD_2: 17,
  SILVER_SCORE_VALUE: 10,
  PLANET_LEVEL_THRESHOLDS: [16777216, 4194292, 1048561, 262128, 65520, 16368, 4080, 1008, 240, 48],
  PLANET_RARITY: 9000,
  PLANET_TRANSFER_ENABLED: true,
  PLANET_TYPE_WEIGHTS: [
    [
      [1, 0, 0, 0, 0],
      [13, 2, 0, 1, 0],
      [13, 2, 0, 1, 0],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [13, 2, 1, 0, 0],
      [12, 2, 1, 1, 0],
      [11, 2, 1, 1, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [10, 4, 2, 0, 0],
      [10, 4, 1, 1, 0],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [11, 4, 1, 0, 0],
      [11, 4, 1, 0, 0],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
    ],
  ],
  ARTIFACT_POINT_VALUES: [0, 100000, 200000, 500000, 20000000, 50000000],
  SPACE_JUNK_ENABLED: false,
  SPACE_JUNK_LIMIT: 1000,
  PLANET_LEVEL_JUNK: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
  ABANDON_SPEED_CHANGE_PERCENT: 150,
  ABANDON_RANGE_CHANGE_PERCENT: 150,
  PHOTOID_ACTIVATION_DELAY: 60,
  SPAWN_RIM_AREA: 0,
  LOCATION_REVEAL_COOLDOWN: 10800,
  CAPTURE_ZONES_ENABLED: false,
  CAPTURE_ZONE_COUNT: 20,
  CAPTURE_ZONE_CHANGE_BLOCK_INTERVAL: 255,
  CAPTURE_ZONE_RADIUS: 1000,
  CAPTURE_ZONE_PLANET_LEVEL_SCORE: [
    0, 0, 250000, 500000, 750000, 1000000, 10000000, 20000000, 50000000, 100000000,
  ],
  CAPTURE_ZONE_HOLD_BLOCKS_REQUIRED: 2048,
  CAPTURE_ZONES_PER_5000_WORLD_RADIUS: 3,
  MANUAL_SPAWN: true,
  TARGET_PLANETS: true,
  CLAIM_VICTORY_ENERGY_PERCENT: 50,
  MODIFIERS: [100, 100, 100, 100, 100, 100, 100, 100],
  SPACESHIPS: [true, true, true, true, true],
  WHITELIST_ENABLED: false,
  START_PAUSED: false,
  RANDOM_ARTIFACTS: false,
  ADMIN_PLANETS: [
    {
      x: -1950,
      y: -1950,
      level: 0,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: true,
    },
    {
      x: 1950,
      y: 1950,
      level: 4,
      planetType: 0,
      isTargetPlanet: true,
      isSpawnPlanet: false,
    },
  ],
  TOKEN_MINT_END_TIMESTAMP: 1717258179, // SECONDS!
  NO_ADMIN: false,
  INIT_PLANETS: [],
  WHITELIST: [],
};

const fourPlayerBattle: LobbyInitializers = {
  ADMIN_CAN_ADD_PLANETS: true,
  WORLD_RADIUS_LOCKED: true,
  WORLD_RADIUS_MIN: 7000,
  DISABLE_ZK_CHECKS: false,
  PLANETHASH_KEY: 2401,
  SPACETYPE_KEY: 2402,
  BIOMEBASE_KEY: 2403,
  PERLIN_LENGTH_SCALE: 2048,
  PERLIN_MIRROR_X: true,
  PERLIN_MIRROR_Y: true,
  CLAIM_PLANET_COOLDOWN: 0,
  MAX_NATURAL_PLANET_LEVEL: 9,
  TIME_FACTOR_HUNDREDTHS: 1500,
  PERLIN_THRESHOLD_1: 13,
  PERLIN_THRESHOLD_2: 14,
  PERLIN_THRESHOLD_3: 17,
  INIT_PERLIN_MIN: 0,
  INIT_PERLIN_MAX: 32,
  BIOME_THRESHOLD_1: 14,
  BIOME_THRESHOLD_2: 17,
  SILVER_SCORE_VALUE: 10,
  PLANET_LEVEL_THRESHOLDS: [1048563, 1048562, 1048561, 262128, 65520, 16368, 4080, 1008, 240, 48],
  PLANET_RARITY: 9000,
  PLANET_TRANSFER_ENABLED: true,
  PLANET_TYPE_WEIGHTS: [
    [
      [1, 0, 0, 0, 0],
      [13, 2, 0, 1, 0],
      [13, 2, 0, 1, 0],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [13, 2, 1, 0, 0],
      [12, 2, 1, 1, 0],
      [11, 2, 1, 1, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [10, 4, 2, 0, 0],
      [10, 4, 1, 1, 0],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [11, 4, 1, 0, 0],
      [11, 4, 1, 0, 0],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
    ],
  ],
  ARTIFACT_POINT_VALUES: [0, 100000, 200000, 500000, 20000000, 50000000],
  SPACE_JUNK_ENABLED: true,
  SPACE_JUNK_LIMIT: 1000,
  PLANET_LEVEL_JUNK: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
  ABANDON_SPEED_CHANGE_PERCENT: 150,
  ABANDON_RANGE_CHANGE_PERCENT: 150,
  PHOTOID_ACTIVATION_DELAY: 60,
  SPAWN_RIM_AREA: 0,
  LOCATION_REVEAL_COOLDOWN: 10800,
  CAPTURE_ZONES_ENABLED: false,
  CAPTURE_ZONE_COUNT: 20,
  CAPTURE_ZONE_CHANGE_BLOCK_INTERVAL: 255,
  CAPTURE_ZONE_RADIUS: 1000,
  CAPTURE_ZONE_PLANET_LEVEL_SCORE: [
    0, 0, 250000, 500000, 750000, 1000000, 10000000, 20000000, 50000000, 100000000,
  ],
  CAPTURE_ZONE_HOLD_BLOCKS_REQUIRED: 2048,
  CAPTURE_ZONES_PER_5000_WORLD_RADIUS: 3,
  MANUAL_SPAWN: true,
  TARGET_PLANETS: true,
  CLAIM_VICTORY_ENERGY_PERCENT: 50,
  MODIFIERS: [100, 100, 100, 100, 100, 100, 100, 100],
  SPACESHIPS: [true, true, false, true, false],
  WHITELIST_ENABLED: false,
  START_PAUSED: false,
  RANDOM_ARTIFACTS: true,
  ADMIN_PLANETS: [
    {
      x: -5500,
      y: 0,
      level: 3,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: true,
    },
    {
      x: 5500,
      y: 0,
      level: 3,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: true,
    },
    {
      x: 0,
      y: 5500,
      level: 3,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: true,
    },
    {
      x: 0,
      y: -5500,
      level: 3,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: true,
    },
    {
      x: 0,
      y: 0,
      level: 4,
      planetType: 4,
      isTargetPlanet: true,
      isSpawnPlanet: false,
    },
  ],
  TOKEN_MINT_END_TIMESTAMP: 1717258179, // SECONDS!,
  NO_ADMIN: false,
  INIT_PLANETS: [],
  WHITELIST: [],
};

const sprint: LobbyInitializers = {
  ADMIN_CAN_ADD_PLANETS: true,
  WORLD_RADIUS_LOCKED: true,
  WORLD_RADIUS_MIN: 5000,
  DISABLE_ZK_CHECKS: false,
  PLANETHASH_KEY: 9348,
  SPACETYPE_KEY: 9349,
  BIOMEBASE_KEY: 9350,
  PERLIN_LENGTH_SCALE: 2048,
  PERLIN_MIRROR_X: false,
  PERLIN_MIRROR_Y: true,
  CLAIM_PLANET_COOLDOWN: 0,
  MAX_NATURAL_PLANET_LEVEL: 4,
  TIME_FACTOR_HUNDREDTHS: 1500,
  PERLIN_THRESHOLD_1: 12,
  PERLIN_THRESHOLD_2: 13,
  PERLIN_THRESHOLD_3: 16,
  INIT_PERLIN_MIN: 0,
  INIT_PERLIN_MAX: 32,
  BIOME_THRESHOLD_1: 14,
  BIOME_THRESHOLD_2: 17,
  SILVER_SCORE_VALUE: 10,
  PLANET_LEVEL_THRESHOLDS: [1048563, 1048562, 1048561, 262128, 65520, 16368, 4080, 1008, 240, 48],
  PLANET_RARITY: 10000,
  PLANET_TRANSFER_ENABLED: true,
  PLANET_TYPE_WEIGHTS: [
    [
      [1, 0, 0, 0, 0],
      [13, 2, 0, 1, 0],
      [13, 2, 0, 1, 0],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [13, 2, 1, 0, 0],
      [12, 2, 1, 1, 0],
      [11, 2, 1, 1, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [10, 4, 2, 0, 0],
      [10, 4, 1, 1, 0],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [11, 4, 1, 0, 0],
      [11, 4, 1, 0, 0],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
    ],
  ],
  ARTIFACT_POINT_VALUES: [0, 100000, 200000, 500000, 20000000, 50000000],
  SPACE_JUNK_ENABLED: false,
  SPACE_JUNK_LIMIT: 1000,
  PLANET_LEVEL_JUNK: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
  ABANDON_SPEED_CHANGE_PERCENT: 150,
  ABANDON_RANGE_CHANGE_PERCENT: 150,
  PHOTOID_ACTIVATION_DELAY: 60,
  SPAWN_RIM_AREA: 0,
  LOCATION_REVEAL_COOLDOWN: 10800,
  CAPTURE_ZONES_ENABLED: false,
  CAPTURE_ZONE_COUNT: 20,
  CAPTURE_ZONE_CHANGE_BLOCK_INTERVAL: 255,
  CAPTURE_ZONE_RADIUS: 1000,
  CAPTURE_ZONE_PLANET_LEVEL_SCORE: [
    0, 0, 250000, 500000, 750000, 1000000, 10000000, 20000000, 50000000, 100000000,
  ],
  CAPTURE_ZONE_HOLD_BLOCKS_REQUIRED: 2048,
  CAPTURE_ZONES_PER_5000_WORLD_RADIUS: 3,
  MANUAL_SPAWN: true,
  TARGET_PLANETS: true,
  CLAIM_VICTORY_ENERGY_PERCENT: 50,
  MODIFIERS: [100, 100, 100, 100, 100, 100, 100, 100],
  SPACESHIPS: [true, true, false, true, true],
  WHITELIST_ENABLED: false,
  START_PAUSED: false,
  RANDOM_ARTIFACTS: true,
  ADMIN_PLANETS: [
    {
      x: -1000,
      y: -4000,
      level: 2,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: true,
    },
    {
      x: 1000,
      y: -4000,
      level: 2,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: true,
    },
    {
      x: 0,
      y: 4600,
      level: 4,
      planetType: 0,
      isTargetPlanet: true,
      isSpawnPlanet: false,
    },
  ],
  TOKEN_MINT_END_TIMESTAMP: 1717258179, // SECONDS!,
  NO_ADMIN: false,
  INIT_PLANETS: [],
  WHITELIST: [],
};

//TODO: Make an actual competitive map
const competitive: LobbyInitializers = {
  ADMIN_CAN_ADD_PLANETS: true,
  WORLD_RADIUS_LOCKED: true,
  WORLD_RADIUS_MIN: 5000,
  DISABLE_ZK_CHECKS: false,
  PLANETHASH_KEY: 9348,
  SPACETYPE_KEY: 9349,
  BIOMEBASE_KEY: 9350,
  PERLIN_LENGTH_SCALE: 2048,
  PERLIN_MIRROR_X: false,
  PERLIN_MIRROR_Y: true,
  CLAIM_PLANET_COOLDOWN: 0,
  MAX_NATURAL_PLANET_LEVEL: 4,
  TIME_FACTOR_HUNDREDTHS: 1500,
  PERLIN_THRESHOLD_1: 12,
  PERLIN_THRESHOLD_2: 13,
  PERLIN_THRESHOLD_3: 16,
  INIT_PERLIN_MIN: 0,
  INIT_PERLIN_MAX: 32,
  BIOME_THRESHOLD_1: 14,
  BIOME_THRESHOLD_2: 17,
  SILVER_SCORE_VALUE: 10,
  PLANET_LEVEL_THRESHOLDS: [1048563, 1048562, 1048561, 262128, 65520, 16368, 4080, 1008, 240, 48],
  PLANET_RARITY: 10000,
  PLANET_TRANSFER_ENABLED: true,
  PLANET_TYPE_WEIGHTS: [
    [
      [1, 0, 0, 0, 0],
      [13, 2, 0, 1, 0],
      [13, 2, 0, 1, 0],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [13, 2, 1, 0, 0],
      [12, 2, 1, 1, 0],
      [11, 2, 1, 1, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [10, 4, 2, 0, 0],
      [10, 4, 1, 1, 0],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [11, 4, 1, 0, 0],
      [11, 4, 1, 0, 0],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
    ],
  ],
  ARTIFACT_POINT_VALUES: [0, 100000, 200000, 500000, 20000000, 50000000],
  SPACE_JUNK_ENABLED: false,
  SPACE_JUNK_LIMIT: 1000,
  PLANET_LEVEL_JUNK: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
  ABANDON_SPEED_CHANGE_PERCENT: 150,
  ABANDON_RANGE_CHANGE_PERCENT: 150,
  PHOTOID_ACTIVATION_DELAY: 60,
  SPAWN_RIM_AREA: 0,
  LOCATION_REVEAL_COOLDOWN: 10800,
  CAPTURE_ZONES_ENABLED: false,
  CAPTURE_ZONE_COUNT: 20,
  CAPTURE_ZONE_CHANGE_BLOCK_INTERVAL: 255,
  CAPTURE_ZONE_RADIUS: 1000,
  CAPTURE_ZONE_PLANET_LEVEL_SCORE: [
    0, 0, 250000, 500000, 750000, 1000000, 10000000, 20000000, 50000000, 100000000,
  ],
  CAPTURE_ZONE_HOLD_BLOCKS_REQUIRED: 2048,
  CAPTURE_ZONES_PER_5000_WORLD_RADIUS: 3,
  MANUAL_SPAWN: true,
  TARGET_PLANETS: true,
  CLAIM_VICTORY_ENERGY_PERCENT: 50,
  MODIFIERS: [100, 100, 100, 100, 100, 100, 100, 100],
  SPACESHIPS: [true, true, false, true, true],
  WHITELIST_ENABLED: false,
  START_PAUSED: false,
  RANDOM_ARTIFACTS: true,
  ADMIN_PLANETS: [
    {
      x: -1000,
      y: -4000,
      level: 2,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: true,
    },
    {
      x: 0,
      y: 4600,
      level: 4,
      planetType: 0,
      isTargetPlanet: true,
      isSpawnPlanet: false,
    },
  ],
  TOKEN_MINT_END_TIMESTAMP: 1682435240778,
  NO_ADMIN: true,
  INIT_PLANETS: [],
  WHITELIST: [],
};

const competitive1: LobbyInitializers = {
  ADMIN_CAN_ADD_PLANETS: true,
  WORLD_RADIUS_LOCKED: true,
  WORLD_RADIUS_MIN: 3000,
  DISABLE_ZK_CHECKS: false,
  PLANETHASH_KEY: 1317,
  SPACETYPE_KEY: 123333,
  BIOMEBASE_KEY: 1319,
  PERLIN_LENGTH_SCALE: 512,
  PERLIN_MIRROR_X: false,
  PERLIN_MIRROR_Y: false,
  CLAIM_PLANET_COOLDOWN: 0,
  MAX_NATURAL_PLANET_LEVEL: 3,
  TIME_FACTOR_HUNDREDTHS: 1000,
  PERLIN_THRESHOLD_1: 11,
  PERLIN_THRESHOLD_2: 15,
  PERLIN_THRESHOLD_3: 19,
  INIT_PERLIN_MIN: 0,
  INIT_PERLIN_MAX: 32,
  BIOME_THRESHOLD_1: 14,
  BIOME_THRESHOLD_2: 17,
  SILVER_SCORE_VALUE: 10,
  PLANET_LEVEL_THRESHOLDS: [16777216, 4194292, 1048561, 262128, 65520, 16368, 4080, 1008, 240, 48],
  PLANET_RARITY: 7000,
  PLANET_TRANSFER_ENABLED: true,
  PLANET_TYPE_WEIGHTS: [
    [
      [1, 0, 0, 0, 0],
      [13, 2, 0, 1, 0],
      [13, 2, 0, 1, 0],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
      [13, 2, 0, 0, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [13, 2, 1, 0, 0],
      [12, 2, 1, 1, 0],
      [11, 2, 1, 1, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
      [12, 2, 1, 0, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [10, 4, 2, 0, 0],
      [10, 4, 1, 1, 0],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
      [8, 4, 1, 2, 1],
    ],
    [
      [1, 0, 0, 0, 0],
      [11, 4, 1, 0, 0],
      [11, 4, 1, 0, 0],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
      [7, 4, 2, 2, 1],
    ],
  ],
  ARTIFACT_POINT_VALUES: [0, 100000, 200000, 500000, 20000000, 50000000],
  SPACE_JUNK_ENABLED: false,
  SPACE_JUNK_LIMIT: 1000,
  PLANET_LEVEL_JUNK: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
  ABANDON_SPEED_CHANGE_PERCENT: 150,
  ABANDON_RANGE_CHANGE_PERCENT: 150,
  PHOTOID_ACTIVATION_DELAY: 60,
  SPAWN_RIM_AREA: 0,
  LOCATION_REVEAL_COOLDOWN: 10800,
  CAPTURE_ZONES_ENABLED: false,
  CAPTURE_ZONE_COUNT: 20,
  CAPTURE_ZONE_CHANGE_BLOCK_INTERVAL: 255,
  CAPTURE_ZONE_RADIUS: 1000,
  CAPTURE_ZONE_PLANET_LEVEL_SCORE: [
    0, 0, 250000, 500000, 750000, 1000000, 10000000, 20000000, 50000000, 100000000,
  ],
  CAPTURE_ZONE_HOLD_BLOCKS_REQUIRED: 2048,
  CAPTURE_ZONES_PER_5000_WORLD_RADIUS: 3,
  MANUAL_SPAWN: true,
  TARGET_PLANETS: true,
  CLAIM_VICTORY_ENERGY_PERCENT: 100,
  MODIFIERS: [100, 100, 100, 100, 75, 100, 100, 100],
  SPACESHIPS: [true, true, true, true, false],
  WHITELIST_ENABLED: false,
  START_PAUSED: false,
  RANDOM_ARTIFACTS: true,
  ADMIN_PLANETS: [
    {
      x: -1668,
      y: -2321,
      level: 3,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: true,
    },
    {
      x: -320,
      y: -1772,
      level: 3,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: false,
    },
    {
      x: 2005,
      y: 1973,
      level: 4,
      planetType: 4,
      isTargetPlanet: true,
      isSpawnPlanet: false,
    },
    {
      x: -1222,
      y: -1363,
      level: 3,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: false,
    },
    {
      x: -263,
      y: -727,
      level: 3,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: false,
    },
    {
      x: -53,
      y: 763,
      level: 3,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: false,
    },
    {
      x: 717,
      y: 1174,
      level: 3,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: false,
    },
    {
      x: 745,
      y: -935,
      level: 3,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: false,
    },
    {
      x: -374,
      y: 157,
      level: 3,
      planetType: 0,
      isTargetPlanet: false,
      isSpawnPlanet: false,
    },

  ],
  TOKEN_MINT_END_TIMESTAMP: 1682435240778,
  NO_ADMIN: true,
  INIT_PLANETS: [],
  WHITELIST: [],
};

export interface StockConfig {
  onePlayerRace: LobbyInitializers,
  fourPlayerBattle: LobbyInitializers,
  sprint: LobbyInitializers,
  competitive: LobbyInitializers,
  competitive1: LobbyInitializers
}
export const stockConfig : StockConfig = {
  onePlayerRace: onePlayerRace,
  fourPlayerBattle: fourPlayerBattle,
  sprint: sprint,
  competitive: competitive,
  competitive1
};
