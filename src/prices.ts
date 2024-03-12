import BigNumber from "bignumber.js";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { FeeAmount } from "@uniswap/v3-sdk";
import type { Config } from "wagmi";
import { arbitrum, base, bsc, mainnet, optimism, polygon } from "viem/chains";

import { readErc20TotalSupply } from "./generated";
import { Address, Chain } from "viem";

export const solana: Chain = {
  id: 0,
  name: "Solana",
  nativeCurrency: {
    decimals: 8,
    name: "Solana",
    symbol: "SOL",
  },
  rpcUrls: {
    default: {
      http: ["https://api.mainnet-beta.solana.com"],
    },
  },
};

export type TokenWithPrice = TokenConfig & {
  price: BigNumber;
  pctDeviation?: number;
  chainSupply: number;
  pctOfSupply: number;
  liquidity: number;
  volume24h: number;
  priceChange24h: number;
};

export type PricedMultichainToken = Omit<MultichainToken, "tokens"> & {
  avgPrice: BigNumber;
  marketCap: string;
  tokens: TokenWithPrice[];
};
export type MultichainToken = {
  name: string;
  symbol: string;
  tokens: TokenConfig[];
  totalSupply: number;
};

export const ZOOMER_MULTICHAIN: MultichainToken = {
  name: "ZoomerCoin",
  symbol: "ZOOMER",
  totalSupply: 69000000000,
  tokens: [
    {
      chain: mainnet,
      address: "0x0D505C03d30e65f6e9b4Ef88855a47a89e4b7676",
      decimals: 18,
      dexScreener:
        "https://dexscreener.com/ethereum/0xc2c701110de2b9503e98619d9c9e3017877b0f72",
      dexTools:
        "https://www.dextools.io/app/en/ether/pair-explorer/0xc2c701110de2b9503e98619d9c9e3017877b0f72",
      buy: "https://app.uniswap.org/#/tokens/ethereum/0x0d505c03d30e65f6e9b4ef88855a47a89e4b7676",
      isCanonical: true,
    },
    {
      chain: polygon,
      address: "0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
      decimals: 18,
      dexScreener:
        "https://dexscreener.com/polygon/0xa8939565dbd6f352cc2bb74ad5da60273b8aa1f3",
      dexTools:
        "https://www.dextools.io/app/en/polygon/pair-explorer/0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
      buy: "https://app.uniswap.org/#/tokens/polygon/0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
      isCanonical: false,
    },
    {
      chain: arbitrum,
      address: "0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
      dexScreener:
        "https://dexscreener.com/arbitrum/0x155b2cf53cf48baace6983d772195548851cd79f",
      dexTools:
        "https://www.dextools.io/app/en/arbitrum/pair-explorer/0x155b2cf53cf48baace6983d772195548851cd79f",
      buy: "https://app.ramses.exchange/swap?outputCurrency=0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
      isCanonical: false,
      decimals: 18,
    },
    {
      chain: optimism,
      address: "0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
      dexScreener:
        "https://dexscreener.com/optimism/0x24cad669e6fb30196ebfb6a8eaaedf2359e82b6a",
      dexTools:
        "https://www.dextools.io/app/en/optimism/pair-explorer/0x24cad669e6fb30196ebfb6a8eaaedf2359e82b6a",
      buy: "https://velodrome.finance/swap?from=0x9560e827af36c94d2ac33a39bce1fe78631088db&to=0xb962150760f9a3bb00e3e9cf48297ee20ada4a33",
      isCanonical: false,
      decimals: 18,
    },
    {
      chain: solana,
      address: "nBZEcHSG771mRbi4y2sSgKjfDUH8jsM2Eo5fNcASLeU",
      dexScreener:
        "https://dexscreener.com/solana/ce47qs8rckspfv6bubejhslkkuuvrvtdhmbm8h5mtira",
      dexTools:
        "https://www.dextools.io/app/en/solana/pair-explorer/Ce47Qs8rcKSPfV6BUbejHsLkKuUVRvtDHmBM8h5mtirA",
      buy: "https://jup.ag/swap/SOL-ZOOMER_nBZEcHSG771mRbi4y2sSgKjfDUH8jsM2Eo5fNcASLeU",
      isCanonical: false,
      decimals: 8,
    },
    {
      chain: bsc,
      address: "0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
      dexScreener:
        "https://dexscreener.com/bsc/0x32b2136d62d68b41a6228ec0bc5f8a1cf141bee5",
      dexTools:
        "https://www.dextools.io/app/en/bnb/pair-explorer/0x32b2136d62d68b41a6228ec0bc5f8a1cf141bee5",
      buy: "https://thena.fi/swap?inputCurrency=BNB&outputCurrency=0xb962150760f9a3bb00e3e9cf48297ee20ada4a33",
      isCanonical: false,
      decimals: 18,
    },
    {
      chain: base,
      address: "0xD1dB4851bcF5B41442cAA32025Ce0Afe6B8EabC2",
      dexScreener:
        "https://dexscreener.com/base/0x45d8c7bf5be7c99d39cdc724f60497bd79546458",
      dexTools:
        "https://www.dextools.io/app/en/base/pair-explorer/0x45d8c7bf5be7c99d39cdc724f60497bd79546458?t=1709214216013",
      buy: "https://aerodrome.finance/swap?from=0x940181a94a35a4569e4529a3cdfb74e38fd98631&to=0xd1db4851bcf5b41442caa32025ce0afe6b8eabc2",
      isCanonical: false,
      decimals: 18,
    },
  ],
};

export type Dex = "univ2" | "univ3" | "raydium" | "pancakev3" | "aero";

export type TokenConfig = {
  chain: Chain;
  address: string;
  dexScreener: string;
  dexTools: string;
  buy: string;
  isCanonical: boolean;
  decimals: number;
};

export const getPrice = async (
  token: TokenConfig,
  wagmiConfig: Config
): Promise<{
  price: BigNumber;
  supply: bigint;
  volume24h: number;
  priceChange24h: number;
  liquidity: number;
}> => {
  const _price = await fetch(
    `https://api.dexscreener.com/latest/dex/pairs/${token.dexScreener.split("/").slice(-2).join("/")}`
  );
  const price = await _price.json();
  let supply: bigint;
  if (token.chain.id === solana.id) {
    let connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
    supply = await getSupplySolana(connection, token);
  } else {
    supply = await getSupplyEvm(token, wagmiConfig);
  }
  return {
    price: new BigNumber(price.pair.priceUsd),
    supply,
    liquidity: price.pair.liquidity.usd,
    priceChange24h: price.pair.priceChange.h24,
    volume24h: price.pair.volume.h24,
  };
};

const getSupplyEvm = async (
  token: TokenConfig,
  wagmiConfig: Config
): Promise<bigint> => {
  const supply = await readErc20TotalSupply(wagmiConfig, {
    address: token.address as Address,
    chainId: token.chain.id as any,
  });
  const normalizedSupply = supply / 10n ** BigInt(token.decimals);
  return normalizedSupply;
};

const getSupplySolana = async (
  connection: Connection,
  token: TokenConfig
): Promise<bigint> => {
  const supply = await connection.getTokenSupply(new PublicKey(token.address));
  return BigInt(supply.value.amount) / 10n ** BigInt(token.decimals);
};
