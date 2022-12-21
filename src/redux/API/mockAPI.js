import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mockApi = createApi({
  reducerPath: "mockApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://639fcbd97aaf11ceb8a04e50.mockapi.io/api/v1/app/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (size) => `users?page=1&limit=${size}`,
    }),
  }),
});

export const { useGetUsersQuery } = mockApi;
