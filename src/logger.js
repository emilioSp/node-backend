const info = (...params) => {
  const msg = params.map(JSON.stringify).join(' ');
  console.log(`[INFO] ${msg}`);
};

const error = (...params) => {
  const msg = params.map((p) => (p instanceof Error ? (p?.response?.data ? JSON.stringify(p.response.data) : p?.stack ?? 'N/A') : JSON.stringify(p))).join(' ');
  console.error(`[ERROR] ${msg}`);
};

const logger = { info, error };

export default logger;
