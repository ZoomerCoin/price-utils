import { Token, WETH9, CurrencyAmount } from "@uniswap/sdk-core";
import { Pair, Route } from "@uniswap/v2-sdk";
import BigNumber from "bignumber.js";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { LIQUIDITY_STATE_LAYOUT_V4 } from "@raydium-io/raydium-sdk";
import { OpenOrders } from "@project-serum/serum";
import { FeeAmount, computePoolAddress, tickToPrice } from "@uniswap/v3-sdk";
import { ERC20Token, WBNB } from "@pancakeswap/sdk";
import type { Config } from "wagmi";
import { arbitrum, bsc, mainnet, optimism, polygon } from "viem/chains";

import {
  readErc20TotalSupply,
  readPairGetReserves,
  readPancakeV3PoolObserve,
  readUniV3PoolObserve,
} from "./generated";
import { Address, Chain } from "viem";
import {
  SERUM_OPENBOOK_PROGRAM_ID,
  UNIV3_POOL_FACTORY_CONTRACT_ADDRESS,
} from "./constants";

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
      dex: "univ2",
      nativeAssetId: "ethereum",
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
      dex: "univ3",
      nativeAssetId: "matic-network",
      feeAmount: FeeAmount.HIGH,
      dexScreener:
        "https://dexscreener.com/polygon/0xa8939565dbd6f352cc2bb74ad5da60273b8aa1f3",
      dexTools:
        "https://www.dextools.io/app/en/polygon/pair-explorer/0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
      buy: "https://app.uniswap.org/#/tokens/polygon/0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
    },
    {
      chain: arbitrum,
      address: "0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
      decimals: 18,
      dex: "univ3",
      nativeAssetId: "ethereum",
      feeAmount: FeeAmount.MEDIUM,
      dexScreener:
        "https://dexscreener.com/arbitrum/0xe9de3a685747f48a01a006a89c9e3577c5c8ff8c",
      dexTools:
        "https://www.dextools.io/app/en/arbitrum/pair-explorer/0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
      buy: "https://app.uniswap.org/#/tokens/arbitrum/0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
    },
    {
      chain: optimism,
      address: "0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
      decimals: 18,
      dex: "univ3",
      nativeAssetId: "ethereum",
      feeAmount: FeeAmount.MEDIUM,
      dexScreener:
        "https://dexscreener.com/optimism/0x13c02baeb85a3ee2fe961bba2ea2890e486e1bc2",
      dexTools:
        "https://www.dextools.io/app/en/optimism/pair-explorer/0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
      buy: "https://app.uniswap.org/#/tokens/optimism/0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
    },
    {
      chain: solana,
      address: "nBZEcHSG771mRbi4y2sSgKjfDUH8jsM2Eo5fNcASLeU",
      decimals: 8,
      dex: "raydium",
      nativeAssetId: "solana",
      dexScreener:
        "https://dexscreener.com/solana/ce47qs8rckspfv6bubejhslkkuuvrvtdhmbm8h5mtira",
      dexTools:
        "https://www.dextools.io/app/en/solana/pair-explorer/Ce47Qs8rcKSPfV6BUbejHsLkKuUVRvtDHmBM8h5mtirA",
      buy: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=nBZEcHSG771mRbi4y2sSgKjfDUH8jsM2Eo5fNcASLeU&fixed=in",
      ammId: "Ce47Qs8rcKSPfV6BUbejHsLkKuUVRvtDHmBM8h5mtirA",
    },
    {
      chain: bsc,
      address: "0xB962150760F9A3bB00e3E9Cf48297EE20AdA4A33",
      decimals: 18,
      dex: "pancakev3",
      nativeAssetId: "binancecoin",
      dexScreener:
        "https://dexscreener.com/bsc/0x2d272d0ae2fdd6ded99cc5a5bcaa03eaeaa8e51d",
      dexTools:
        "https://www.dextools.io/app/en/bnb/pair-explorer/0x2d272d0ae2fdd6ded99cc5a5bcaa03eaeaa8e51d",
      buy: "https://pancakeswap.finance/swap?outputCurrency=0xb962150760f9a3bb00e3e9cf48297ee20ada4a33",
      poolAddress: "0x2D272d0ae2fDd6dEd99Cc5A5bcaa03eAeAA8E51d",
      feeAmount: FeeAmount.HIGH,
    },
  ],
};

