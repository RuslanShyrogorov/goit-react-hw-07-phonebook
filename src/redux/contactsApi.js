import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6364c0bb7b209ece0f4d080d.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => `contacts`,
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContact: build.mutation({
      query: body => ({
        url: 'contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
