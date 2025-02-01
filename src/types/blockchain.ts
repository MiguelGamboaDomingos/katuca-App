export interface Block {
  number: number;
  hash: string;
  size: number;
  timestamp: number;
  weight: number;
  merkleRoot: string;
  nonce: string;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  amount: number;
  fee: number;
  status: 'confirmed' | 'pending';
  timestamp: number;
}

export interface NetworkStats {
  hashRate: number;
  difficulty: number;
  lastBlock: number;
  avgBlockTime: number;
  pendingTransactions: number;
}