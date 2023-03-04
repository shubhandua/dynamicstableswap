import { hexlify } from "@ethersproject/bytes"

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  // RINKEBY = 4,
  // GÖRLI = 5,
  // KOVAN = 42,
  TEST_SIDE_CHAIN = 11,
  HARDHAT = 31337,
  ARBITRUM = 42161,
  OPTIMISM = 10,
  FANTOM = 250,
  EVMOS = 9001,
  EVMOS_TESTNET = 9000,
  KAVA_TESTNET = 2221,
  KAVA = 2222,
  AURORA = 1313161555,
  GOERLI = 5,
  MANTLE = 5001,
  NEON = 245022926,
  SCROLL = 534353,
  SEPOLIA = 11155111,
}

export const NETWORK_LABEL: Partial<Record<ChainId, string>> = {
  [ChainId.MAINNET]: "Ethereum",
  [ChainId.ARBITRUM]: "Arbitrum",
  [ChainId.OPTIMISM]: "Optimism",
  [ChainId.FANTOM]: "Fantom",
  [ChainId.ROPSTEN]: "Ropsten",
  [ChainId.EVMOS]: "Evmos",
  [ChainId.EVMOS_TESTNET]: "Evmos Testnet",
  [ChainId.KAVA_TESTNET]: "Kava Testnet",
  [ChainId.KAVA]: "Kava",
  [ChainId.HARDHAT]: "Hardhat 👷🏼‍♂️",
  [ChainId.AURORA]: "Aurora testnet",
  [ChainId.GOERLI]: "Goerli",
  [ChainId.MANTLE]: "Mantle",
  [ChainId.NEON]: "Neon EVM",
  [ChainId.SCROLL]: "Scroll L2 Alpha",
  [ChainId.SEPOLIA]: "Sepolia",
}

// TODO: figure out better way of representing non-erc20 native tokens
export const NETWORK_NATIVE_TOKENS: Record<ChainId, string> = {
  [ChainId.MAINNET]: "ETH",
  [ChainId.ARBITRUM]: "ETH",
  [ChainId.OPTIMISM]: "ETH",
  [ChainId.FANTOM]: "FTM",
  [ChainId.ROPSTEN]: "ETH",
  [ChainId.EVMOS]: "EVMOS",
  [ChainId.EVMOS_TESTNET]: "tEVMOS",
  [ChainId.KAVA_TESTNET]: "KAVA",
  [ChainId.KAVA]: "KAVA",
  [ChainId.HARDHAT]: "ETH",
  [ChainId.TEST_SIDE_CHAIN]: "ETH",
  [ChainId.AURORA]: "ETH",
  [ChainId.GOERLI]: "ETH",
  [ChainId.MANTLE]: "MNTL",
  [ChainId.NEON]: "NEON",
  [ChainId.SCROLL]: "ETH",
  [ChainId.SEPOLIA]: "ETH",
}
export const COINGECKO_PLATFORM_ID: Record<ChainId, string | null> = {
  [ChainId.MAINNET]: "ethereum",
  [ChainId.ARBITRUM]: "arbitrum-one",
  [ChainId.OPTIMISM]: "optimistic-ethereum",
  [ChainId.FANTOM]: "fantom",
  [ChainId.ROPSTEN]: null,
  [ChainId.EVMOS]: "evmos",
  [ChainId.EVMOS_TESTNET]: null,
  [ChainId.KAVA_TESTNET]: null,
  [ChainId.KAVA]: "kava",
  [ChainId.HARDHAT]: null,
  [ChainId.TEST_SIDE_CHAIN]: null,
  [ChainId.AURORA]: "aurora",
  [ChainId.AURORA]: null,
  [ChainId.GOERLI]: null,
  [ChainId.MANTLE]: null,
  [ChainId.NEON]: null,
  [ChainId.SCROLL]: null,
  [ChainId.SEPOLIA]: null,
}

export type SupportedNetwork = {
  chainId: string
  chainName: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls: string[]
  blockExplorerUrls: string[]
}

export type SupportedNetworks = Partial<{ [key in ChainId]: SupportedNetwork }>

