import { expect, test, describe } from "bun:test";
import { createConfig, fallback, http } from "wagmi";
import { arbitrum, polygon, optimism, mainnet, bsc, base } from "wagmi/chains";

import { getPrices, updateNative } from "../src/index";

const wagmiConfig = createConfig({
  chains: [mainnet, polygon, arbitrum, optimism, bsc, base],
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
  test("should pass", async () => {
    const prices = await getPrices(wagmiConfig);
    console.log("prices: ", { ...prices, tokens: [] });
    expect(prices).toBeDefined();
  });
});
