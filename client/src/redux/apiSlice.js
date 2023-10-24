import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://nest-server-cjo8.onrender.com',
        credentials: 'include',
        
      }),
  endpoints: () => ({}),
});