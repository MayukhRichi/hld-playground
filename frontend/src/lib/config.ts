interface Config {
  google: {
    clientId: string;
  };
  api: {
    baseUrl: string;
  };
}

export const config: Config = {
  google: {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || 'mock-google-client-id',
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
  },
};
