export interface CoinsProps {
  id: string;
  rank: string;
  status: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  frozenAt: number | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
  tokens: Record<string, unknown>;
}
