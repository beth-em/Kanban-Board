// Adding a helper for base URL
const API_BASE_URL = import.meta.env.MODE === ' development'
? 'http://localhost:3001'
: ''; // Keep string empty to let relatative fetch work in production

export default API_BASE_URL;