export type Dex = "univ2" | "univ3" | "raydium" | "pancakev3";

export type TokenConfig = {
  chain: Chain;
  address: string;
  decimals: number;
  dex: Dex;
  nativeAssetId: string;
  dexScreener: string;
  dexTools: string;
  buy: string;
  feeAmount?: FeeAmount;
  isCanonical?: boolean;
  ammId?: string;
  poolAddress?: Address;
};

export const getPrice = async (
  token: TokenConfig,
  nativeUsd: number,
  wagmiConfig: Config
): Promise<{ price: BigNumber; supply: bigint }> => {
  switch (token.dex) {
    case "univ2":
      return getUniv2Price(token, nativeUsd, wagmiConfig);
    case "univ3":
      return getUniV3Price(token, nativeUsd, wagmiConfig);
    case "pancakev3":
      return getPancakeV3Price(token, nativeUsd, wagmiConfig);
    case "raydium":
      return getRaydiumPrice(token, nativeUsd, wagmiConfig);
  }
};

const getUniv2Price = async (
  token: TokenConfig,
  nativeUsdPrice: number,
  wagmiConfig: Config
): Promise<{ price: BigNumber; supply: bigint }> => {
  const ZOOMER = new Token(token.chain.id, token.address, token.decimals);
  const pairAddress = Pair.getAddress(ZOOMER, WETH9[ZOOMER.chainId]);

  const reserves = await readPairGetReserves(wagmiConfig, {
    address: pairAddress as Address,
  });
  const [reserve0, reserve1] = reserves;

  const tokens = [ZOOMER, WETH9[ZOOMER.chainId]];
  const [token0, token1] = tokens[0].sortsBefore(tokens[1])
    ? tokens
    : [tokens[1], tokens[0]];

  const pair = new Pair(
    CurrencyAmount.fromRawAmount(token0, reserve0.toString()),
    CurrencyAmount.fromRawAmount(token1, reserve1.toString())
  );

  const route = new Route([pair], WETH9[ZOOMER.chainId], ZOOMER);
  const price2 = route.midPrice.invert().toSignificant(6);
  const price = new BigNumber(price2).times(nativeUsdPrice);

  const supply = await getSupplyEvm(token, wagmiConfig);
  return { price, supply };
};

const getUniV3Price = async (
  token: TokenConfig,
  nativeUsdPrice: number,
  wagmiConfig: Config
): Promise<{ price: BigNumber; supply: bigint }> => {
  const zoomer = new Token(
    token.chain.id,
    token.address,
    token.decimals,
    "ZOOMER",
    "ZoomerCoin"
  );

  if (!token.feeAmount) {
    throw new Error("Fee amount not set");
  }
  const currentPoolAddress = computePoolAddress({
    factoryAddress: UNIV3_POOL_FACTORY_CONTRACT_ADDRESS,
    tokenA: WETH9[token.chain.id],
    tokenB: zoomer,
    fee: token.feeAmount,
  }) as Address;

  const timestamps = [0, 1];
  const [tickCumulatives, secondsPerLiquidityCumulatives] =
    await readUniV3PoolObserve(wagmiConfig, {
      chainId: token.chain.id as any,
      address: currentPoolAddress,
      args: [timestamps],
    });

  const observations = timestamps.map((time, i) => {
    return {
      secondsAgo: time,
      tickCumulative: BigInt(tickCumulatives[i]),
      secondsPerLiquidityCumulativeX128: BigInt(
        secondsPerLiquidityCumulatives[i]
      ),
    };
  });
  const diffTickCumulative =
    observations[0].tickCumulative - observations[1].tickCumulative;
  const secondsBetween = 1n;

  const averageTick = diffTickCumulative / secondsBetween;
  const TWAP = tickToPrice(
    zoomer,
    WETH9[token.chain.id],
    Number(averageTick.toString())
  );
  const price = new BigNumber(TWAP.toSignificant(6)).multipliedBy(
    nativeUsdPrice
  );

  const supply = await getSupplyEvm(token, wagmiConfig);

  return { price, supply };
};

