const config = () => {
  return {
    baseUrl: import.meta.env.VITE_BASE_URL,
    apiKey: import.meta.env.VITE_API_KEY,
    baseImageUrl: import.meta.env.VITE_BASE_IMAGE_URL,
    baseImageUrlSmall: import.meta.env.VITE_BASE_IMAGE_URL_SMALL,
  };
};

export default config();