const nativeCurrencyEth = {
  name: "Ethereum",
  symbol: "ETH",
  decimals: 18,
}
// refer to https://github.com/sushiswap/sushiswap-interface/blob/canary/src/modals/NetworkModal/index.tsx#L13
export const SUPPORTED_NETWORKS: SupportedNetworks = {
  [ChainId.MAINNET]: {
    chainId: "0x1",
    chainName: "Ethereum",
    nativeCurrency: nativeCurrencyEth,
    rpcUrls: ["https://mainnet.infura.io/v3"],
    blockExplorerUrls: ["https://etherscan.com"],
  },
  [ChainId.ARBITRUM]: {
    chainId: "0xA4B1",
    chainName: "Arbitrum",
    nativeCurrency: nativeCurrencyEth,
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://mainnet-arb-explorer.netlify.app"],
  },
  [ChainId.OPTIMISM]: {
    chainId: "0xA",
    chainName: "Optimism",
    nativeCurrency: nativeCurrencyEth,
    rpcUrls: ["https://mainnet.optimism.io"],
    blockExplorerUrls: ["https://optimistic.etherscan.io"],
  },
  [ChainId.FANTOM]: {
    chainId: "0xFA",
    chainName: "Fantom",
    nativeCurrency: {
      name: "Fantom",
      symbol: "FTM",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/fantom/"],
    blockExplorerUrls: ["https://ftmscan.com"],
  },
  [ChainId.EVMOS]: {
    chainId: hexlify(9001),
    chainName: "Evmos",
    nativeCurrency: {
      name: "Evmos",
      symbol: "EVMOS",
      decimals: 18,
    },
    rpcUrls: ["https://eth.bd.evmos.org:8545"],
    blockExplorerUrls: ["https://evm.evmos.org"],
  },
  [ChainId.KAVA]: {
    chainId: "0x8AE", // hexlify doesn't work as expected for this number.
    chainName: "Kava",
    nativeCurrency: {
      name: "Kava",
      symbol: "KAVA",
      decimals: 18,
    },
    rpcUrls: ["https://evm.kava.io"],
    blockExplorerUrls: ["https://explorer.kava.io"],
  },
  [ChainId.AURORA]: {
    chainId: "0x4E454153",
    chainName: "Aurora Testnet",
    nativeCurrency: nativeCurrencyEth,
    rpcUrls: ["https://testnet.aurora.dev"],
    blockExplorerUrls: ["https://explorer.testnet.aurora.dev"],
  },
  [ChainId.GOERLI]: {
    chainId: "0x5",
    chainName: "goerli",
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    rpcUrls: ["https://goerli.infura.io/v3/e1d8c78f9f6f487f935f7a41e7e9d33a"],
    blockExplorerUrls: ["https://evm.evmos.dev"],
  },
  [ChainId.MANTLE]: {
    chainId: "0x1389",
    chainName: "Mantle Testnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.testnet.mantle.xyz"],
    blockExplorerUrls: ["https://evm.evmos.dev"],
  },
  [ChainId.NEON]: {
    chainId: "0xE9AC0CE",
    chainName: "Neon EVM Devnet",
    nativeCurrency: {
      name: "NEON",
      symbol: "NEON",
      decimals: 18,
    },
    rpcUrls: ["https://devnet.neonevm.org"],
    blockExplorerUrls: ["https://evm.evmos.dev"],
  },
  [ChainId.SCROLL]: {
    chainId: "0x82751",
    chainName: "Scroll L2 Alpha",
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    rpcUrls: ["https://alpha-rpc.scroll.io/l2"],
    blockExplorerUrls: ["https://evm.evmos.dev"],
  },
  [ChainId.SEPOLIA]: {
    chainId: "0xAA36A7",
    chainName: "Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.infura.io/v3/e1d8c78f9f6f487f935f7a41e7e9d33a"],
    blockExplorerUrls: ["https://evm.evmos.dev"],
  },
}

export const DEV_SUPPORTED_NETWORKS: SupportedNetworks = {
  ...SUPPORTED_NETWORKS,
  [ChainId.EVMOS_TESTNET]: {
    chainId: hexlify(9000),
    chainName: "Evmos Testnet",
    nativeCurrency: {
      name: "Evmos",
      symbol: "tEVMOS",
      decimals: 18,
    },
    rpcUrls: ["https://eth.bd.evmos.dev:8545"],
    blockExplorerUrls: ["https://evm.evmos.dev"],
  },
  [ChainId.KAVA_TESTNET]: {
    chainId: "0x8AD",
    chainName: "Kava Testnet",
    nativeCurrency: {
      name: "Kava",
      symbol: "KAVA",
      decimals: 18,
    },
    rpcUrls: ["https://evm.testnet.kava.io"],
    blockExplorerUrls: ["https://explorer.evm-alpha.kava.io"],
  },
}
