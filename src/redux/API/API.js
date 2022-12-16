import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://random-data-api.com/api/v2/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (size) => `users?size=${size}`,
    }),
    getCards: builder.query({
      query: (size) => `credit_cards?size=${size}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetCardsQuery } = api;
