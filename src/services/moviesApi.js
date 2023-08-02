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
    trendingMoviesIndonesia: builder.query({
      query: () =>
        `/discover/movie?api_key=${config.apiKey}&sort_by=popularity.desc&with_original_language=id`,
    }),
    seriesVideos: builder.query({
      query: () => `/trending/tv/week?api_key=${config.apiKey}`,
    }),
    nowPlayingMovies: builder.query({
      query: () => `/movie/now_playing?api_key=${config.apiKey}`,
    }),
    detailMovie: builder.query({
      query: (id) => `/movie/${id}?api_key=${config.apiKey}`,
    }),
    recomendationMovies: builder.query({
      query: (id) => `/movie/${id}/recommendations?api_key=${config.apiKey}`,
    }),
    similarMovies: builder.query({
      query: (id) => `/movie/${id}/similar?api_key=${config.apiKey}`,
    }),
    searchMovies: builder.query({
      query: ({ query, page }) =>
        `/search/movie?api_key=${config.apiKey}&query=${query}&page=${page}`,
    }),
  }),
});

export const {
  usePopularMoviesQuery,
  useGenreMoviesQuery,
  useTrendingMoviesWeeklyQuery,
  useTrendingMoviesIndonesiaQuery,
  useSeriesVideosQuery,
  useNowPlayingMoviesQuery,
  useDetailMovieQuery,
  useRecomendationMoviesQuery,
  useSimilarMoviesQuery,
  useSearchMoviesQuery,
} = moviesApi;
