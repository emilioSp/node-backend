import asyncStorage from './asyncStorage.js';

const info = (...params) => {
  const msg = params.map(JSON.stringify).join(' ');
  const { transactionId } = asyncStorage.getStore();
  console.log(`[INFO][${transactionId}] ${msg}`);
};

const error = (...params) => {
  const msg = params.map((p) => (p instanceof Error ? (p?.response?.data ? JSON.stringify(p.response.data) : p?.stack ?? 'N/A') : JSON.stringify(p))).join(' ');
  const { transactionId } = asyncStorage.getStore();
  console.error(`[ERROR][${transactionId}] ${msg}`);
};

const logger = { info, error };

export default logger;