const getPancakeV3Price = async (
  token: TokenConfig,
  nativeUsdPrice: number,
  wagmiConfig: Config
): Promise<{ price: BigNumber; supply: bigint }> => {
  const zoomer = new ERC20Token(
    token.chain.id,
    token.address as Address,
    token.decimals,
    "ZOOMER",
    "ZoomerCoin"
  );

  if (!token.feeAmount) {
    throw new Error("Fee amount not set");
  }

  if (!token.poolAddress) {
    throw new Error("Pool address not set");
  }

  const timestamps = [0, 1];
  const [tickCumulatives, secondsPerLiquidityCumulatives] =
    await readPancakeV3PoolObserve(wagmiConfig, {
      chainId: token.chain.id as any,
      address: token.poolAddress,
      args: [timestamps],
    });

  const observations = timestamps.map((time, i) => {
    return {
      secondsAgo: time,
      tickCumulative: BigInt(tickCumulatives[i]),
      secondsPerLiquidityCumulativeX128: BigInt(
        secondsPerLiquidityCumulatives[i]
      ),
    };
  });
  const diffTickCumulative =
    observations[0].tickCumulative - observations[1].tickCumulative;
  const secondsBetween = 1n;

  const averageTick = diffTickCumulative / secondsBetween;
  const TWAP = tickToPrice(
    zoomer,
    WBNB[token.chain.id as keyof typeof WBNB],
    Number(averageTick.toString())
  );
  const price = new BigNumber(TWAP.toSignificant(6)).multipliedBy(
    nativeUsdPrice
  );

  const supply = await getSupplyEvm(token, wagmiConfig);

  return { price, supply };
};

const getRaydiumPrice = async (
  token: TokenConfig,
  nativeUsdPrice: number,
  _wagmiConfig: Config
): Promise<{ price: BigNumber; supply: bigint }> => {
  if (!token.ammId) {
    throw new Error("AMM ID not set");
  }

  // code from https://github.com/raydium-io/raydium-sdk
  let connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
  const info = await connection.getAccountInfo(new PublicKey(token.ammId));
  if (!info) {
    throw new Error("Failed to find pool");
  }
  const poolState = LIQUIDITY_STATE_LAYOUT_V4.decode(info.data);
  const openOrders = await OpenOrders.load(
    connection,
    poolState.openOrders,
    new PublicKey(SERUM_OPENBOOK_PROGRAM_ID) // OPENBOOK_PROGRAM_ID(marketProgramId)
  );

  const baseDecimal = 10 ** poolState.baseDecimal.toNumber(); // e.g. 10 ^ 6
  const quoteDecimal = 10 ** poolState.quoteDecimal.toNumber();

  const baseTokenAmount = await connection.getTokenAccountBalance(
    poolState.baseVault
  );
  const quoteTokenAmount = await connection.getTokenAccountBalance(
    poolState.quoteVault
  );

  const basePnl = poolState.baseNeedTakePnl.toNumber() / baseDecimal;
  const quotePnl = poolState.quoteNeedTakePnl.toNumber() / quoteDecimal;

  const openOrdersBaseTokenTotal =
    openOrders.baseTokenTotal.toNumber() / baseDecimal;
  const openOrdersQuoteTokenTotal =
    openOrders.quoteTokenTotal.toNumber() / quoteDecimal;

  const base =
    (baseTokenAmount.value?.uiAmount || 0) + openOrdersBaseTokenTotal - basePnl;
  const quote =
    (quoteTokenAmount.value?.uiAmount || 0) +
    openOrdersQuoteTokenTotal -
    quotePnl;

  const baseInQuote = new BigNumber(base).dividedBy(quote);
  const price = baseInQuote.multipliedBy(nativeUsdPrice);

  const supply = await getSupplySolana(connection, token);

  return { price, supply };
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
