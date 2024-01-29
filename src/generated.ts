import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from "wagmi/codegen";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pair
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pairAbi = [
  {
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount0",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "amount1",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "to", internalType: "address", type: "address", indexed: true },
    ],
    name: "Burn",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount0",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "amount1",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Mint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount0In",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "amount1In",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "amount0Out",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "amount1Out",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "to", internalType: "address", type: "address", indexed: true },
    ],
    name: "Swap",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "reserve0",
        internalType: "uint112",
        type: "uint112",
        indexed: false,
      },
      {
        name: "reserve1",
        internalType: "uint112",
        type: "uint112",
        indexed: false,
      },
    ],
    name: "Sync",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "to", internalType: "address", type: "address" }],
    name: "burn",
    outputs: [
      { name: "amount0", internalType: "uint256", type: "uint256" },
      { name: "amount1", internalType: "uint256", type: "uint256" },
    ],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "factory",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getReserves",
    outputs: [
      { name: "_reserve0", internalType: "uint112", type: "uint112" },
      { name: "_reserve1", internalType: "uint112", type: "uint112" },
      { name: "_blockTimestampLast", internalType: "uint32", type: "uint32" },
    ],
  },
  {
    constant: false,
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "_token0", internalType: "address", type: "address" },
      { name: "_token1", internalType: "address", type: "address" },
    ],
    name: "initialize",
    outputs: [],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "kLast",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "to", internalType: "address", type: "address" }],
    name: "mint",
    outputs: [{ name: "liquidity", internalType: "uint256", type: "uint256" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "nonces",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "deadline", internalType: "uint256", type: "uint256" },
      { name: "v", internalType: "uint8", type: "uint8" },
      { name: "r", internalType: "bytes32", type: "bytes32" },
      { name: "s", internalType: "bytes32", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "to", internalType: "address", type: "address" }],
    name: "skim",
    outputs: [],
  },
  {
    constant: false,
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "amount0Out", internalType: "uint256", type: "uint256" },
      { name: "amount1Out", internalType: "uint256", type: "uint256" },
      { name: "to", internalType: "address", type: "address" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "swap",
    outputs: [],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "sync",
    outputs: [],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "token0",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "token1",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PancakeV3Pool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pancakeV3PoolAbi = [
  { stateMutability: "nonpayable", type: "constructor", inputs: [] },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tickLower",
        internalType: "int24",
        type: "int24",
        indexed: true,
      },
      {
        name: "tickUpper",
        internalType: "int24",
        type: "int24",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
      {
        name: "amount0",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "amount1",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Burn",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "recipient",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "tickLower",
        internalType: "int24",
        type: "int24",
        indexed: true,
      },
      {
        name: "tickUpper",
        internalType: "int24",
        type: "int24",
        indexed: true,
      },
      {
        name: "amount0",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
      {
        name: "amount1",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
    ],
    name: "Collect",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "recipient",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount0",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
      {
        name: "amount1",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
    ],
    name: "CollectProtocol",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "recipient",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount0",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "amount1",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "paid0",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "paid1",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Flash",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "observationCardinalityNextOld",
        internalType: "uint16",
        type: "uint16",
        indexed: false,
      },
      {
        name: "observationCardinalityNextNew",
        internalType: "uint16",
        type: "uint16",
        indexed: false,
      },
    ],
    name: "IncreaseObservationCardinalityNext",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sqrtPriceX96",
        internalType: "uint160",
        type: "uint160",
        indexed: false,
      },
      { name: "tick", internalType: "int24", type: "int24", indexed: false },
    ],
    name: "Initialize",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tickLower",
        internalType: "int24",
        type: "int24",
        indexed: true,
      },
      {
        name: "tickUpper",
        internalType: "int24",
        type: "int24",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
      {
        name: "amount0",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "amount1",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Mint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "feeProtocol0Old",
        internalType: "uint32",
        type: "uint32",
        indexed: false,
      },
      {
        name: "feeProtocol1Old",
        internalType: "uint32",
        type: "uint32",
        indexed: false,
      },
      {
        name: "feeProtocol0New",
        internalType: "uint32",
        type: "uint32",
        indexed: false,
      },
      {
        name: "feeProtocol1New",
        internalType: "uint32",
        type: "uint32",
        indexed: false,
      },
    ],
    name: "SetFeeProtocol",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "addr",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "SetLmPoolEvent",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "recipient",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount0",
        internalType: "int256",
        type: "int256",
        indexed: false,
      },
      {
        name: "amount1",
        internalType: "int256",
        type: "int256",
        indexed: false,
      },
      {
        name: "sqrtPriceX96",
        internalType: "uint160",
        type: "uint160",
        indexed: false,
      },
      {
        name: "liquidity",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
      { name: "tick", internalType: "int24", type: "int24", indexed: false },
      {
        name: "protocolFeesToken0",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
      {
        name: "protocolFeesToken1",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
    ],
    name: "Swap",
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
      { name: "amount", internalType: "uint128", type: "uint128" },
    ],
    name: "burn",
    outputs: [
      { name: "amount0", internalType: "uint256", type: "uint256" },
      { name: "amount1", internalType: "uint256", type: "uint256" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
      { name: "amount0Requested", internalType: "uint128", type: "uint128" },
      { name: "amount1Requested", internalType: "uint128", type: "uint128" },
    ],
    name: "collect",
    outputs: [
      { name: "amount0", internalType: "uint128", type: "uint128" },
      { name: "amount1", internalType: "uint128", type: "uint128" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "amount0Requested", internalType: "uint128", type: "uint128" },
      { name: "amount1Requested", internalType: "uint128", type: "uint128" },
    ],
    name: "collectProtocol",
    outputs: [
      { name: "amount0", internalType: "uint128", type: "uint128" },
      { name: "amount1", internalType: "uint128", type: "uint128" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "factory",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "fee",
    outputs: [{ name: "", internalType: "uint24", type: "uint24" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "feeGrowthGlobal0X128",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "feeGrowthGlobal1X128",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "amount0", internalType: "uint256", type: "uint256" },
      { name: "amount1", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "flash",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "observationCardinalityNext",
        internalType: "uint16",
        type: "uint16",
      },
    ],
    name: "increaseObservationCardinalityNext",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sqrtPriceX96", internalType: "uint160", type: "uint160" },
    ],
    name: "initialize",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "liquidity",
    outputs: [{ name: "", internalType: "uint128", type: "uint128" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "lmPool",
    outputs: [
      { name: "", internalType: "contract IPancakeV3LmPool", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "maxLiquidityPerTick",
    outputs: [{ name: "", internalType: "uint128", type: "uint128" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
      { name: "amount", internalType: "uint128", type: "uint128" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "mint",
    outputs: [
      { name: "amount0", internalType: "uint256", type: "uint256" },
      { name: "amount1", internalType: "uint256", type: "uint256" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "observations",
    outputs: [
      { name: "blockTimestamp", internalType: "uint32", type: "uint32" },
      { name: "tickCumulative", internalType: "int56", type: "int56" },
      {
        name: "secondsPerLiquidityCumulativeX128",
        internalType: "uint160",
        type: "uint160",
      },
      { name: "initialized", internalType: "bool", type: "bool" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "secondsAgos", internalType: "uint32[]", type: "uint32[]" },
    ],
    name: "observe",
    outputs: [
      { name: "tickCumulatives", internalType: "int56[]", type: "int56[]" },
      {
        name: "secondsPerLiquidityCumulativeX128s",
        internalType: "uint160[]",
        type: "uint160[]",
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    name: "positions",
    outputs: [
      { name: "liquidity", internalType: "uint128", type: "uint128" },
      {
        name: "feeGrowthInside0LastX128",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "feeGrowthInside1LastX128",
        internalType: "uint256",
        type: "uint256",
      },
      { name: "tokensOwed0", internalType: "uint128", type: "uint128" },
      { name: "tokensOwed1", internalType: "uint128", type: "uint128" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "protocolFees",
    outputs: [
      { name: "token0", internalType: "uint128", type: "uint128" },
      { name: "token1", internalType: "uint128", type: "uint128" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "feeProtocol0", internalType: "uint32", type: "uint32" },
      { name: "feeProtocol1", internalType: "uint32", type: "uint32" },
    ],
    name: "setFeeProtocol",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "_lmPool", internalType: "address", type: "address" }],
    name: "setLmPool",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "slot0",
    outputs: [
      { name: "sqrtPriceX96", internalType: "uint160", type: "uint160" },
      { name: "tick", internalType: "int24", type: "int24" },
      { name: "observationIndex", internalType: "uint16", type: "uint16" },
      {
        name: "observationCardinality",
        internalType: "uint16",
        type: "uint16",
      },
      {
        name: "observationCardinalityNext",
        internalType: "uint16",
        type: "uint16",
      },
      { name: "feeProtocol", internalType: "uint32", type: "uint32" },
      { name: "unlocked", internalType: "bool", type: "bool" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
    ],
    name: "snapshotCumulativesInside",
    outputs: [
      { name: "tickCumulativeInside", internalType: "int56", type: "int56" },
      {
        name: "secondsPerLiquidityInsideX128",
        internalType: "uint160",
        type: "uint160",
      },
      { name: "secondsInside", internalType: "uint32", type: "uint32" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "zeroForOne", internalType: "bool", type: "bool" },
      { name: "amountSpecified", internalType: "int256", type: "int256" },
      { name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "swap",
    outputs: [
      { name: "amount0", internalType: "int256", type: "int256" },
      { name: "amount1", internalType: "int256", type: "int256" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "int16", type: "int16" }],
    name: "tickBitmap",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "tickSpacing",
    outputs: [{ name: "", internalType: "int24", type: "int24" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "int24", type: "int24" }],
    name: "ticks",
    outputs: [
      { name: "liquidityGross", internalType: "uint128", type: "uint128" },
      { name: "liquidityNet", internalType: "int128", type: "int128" },
      {
        name: "feeGrowthOutside0X128",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "feeGrowthOutside1X128",
        internalType: "uint256",
        type: "uint256",
      },
      { name: "tickCumulativeOutside", internalType: "int56", type: "int56" },
      {
        name: "secondsPerLiquidityOutsideX128",
        internalType: "uint160",
        type: "uint160",
      },
      { name: "secondsOutside", internalType: "uint32", type: "uint32" },
      { name: "initialized", internalType: "bool", type: "bool" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "token0",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "token1",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UniV3Pool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const uniV3PoolAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tickLower",
        internalType: "int24",
        type: "int24",
        indexed: true,
      },
      {
        name: "tickUpper",
        internalType: "int24",
        type: "int24",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
      {
        name: "amount0",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "amount1",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Burn",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "recipient",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "tickLower",
        internalType: "int24",
        type: "int24",
        indexed: true,
      },
      {
        name: "tickUpper",
        internalType: "int24",
        type: "int24",
        indexed: true,
      },
      {
        name: "amount0",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
      {
        name: "amount1",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
    ],
    name: "Collect",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "recipient",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount0",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
      {
        name: "amount1",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
    ],
    name: "CollectProtocol",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "recipient",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount0",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "amount1",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "paid0",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "paid1",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Flash",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "observationCardinalityNextOld",
        internalType: "uint16",
        type: "uint16",
        indexed: false,
      },
      {
        name: "observationCardinalityNextNew",
        internalType: "uint16",
        type: "uint16",
        indexed: false,
      },
    ],
    name: "IncreaseObservationCardinalityNext",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sqrtPriceX96",
        internalType: "uint160",
        type: "uint160",
        indexed: false,
      },
      { name: "tick", internalType: "int24", type: "int24", indexed: false },
    ],
    name: "Initialize",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tickLower",
        internalType: "int24",
        type: "int24",
        indexed: true,
      },
      {
        name: "tickUpper",
        internalType: "int24",
        type: "int24",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
      {
        name: "amount0",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "amount1",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Mint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "feeProtocol0Old",
        internalType: "uint8",
        type: "uint8",
        indexed: false,
      },
      {
        name: "feeProtocol1Old",
        internalType: "uint8",
        type: "uint8",
        indexed: false,
      },
      {
        name: "feeProtocol0New",
        internalType: "uint8",
        type: "uint8",
        indexed: false,
      },
      {
        name: "feeProtocol1New",
        internalType: "uint8",
        type: "uint8",
        indexed: false,
      },
    ],
    name: "SetFeeProtocol",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "recipient",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount0",
        internalType: "int256",
        type: "int256",
        indexed: false,
      },
      {
        name: "amount1",
        internalType: "int256",
        type: "int256",
        indexed: false,
      },
      {
        name: "sqrtPriceX96",
        internalType: "uint160",
        type: "uint160",
        indexed: false,
      },
      {
        name: "liquidity",
        internalType: "uint128",
        type: "uint128",
        indexed: false,
      },
      { name: "tick", internalType: "int24", type: "int24", indexed: false },
    ],
    name: "Swap",
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
      { name: "amount", internalType: "uint128", type: "uint128" },
    ],
    name: "burn",
    outputs: [
      { name: "amount0", internalType: "uint256", type: "uint256" },
      { name: "amount1", internalType: "uint256", type: "uint256" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
      { name: "amount0Requested", internalType: "uint128", type: "uint128" },
      { name: "amount1Requested", internalType: "uint128", type: "uint128" },
    ],
    name: "collect",
    outputs: [
      { name: "amount0", internalType: "uint128", type: "uint128" },
      { name: "amount1", internalType: "uint128", type: "uint128" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "amount0Requested", internalType: "uint128", type: "uint128" },
      { name: "amount1Requested", internalType: "uint128", type: "uint128" },
    ],
    name: "collectProtocol",
    outputs: [
      { name: "amount0", internalType: "uint128", type: "uint128" },
      { name: "amount1", internalType: "uint128", type: "uint128" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "factory",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "fee",
    outputs: [{ name: "", internalType: "uint24", type: "uint24" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "feeGrowthGlobal0X128",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "feeGrowthGlobal1X128",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "amount0", internalType: "uint256", type: "uint256" },
      { name: "amount1", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "flash",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "observationCardinalityNext",
        internalType: "uint16",
        type: "uint16",
      },
    ],
    name: "increaseObservationCardinalityNext",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sqrtPriceX96", internalType: "uint160", type: "uint160" },
    ],
    name: "initialize",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "liquidity",
    outputs: [{ name: "", internalType: "uint128", type: "uint128" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "maxLiquidityPerTick",
    outputs: [{ name: "", internalType: "uint128", type: "uint128" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
      { name: "amount", internalType: "uint128", type: "uint128" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "mint",
    outputs: [
      { name: "amount0", internalType: "uint256", type: "uint256" },
      { name: "amount1", internalType: "uint256", type: "uint256" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "index", internalType: "uint256", type: "uint256" }],
    name: "observations",
    outputs: [
      { name: "blockTimestamp", internalType: "uint32", type: "uint32" },
      { name: "tickCumulative", internalType: "int56", type: "int56" },
      {
        name: "secondsPerLiquidityCumulativeX128",
        internalType: "uint160",
        type: "uint160",
      },
      { name: "initialized", internalType: "bool", type: "bool" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "secondsAgos", internalType: "uint32[]", type: "uint32[]" },
    ],
    name: "observe",
    outputs: [
      { name: "tickCumulatives", internalType: "int56[]", type: "int56[]" },
      {
        name: "secondsPerLiquidityCumulativeX128s",
        internalType: "uint160[]",
        type: "uint160[]",
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "positions",
    outputs: [
      { name: "_liquidity", internalType: "uint128", type: "uint128" },
      {
        name: "feeGrowthInside0LastX128",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "feeGrowthInside1LastX128",
        internalType: "uint256",
        type: "uint256",
      },
      { name: "tokensOwed0", internalType: "uint128", type: "uint128" },
      { name: "tokensOwed1", internalType: "uint128", type: "uint128" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "protocolFees",
    outputs: [
      { name: "token0", internalType: "uint128", type: "uint128" },
      { name: "token1", internalType: "uint128", type: "uint128" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "feeProtocol0", internalType: "uint8", type: "uint8" },
      { name: "feeProtocol1", internalType: "uint8", type: "uint8" },
    ],
    name: "setFeeProtocol",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "slot0",
    outputs: [
      { name: "sqrtPriceX96", internalType: "uint160", type: "uint160" },
      { name: "tick", internalType: "int24", type: "int24" },
      { name: "observationIndex", internalType: "uint16", type: "uint16" },
      {
        name: "observationCardinality",
        internalType: "uint16",
        type: "uint16",
      },
      {
        name: "observationCardinalityNext",
        internalType: "uint16",
        type: "uint16",
      },
      { name: "feeProtocol", internalType: "uint8", type: "uint8" },
      { name: "unlocked", internalType: "bool", type: "bool" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "tickLower", internalType: "int24", type: "int24" },
      { name: "tickUpper", internalType: "int24", type: "int24" },
    ],
    name: "snapshotCumulativesInside",
    outputs: [
      { name: "tickCumulativeInside", internalType: "int56", type: "int56" },
      {
        name: "secondsPerLiquidityInsideX128",
        internalType: "uint160",
        type: "uint160",
      },
      { name: "secondsInside", internalType: "uint32", type: "uint32" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "zeroForOne", internalType: "bool", type: "bool" },
      { name: "amountSpecified", internalType: "int256", type: "int256" },
      { name: "sqrtPriceLimitX96", internalType: "uint160", type: "uint160" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "swap",
    outputs: [
      { name: "amount0", internalType: "int256", type: "int256" },
      { name: "amount1", internalType: "int256", type: "int256" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "wordPosition", internalType: "int16", type: "int16" }],
    name: "tickBitmap",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "tickSpacing",
    outputs: [{ name: "", internalType: "int24", type: "int24" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tick", internalType: "int24", type: "int24" }],
    name: "ticks",
    outputs: [
      { name: "liquidityGross", internalType: "uint128", type: "uint128" },
      { name: "liquidityNet", internalType: "int128", type: "int128" },
      {
        name: "feeGrowthOutside0X128",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "feeGrowthOutside1X128",
        internalType: "uint256",
        type: "uint256",
      },
      { name: "tickCumulativeOutside", internalType: "int56", type: "int56" },
      {
        name: "secondsPerLiquidityOutsideX128",
        internalType: "uint160",
        type: "uint160",
      },
      { name: "secondsOutside", internalType: "uint32", type: "uint32" },
      { name: "initialized", internalType: "bool", type: "bool" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "token0",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "token1",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: "event",
    inputs: [
      { name: "owner", type: "address", indexed: true },
      { name: "spender", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false },
    ],
    name: "Approval",
  },
  {
    type: "event",
    inputs: [
      { name: "from", type: "address", indexed: true },
      { name: "to", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false },
    ],
    name: "Transfer",
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ type: "uint8" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", type: "address" },
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ type: "bool" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__
 */
export const readPair = /*#__PURE__*/ createReadContract({ abi: pairAbi });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const readPairDomainSeparator = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "DOMAIN_SEPARATOR",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"MINIMUM_LIQUIDITY"`
 */
export const readPairMinimumLiquidity = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "MINIMUM_LIQUIDITY",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"PERMIT_TYPEHASH"`
 */
export const readPairPermitTypehash = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "PERMIT_TYPEHASH",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"allowance"`
 */
export const readPairAllowance = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "allowance",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readPairBalanceOf = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"decimals"`
 */
export const readPairDecimals = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "decimals",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"factory"`
 */
export const readPairFactory = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "factory",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"getReserves"`
 */
export const readPairGetReserves = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "getReserves",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"kLast"`
 */
export const readPairKLast = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "kLast",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"name"`
 */
export const readPairName = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "name",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"nonces"`
 */
export const readPairNonces = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "nonces",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"price0CumulativeLast"`
 */
export const readPairPrice0CumulativeLast = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "price0CumulativeLast",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"price1CumulativeLast"`
 */
export const readPairPrice1CumulativeLast = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "price1CumulativeLast",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"symbol"`
 */
export const readPairSymbol = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "symbol",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"token0"`
 */
export const readPairToken0 = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "token0",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"token1"`
 */
export const readPairToken1 = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "token1",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readPairTotalSupply = /*#__PURE__*/ createReadContract({
  abi: pairAbi,
  functionName: "totalSupply",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__
 */
export const writePair = /*#__PURE__*/ createWriteContract({ abi: pairAbi });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"approve"`
 */
export const writePairApprove = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: "approve",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"burn"`
 */
export const writePairBurn = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: "burn",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"initialize"`
 */
export const writePairInitialize = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: "initialize",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"mint"`
 */
export const writePairMint = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: "mint",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"permit"`
 */
export const writePairPermit = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: "permit",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"skim"`
 */
export const writePairSkim = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: "skim",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"swap"`
 */
export const writePairSwap = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: "swap",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"sync"`
 */
export const writePairSync = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: "sync",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"transfer"`
 */
export const writePairTransfer = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: "transfer",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writePairTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: pairAbi,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__
 */
export const simulatePair = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"approve"`
 */
export const simulatePairApprove = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: "approve",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"burn"`
 */
export const simulatePairBurn = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: "burn",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"initialize"`
 */
export const simulatePairInitialize = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: "initialize",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"mint"`
 */
export const simulatePairMint = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: "mint",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"permit"`
 */
export const simulatePairPermit = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: "permit",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"skim"`
 */
export const simulatePairSkim = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: "skim",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"swap"`
 */
export const simulatePairSwap = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: "swap",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"sync"`
 */
export const simulatePairSync = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: "sync",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"transfer"`
 */
export const simulatePairTransfer = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: "transfer",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pairAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulatePairTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: pairAbi,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__
 */
export const watchPairEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Approval"`
 */
export const watchPairApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
  functionName: "Approval",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Burn"`
 */
export const watchPairBurnEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
  functionName: "Burn",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Mint"`
 */
export const watchPairMintEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
  functionName: "Mint",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Swap"`
 */
export const watchPairSwapEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
  functionName: "Swap",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Sync"`
 */
export const watchPairSyncEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
  functionName: "Sync",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pairAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchPairTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pairAbi,
  functionName: "Transfer",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__
 */
export const readPancakeV3Pool = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"factory"`
 */
export const readPancakeV3PoolFactory = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
  functionName: "factory",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"fee"`
 */
export const readPancakeV3PoolFee = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
  functionName: "fee",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"feeGrowthGlobal0X128"`
 */
export const readPancakeV3PoolFeeGrowthGlobal0X128 =
  /*#__PURE__*/ createReadContract({
    abi: pancakeV3PoolAbi,
    functionName: "feeGrowthGlobal0X128",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"feeGrowthGlobal1X128"`
 */
export const readPancakeV3PoolFeeGrowthGlobal1X128 =
  /*#__PURE__*/ createReadContract({
    abi: pancakeV3PoolAbi,
    functionName: "feeGrowthGlobal1X128",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"liquidity"`
 */
export const readPancakeV3PoolLiquidity = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
  functionName: "liquidity",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"lmPool"`
 */
export const readPancakeV3PoolLmPool = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
  functionName: "lmPool",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"maxLiquidityPerTick"`
 */
export const readPancakeV3PoolMaxLiquidityPerTick =
  /*#__PURE__*/ createReadContract({
    abi: pancakeV3PoolAbi,
    functionName: "maxLiquidityPerTick",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"observations"`
 */
export const readPancakeV3PoolObservations = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
  functionName: "observations",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"observe"`
 */
export const readPancakeV3PoolObserve = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
  functionName: "observe",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"positions"`
 */
export const readPancakeV3PoolPositions = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
  functionName: "positions",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"protocolFees"`
 */
export const readPancakeV3PoolProtocolFees = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
  functionName: "protocolFees",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"slot0"`
 */
export const readPancakeV3PoolSlot0 = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
  functionName: "slot0",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"snapshotCumulativesInside"`
 */
export const readPancakeV3PoolSnapshotCumulativesInside =
  /*#__PURE__*/ createReadContract({
    abi: pancakeV3PoolAbi,
    functionName: "snapshotCumulativesInside",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"tickBitmap"`
 */
export const readPancakeV3PoolTickBitmap = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
  functionName: "tickBitmap",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"tickSpacing"`
 */
export const readPancakeV3PoolTickSpacing = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
  functionName: "tickSpacing",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"ticks"`
 */
export const readPancakeV3PoolTicks = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
  functionName: "ticks",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"token0"`
 */
export const readPancakeV3PoolToken0 = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
  functionName: "token0",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"token1"`
 */
export const readPancakeV3PoolToken1 = /*#__PURE__*/ createReadContract({
  abi: pancakeV3PoolAbi,
  functionName: "token1",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__
 */
export const writePancakeV3Pool = /*#__PURE__*/ createWriteContract({
  abi: pancakeV3PoolAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"burn"`
 */
export const writePancakeV3PoolBurn = /*#__PURE__*/ createWriteContract({
  abi: pancakeV3PoolAbi,
  functionName: "burn",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"collect"`
 */
export const writePancakeV3PoolCollect = /*#__PURE__*/ createWriteContract({
  abi: pancakeV3PoolAbi,
  functionName: "collect",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"collectProtocol"`
 */
export const writePancakeV3PoolCollectProtocol =
  /*#__PURE__*/ createWriteContract({
    abi: pancakeV3PoolAbi,
    functionName: "collectProtocol",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"flash"`
 */
export const writePancakeV3PoolFlash = /*#__PURE__*/ createWriteContract({
  abi: pancakeV3PoolAbi,
  functionName: "flash",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"increaseObservationCardinalityNext"`
 */
export const writePancakeV3PoolIncreaseObservationCardinalityNext =
  /*#__PURE__*/ createWriteContract({
    abi: pancakeV3PoolAbi,
    functionName: "increaseObservationCardinalityNext",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"initialize"`
 */
export const writePancakeV3PoolInitialize = /*#__PURE__*/ createWriteContract({
  abi: pancakeV3PoolAbi,
  functionName: "initialize",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"mint"`
 */
export const writePancakeV3PoolMint = /*#__PURE__*/ createWriteContract({
  abi: pancakeV3PoolAbi,
  functionName: "mint",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"setFeeProtocol"`
 */
export const writePancakeV3PoolSetFeeProtocol =
  /*#__PURE__*/ createWriteContract({
    abi: pancakeV3PoolAbi,
    functionName: "setFeeProtocol",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"setLmPool"`
 */
export const writePancakeV3PoolSetLmPool = /*#__PURE__*/ createWriteContract({
  abi: pancakeV3PoolAbi,
  functionName: "setLmPool",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"swap"`
 */
export const writePancakeV3PoolSwap = /*#__PURE__*/ createWriteContract({
  abi: pancakeV3PoolAbi,
  functionName: "swap",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__
 */
export const simulatePancakeV3Pool = /*#__PURE__*/ createSimulateContract({
  abi: pancakeV3PoolAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"burn"`
 */
export const simulatePancakeV3PoolBurn = /*#__PURE__*/ createSimulateContract({
  abi: pancakeV3PoolAbi,
  functionName: "burn",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"collect"`
 */
export const simulatePancakeV3PoolCollect =
  /*#__PURE__*/ createSimulateContract({
    abi: pancakeV3PoolAbi,
    functionName: "collect",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"collectProtocol"`
 */
export const simulatePancakeV3PoolCollectProtocol =
  /*#__PURE__*/ createSimulateContract({
    abi: pancakeV3PoolAbi,
    functionName: "collectProtocol",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"flash"`
 */
export const simulatePancakeV3PoolFlash = /*#__PURE__*/ createSimulateContract({
  abi: pancakeV3PoolAbi,
  functionName: "flash",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"increaseObservationCardinalityNext"`
 */
export const simulatePancakeV3PoolIncreaseObservationCardinalityNext =
  /*#__PURE__*/ createSimulateContract({
    abi: pancakeV3PoolAbi,
    functionName: "increaseObservationCardinalityNext",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"initialize"`
 */
export const simulatePancakeV3PoolInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: pancakeV3PoolAbi,
    functionName: "initialize",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"mint"`
 */
export const simulatePancakeV3PoolMint = /*#__PURE__*/ createSimulateContract({
  abi: pancakeV3PoolAbi,
  functionName: "mint",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"setFeeProtocol"`
 */
export const simulatePancakeV3PoolSetFeeProtocol =
  /*#__PURE__*/ createSimulateContract({
    abi: pancakeV3PoolAbi,
    functionName: "setFeeProtocol",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"setLmPool"`
 */
export const simulatePancakeV3PoolSetLmPool =
  /*#__PURE__*/ createSimulateContract({
    abi: pancakeV3PoolAbi,
    functionName: "setLmPool",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `functionName` set to `"swap"`
 */
export const simulatePancakeV3PoolSwap = /*#__PURE__*/ createSimulateContract({
  abi: pancakeV3PoolAbi,
  functionName: "swap",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pancakeV3PoolAbi}__
 */
export const watchPancakeV3PoolEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: pancakeV3PoolAbi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `eventName` set to `"Burn"`
 */
export const watchPancakeV3PoolBurnEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: pancakeV3PoolAbi,
    functionName: "Burn",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `eventName` set to `"Collect"`
 */
export const watchPancakeV3PoolCollectEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: pancakeV3PoolAbi,
    functionName: "Collect",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `eventName` set to `"CollectProtocol"`
 */
export const watchPancakeV3PoolCollectProtocolEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: pancakeV3PoolAbi,
    functionName: "CollectProtocol",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `eventName` set to `"Flash"`
 */
export const watchPancakeV3PoolFlashEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: pancakeV3PoolAbi,
    functionName: "Flash",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `eventName` set to `"IncreaseObservationCardinalityNext"`
 */
export const watchPancakeV3PoolIncreaseObservationCardinalityNextEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: pancakeV3PoolAbi,
    functionName: "IncreaseObservationCardinalityNext",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `eventName` set to `"Initialize"`
 */
export const watchPancakeV3PoolInitializeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: pancakeV3PoolAbi,
    functionName: "Initialize",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `eventName` set to `"Mint"`
 */
export const watchPancakeV3PoolMintEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: pancakeV3PoolAbi,
    functionName: "Mint",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `eventName` set to `"SetFeeProtocol"`
 */
export const watchPancakeV3PoolSetFeeProtocolEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: pancakeV3PoolAbi,
    functionName: "SetFeeProtocol",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `eventName` set to `"SetLmPoolEvent"`
 */
export const watchPancakeV3PoolSetLmPoolEventEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: pancakeV3PoolAbi,
    functionName: "SetLmPoolEvent",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link pancakeV3PoolAbi}__ and `eventName` set to `"Swap"`
 */
export const watchPancakeV3PoolSwapEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: pancakeV3PoolAbi,
    functionName: "Swap",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__
 */
export const readUniV3Pool = /*#__PURE__*/ createReadContract({
  abi: uniV3PoolAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"factory"`
 */
export const readUniV3PoolFactory = /*#__PURE__*/ createReadContract({
  abi: uniV3PoolAbi,
  functionName: "factory",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"fee"`
 */
export const readUniV3PoolFee = /*#__PURE__*/ createReadContract({
  abi: uniV3PoolAbi,
  functionName: "fee",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"feeGrowthGlobal0X128"`
 */
export const readUniV3PoolFeeGrowthGlobal0X128 =
  /*#__PURE__*/ createReadContract({
    abi: uniV3PoolAbi,
    functionName: "feeGrowthGlobal0X128",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"feeGrowthGlobal1X128"`
 */
export const readUniV3PoolFeeGrowthGlobal1X128 =
  /*#__PURE__*/ createReadContract({
    abi: uniV3PoolAbi,
    functionName: "feeGrowthGlobal1X128",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"liquidity"`
 */
export const readUniV3PoolLiquidity = /*#__PURE__*/ createReadContract({
  abi: uniV3PoolAbi,
  functionName: "liquidity",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"maxLiquidityPerTick"`
 */
export const readUniV3PoolMaxLiquidityPerTick =
  /*#__PURE__*/ createReadContract({
    abi: uniV3PoolAbi,
    functionName: "maxLiquidityPerTick",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"observations"`
 */
export const readUniV3PoolObservations = /*#__PURE__*/ createReadContract({
  abi: uniV3PoolAbi,
  functionName: "observations",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"observe"`
 */
export const readUniV3PoolObserve = /*#__PURE__*/ createReadContract({
  abi: uniV3PoolAbi,
  functionName: "observe",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"positions"`
 */
export const readUniV3PoolPositions = /*#__PURE__*/ createReadContract({
  abi: uniV3PoolAbi,
  functionName: "positions",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"protocolFees"`
 */
export const readUniV3PoolProtocolFees = /*#__PURE__*/ createReadContract({
  abi: uniV3PoolAbi,
  functionName: "protocolFees",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"slot0"`
 */
export const readUniV3PoolSlot0 = /*#__PURE__*/ createReadContract({
  abi: uniV3PoolAbi,
  functionName: "slot0",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"snapshotCumulativesInside"`
 */
export const readUniV3PoolSnapshotCumulativesInside =
  /*#__PURE__*/ createReadContract({
    abi: uniV3PoolAbi,
    functionName: "snapshotCumulativesInside",
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"tickBitmap"`
 */
export const readUniV3PoolTickBitmap = /*#__PURE__*/ createReadContract({
  abi: uniV3PoolAbi,
  functionName: "tickBitmap",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"tickSpacing"`
 */
export const readUniV3PoolTickSpacing = /*#__PURE__*/ createReadContract({
  abi: uniV3PoolAbi,
  functionName: "tickSpacing",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"ticks"`
 */
export const readUniV3PoolTicks = /*#__PURE__*/ createReadContract({
  abi: uniV3PoolAbi,
  functionName: "ticks",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"token0"`
 */
export const readUniV3PoolToken0 = /*#__PURE__*/ createReadContract({
  abi: uniV3PoolAbi,
  functionName: "token0",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"token1"`
 */
export const readUniV3PoolToken1 = /*#__PURE__*/ createReadContract({
  abi: uniV3PoolAbi,
  functionName: "token1",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link uniV3PoolAbi}__
 */
export const writeUniV3Pool = /*#__PURE__*/ createWriteContract({
  abi: uniV3PoolAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"burn"`
 */
export const writeUniV3PoolBurn = /*#__PURE__*/ createWriteContract({
  abi: uniV3PoolAbi,
  functionName: "burn",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"collect"`
 */
export const writeUniV3PoolCollect = /*#__PURE__*/ createWriteContract({
  abi: uniV3PoolAbi,
  functionName: "collect",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"collectProtocol"`
 */
export const writeUniV3PoolCollectProtocol = /*#__PURE__*/ createWriteContract({
  abi: uniV3PoolAbi,
  functionName: "collectProtocol",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"flash"`
 */
export const writeUniV3PoolFlash = /*#__PURE__*/ createWriteContract({
  abi: uniV3PoolAbi,
  functionName: "flash",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"increaseObservationCardinalityNext"`
 */
export const writeUniV3PoolIncreaseObservationCardinalityNext =
  /*#__PURE__*/ createWriteContract({
    abi: uniV3PoolAbi,
    functionName: "increaseObservationCardinalityNext",
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"initialize"`
 */
export const writeUniV3PoolInitialize = /*#__PURE__*/ createWriteContract({
  abi: uniV3PoolAbi,
  functionName: "initialize",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"mint"`
 */
export const writeUniV3PoolMint = /*#__PURE__*/ createWriteContract({
  abi: uniV3PoolAbi,
  functionName: "mint",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"setFeeProtocol"`
 */
export const writeUniV3PoolSetFeeProtocol = /*#__PURE__*/ createWriteContract({
  abi: uniV3PoolAbi,
  functionName: "setFeeProtocol",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"swap"`
 */
export const writeUniV3PoolSwap = /*#__PURE__*/ createWriteContract({
  abi: uniV3PoolAbi,
  functionName: "swap",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link uniV3PoolAbi}__
 */
export const simulateUniV3Pool = /*#__PURE__*/ createSimulateContract({
  abi: uniV3PoolAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"burn"`
 */
export const simulateUniV3PoolBurn = /*#__PURE__*/ createSimulateContract({
  abi: uniV3PoolAbi,
  functionName: "burn",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"collect"`
 */
export const simulateUniV3PoolCollect = /*#__PURE__*/ createSimulateContract({
  abi: uniV3PoolAbi,
  functionName: "collect",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"collectProtocol"`
 */
export const simulateUniV3PoolCollectProtocol =
  /*#__PURE__*/ createSimulateContract({
    abi: uniV3PoolAbi,
    functionName: "collectProtocol",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"flash"`
 */
export const simulateUniV3PoolFlash = /*#__PURE__*/ createSimulateContract({
  abi: uniV3PoolAbi,
  functionName: "flash",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"increaseObservationCardinalityNext"`
 */
export const simulateUniV3PoolIncreaseObservationCardinalityNext =
  /*#__PURE__*/ createSimulateContract({
    abi: uniV3PoolAbi,
    functionName: "increaseObservationCardinalityNext",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateUniV3PoolInitialize = /*#__PURE__*/ createSimulateContract(
  { abi: uniV3PoolAbi, functionName: "initialize" }
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"mint"`
 */
export const simulateUniV3PoolMint = /*#__PURE__*/ createSimulateContract({
  abi: uniV3PoolAbi,
  functionName: "mint",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"setFeeProtocol"`
 */
export const simulateUniV3PoolSetFeeProtocol =
  /*#__PURE__*/ createSimulateContract({
    abi: uniV3PoolAbi,
    functionName: "setFeeProtocol",
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link uniV3PoolAbi}__ and `functionName` set to `"swap"`
 */
export const simulateUniV3PoolSwap = /*#__PURE__*/ createSimulateContract({
  abi: uniV3PoolAbi,
  functionName: "swap",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link uniV3PoolAbi}__
 */
export const watchUniV3PoolEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: uniV3PoolAbi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link uniV3PoolAbi}__ and `eventName` set to `"Burn"`
 */
export const watchUniV3PoolBurnEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: uniV3PoolAbi,
  functionName: "Burn",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link uniV3PoolAbi}__ and `eventName` set to `"Collect"`
 */
export const watchUniV3PoolCollectEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: uniV3PoolAbi,
    functionName: "Collect",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link uniV3PoolAbi}__ and `eventName` set to `"CollectProtocol"`
 */
export const watchUniV3PoolCollectProtocolEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: uniV3PoolAbi,
    functionName: "CollectProtocol",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link uniV3PoolAbi}__ and `eventName` set to `"Flash"`
 */
export const watchUniV3PoolFlashEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: uniV3PoolAbi,
  functionName: "Flash",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link uniV3PoolAbi}__ and `eventName` set to `"IncreaseObservationCardinalityNext"`
 */
export const watchUniV3PoolIncreaseObservationCardinalityNextEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: uniV3PoolAbi,
    functionName: "IncreaseObservationCardinalityNext",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link uniV3PoolAbi}__ and `eventName` set to `"Initialize"`
 */
export const watchUniV3PoolInitializeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: uniV3PoolAbi,
    functionName: "Initialize",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link uniV3PoolAbi}__ and `eventName` set to `"Mint"`
 */
export const watchUniV3PoolMintEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: uniV3PoolAbi,
  functionName: "Mint",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link uniV3PoolAbi}__ and `eventName` set to `"SetFeeProtocol"`
 */
export const watchUniV3PoolSetFeeProtocolEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: uniV3PoolAbi,
    functionName: "SetFeeProtocol",
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link uniV3PoolAbi}__ and `eventName` set to `"Swap"`
 */
export const watchUniV3PoolSwapEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: uniV3PoolAbi,
  functionName: "Swap",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const readErc20 = /*#__PURE__*/ createReadContract({ abi: erc20Abi });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readErc20Allowance = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: "allowance",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const readErc20Decimals = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: "decimals",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const readErc20Name = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: "name",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const readErc20Symbol = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: "symbol",
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: "totalSupply",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const writeErc20 = /*#__PURE__*/ createWriteContract({ abi: erc20Abi });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeErc20Approve = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: "approve",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: "transfer",
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const simulateErc20 = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: "approve",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: "transfer",
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const watchErc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  functionName: "Approval",
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  functionName: "Transfer",
});
