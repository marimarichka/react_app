import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mockApi = createApi({
  reducerPath: "mockApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://639fcbd97aaf11ceb8a04e50.mockapi.io/api/v1/app/" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (size) => `users?page=1&limit=${size}`,
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `users/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = mockApi;
