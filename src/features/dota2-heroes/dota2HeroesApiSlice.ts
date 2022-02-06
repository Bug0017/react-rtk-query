import { Hero } from "./hero.model";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.opendota.com/api",
  }),
  endpoints(builder) {
    return {
      fetchHeroes: builder.query<Hero[], any>({
        query() {
          return `/heroStats`;
        },
      }),
    };
  },
});

export const { useFetchHeroesQuery } = apiSlice;
