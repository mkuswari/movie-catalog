import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../configs/baseConfig";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
  }),
  endpoints: (builder) => ({
    popularMovies: builder.query({
      query: () =>
        `/discover/movie?api_key=${config.apiKey}&sort_by=popularity.desc`,
    }),
    genreMovies: builder.query({
      query: () => `/genre/movie/list?api_key=${config.apiKey}`,
    }),
    trendingMoviesWeekly: builder.query({
      query: () => `/trending/movie/week?api_key=${config.apiKey}`,
    }),
  }),
});

export const {
  usePopularMoviesQuery,
  useGenreMoviesQuery,
  useTrendingMoviesWeeklyQuery,
} = moviesApi;
