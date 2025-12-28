import { API_BASE_URL, API_TIMEOUT, JSON_HEADERS } from './apiConstants.js';
import { auth } from './firebaseClient.js';

const buildUrl = (path) => `${API_BASE_URL}${path}`;

export const apiRequest = async (path, options = {}) => {
  const { method = 'GET', headers = {}, body, signal } = options;
  const controller = signal ? null : new AbortController();
  const timeout = setTimeout(() => controller?.abort(), API_TIMEOUT);

  try {
    const token = auth.currentUser ? await auth.currentUser.getIdToken() : null;
    const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

    const response = await fetch(buildUrl(path), {
      method,
      headers: { ...JSON_HEADERS, ...authHeader, ...headers },
      body: body ? JSON.stringify(body) : undefined,
      signal: signal ?? controller?.signal,
    });

    const contentType = response.headers.get('content-type') || '';
    const data = contentType.includes('application/json')
      ? await response.json()
      : await response.text();

    if (!response.ok) {
      const message = typeof data === 'string' ? data : data?.error || data?.message;
      throw new Error(message || 'Request failed');
    }

    return data;
  } finally {
    clearTimeout(timeout);
  }
};
