// API
export const API_ENDPOINT = "https://api.silo.observer";
// export const API_ENDPOINT = "http://localhost:8000";

// Contract Addresses
export const XAI_ADDRESS_ETH_MAINNET = "0xd7C9F0e536dC865Ae858b0C0453Fe76D13c3bEAc";
export const WETH_ADDRESS_ETH_MAINNET = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
export const CRVUSD_ADDRESS_ETH_MAINNET = "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E";

export const DEPLOYMENT_ID_TO_HUMAN_READABLE : {[key: string]: string} = {
  "ethereum-llama": "LLAMA",
  "ethereum-original": "Original",
  "arbitrum-original": "Original",
}

export const SORTABLE_DEPLOYMENT_ID_TO_HUMAN_READABLE : {[key: string]: string} = {
  "a-ethereum-llama": "LLAMA",
  "b-ethereum-original": "Original",
  "c-arbitrum-original": "Original",
}

export const NETWORK_TO_HUMAN_READABLE : {[key: string]: string} = {
  "ethereum": "Ethereum",
  "arbitrum": "Arbitrum",
}

export const TIMESTAMP_TO_DEPLOYMENT_BREAKPOINTS = {
  1660034657: ["ethereum-original"],
  1673287775: ["ethereum-original", "arbitrum-original"],
  1690438799: ["ethereum-original", "arbitrum-original", "ethereum-llama"],
}