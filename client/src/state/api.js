import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User", "Attritions" , "Employees", "Lists" 
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),

    getAttritions: build.query({
      query: () => "client/attritions",
      provideTags: ["Attritions"],
    }),

    getEmployees : build.query({
    query: () => "client/employees",
    provideTags: ["Employees"],
  }),

  getLists: build.query({
    query: ({ page, pageSize, sort, search }) => ({
      url: "client/lists",
      method: "GET",
      params: { page, pageSize, sort, search },
    }),
    providesTags: ["Lists"],
  }),

})
});

export const {
  useGetUserQuery, useGetAttritionsQuery , useGetEmployeesQuery , useGetListsQuery
} = api;