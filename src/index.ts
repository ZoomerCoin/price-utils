import BigNumber from "bignumber.js";
import { Config } from "wagmi";

import { nativePrices } from "./native";
import {
  PricedMultichainToken,
  TokenWithPrice,
  ZOOMER_MULTICHAIN,
  getPrice,
} from "./prices";

export * from "./prices";
export * from "./native";

export const getPrices = async (
  wagmiConfig: Config
): Promise<PricedMultichainToken> => {
  let nonCanonicalSupply = 0;
  const pricedTokens: TokenWithPrice[] = await Promise.all(
    ZOOMER_MULTICHAIN.tokens.map(async (token): Promise<TokenWithPrice> => {
      const {
        price,
        supply: chainSupply,
        liquidity,
        volume24h,
        priceChange24h,
      } = await getPrice(token, wagmiConfig);
      const pctOfSupply = new BigNumber(chainSupply.toString())
        .dividedBy(new BigNumber(ZOOMER_MULTICHAIN.totalSupply.toString()))
        .multipliedBy(100)
        .toNumber();

      if (!token.isCanonical) {
        nonCanonicalSupply += pctOfSupply;
      }
      return {
        ...token,
        price,
        pctOfSupply: Number(pctOfSupply),
        chainSupply: Number(chainSupply),
        liquidity,
        volume24h,
        priceChange24h,
      };
    })
  );
  const canonicalToken = pricedTokens.find((token) => token.isCanonical);
  if (canonicalToken) {
    canonicalToken.pctOfSupply = 100 - nonCanonicalSupply;
  }
  const avgPrice = pricedTokens
    .reduce((acc, curr) => {
      return acc.plus(curr.price);
    }, new BigNumber(0))
    .dividedBy(pricedTokens.length);

  pricedTokens.forEach((token) => {
    token.pctDeviation = token.price
      .minus(avgPrice)
      .dividedBy(avgPrice)
      .multipliedBy(100)
      .toNumber();
  });

  pricedTokens.forEach((token) => {
    console.log(
      `Token: ${token.address}
      Price: ${token.price}
      Chain: ${token.chain.name}
      Deviation: ${token.pctDeviation}
      Supply: ${token.chainSupply}
      Pct of Supply: ${token.pctOfSupply}
      Liquidity: ${token.liquidity}
      Volume 24h: ${token.volume24h}
      Price Change 24h: ${token.priceChange24h}`
    );
  });

  const multi: PricedMultichainToken = {
    name: ZOOMER_MULTICHAIN.name,
    symbol: ZOOMER_MULTICHAIN.symbol,
    totalSupply: ZOOMER_MULTICHAIN.totalSupply,
    avgPrice: avgPrice,
    marketCap: avgPrice
      .times(ZOOMER_MULTICHAIN.totalSupply)
      .toNumber()
      .toLocaleString()
      .split(".")[0],
    tokens: pricedTokens,
  };
  return multi;
};
