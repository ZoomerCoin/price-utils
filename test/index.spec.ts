import { expect, test, describe } from "bun:test";
import { createConfig, fallback, http } from "wagmi";
import {
  arbitrum,
  polygon,
  optimism,
  mainnet,
  bsc,
  base,
  Chain,
} from "wagmi/chains";

import { getPrices, solana } from "../src/index";
const chains: [Chain, ...Chain[]] = [
  mainnet,
  polygon,
  arbitrum,
  optimism,
  bsc,
  base,
];
const wagmiConfig = createConfig({
  chains,
  transports: {
    [mainnet.id]: fallback([
      http("https://eth.llamarpc.com"),
      http("https://eth.api.onfinality.io/public"),
      http("https://eth.drpc.org"),
      http("https://rpc.flashbots.net"),
    ]),
    [polygon.id]: fallback([
      http("https://polygon.llamarpc.com"),
      http("https://polygon.drpc.org"),
      http("https://polygon.blockpi.network/v1/rpc/public"),
    ]),
    [arbitrum.id]: fallback([
      http(`https://arb1.arbitrum.io/rpc`),
      http("https://arbitrum.llamarpc.com"),
      http("https://arbitrum.drpc.org"),
    ]),
    [optimism.id]: fallback([
      http(`https://mainnet.optimism.io`),
      http("https://optimism.llamarpc.com"),
    ]),
    [bsc.id]: fallback([
      http(`https://bsc-dataseed.binance.org`),
      http(`https://bsc-dataseed1.defibit.io`),
      http(`https://bsc-dataseed1.ninicoin.io`),
      http(`https://bsc-dataseed2.defibit.io`),
      http(`https://bsc-dataseed3.defibit.io`),
      http(`https://bsc-dataseed4.defibit.io`),
      http(`https://bsc-dataseed2.ninicoin.io`),
      http(`https://bsc-dataseed3.ninicoin.io`),
    ]),
    [base.id]: fallback([
      http("https://mainnet.base.org"),
      http("https://base.llamarpc.com"),
    ]),
  },
});

describe("integration test", () => {
  test("should work for all chains", async () => {
    const prices = await getPrices(wagmiConfig);
    expect(prices).toBeDefined();
    expect(prices.tokens.length).toBe(chains.length + 1); // add 1 for solana
    chains.forEach((chain) => {
      expect(
        prices.tokens.find((token) => token.chain.id === chain.id)
      ).toBeDefined();
    });
  });

  test("should filter chains", async () => {
    const _chains = [mainnet.id, base.id, solana.id];
    const prices = await getPrices(wagmiConfig, _chains);
    expect(prices).toBeDefined();
    expect(prices.tokens.length).toBe(_chains.length);
    _chains.forEach((chain) => {
      expect(
        prices.tokens.find((token) => token.chain.id === chain)
      ).toBeDefined();
    });
  });
});
