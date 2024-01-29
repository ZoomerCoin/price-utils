// fallback values
export const nativePrices: Record<string, number> = {
  ethereum: 2350.22,
  "matic-network": 1.01,
  solana: 98,
  binancecoin: 304.33,
};

export const updateNative = async () => {
  console.log("Updating native prices...");
  for (const native of Object.keys(nativePrices)) {
    try {
      const priceFetch = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${native}&vs_currencies=usd`
      );
      const price = await priceFetch.json();
      nativePrices[native] = (price as any)[native]["usd"];
    } catch (e) {
      console.error("Error fetching native price: ", e);
    }
  }
  console.log("Updated native prices: ", nativePrices);
};

let timer: Timer;
export const startNativePriceUpdater = async (
  updateInterval = 1000 * 60 * 5
) => {
  await updateNative();
  timer = setInterval(async () => {
    await updateNative();
  }, updateInterval);
};

export const stopNativePriceUpdater = () => {
  clearInterval(timer);
};
