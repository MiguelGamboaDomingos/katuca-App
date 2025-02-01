export function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleString();
}

export function formatHashRate(hashRate: number): string {
  if (hashRate >= 1e18) return `${(hashRate / 1e18).toFixed(2)} EH/s`;
  if (hashRate >= 1e15) return `${(hashRate / 1e15).toFixed(2)} PH/s`;
  if (hashRate >= 1e12) return `${(hashRate / 1e12).toFixed(2)} TH/s`;
  if (hashRate >= 1e9) return `${(hashRate / 1e9).toFixed(2)} GH/s`;
  if (hashRate >= 1e6) return `${(hashRate / 1e6).toFixed(2)} MH/s`;
  if (hashRate >= 1e3) return `${(hashRate / 1e3).toFixed(2)} KH/s`;
  return `${hashRate.toFixed(2)} H/s`;
}