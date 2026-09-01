const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

async function request(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers ?? {}),
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    const error = new Error(`API request failed: ${response.status}`);
    error.status = response.status;
    throw error;
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export const apiClient = {
  get(path, options) {
    return request(path, { ...options, method: 'GET' });
  },
  post(path, body, options) {
    return request(path, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  },
  put(path, body, options) {
    return request(path, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    });
  },
  patch(path, body, options) {
    return request(path, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  },
  delete(path, options) {
    return request(path, { ...options, method: 'DELETE' });
  },
};
