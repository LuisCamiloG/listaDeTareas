import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const Api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    tagTypes: ["alias", "refreshGetTasks", "refreshPostTasks"],
    keepUnusedDataFor: 3,
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    endpoints: (builder) => ({
        ObtenerTareas: builder.query({
            query: () => ({
                method: 'GET',
                headers: { "Content-Type": "application/json" },
                url: '/api/tareas'
            }),
            providesTags: ["refreshGetTasks"]
        }),
        AgregarTareas: builder.mutation({
            query: (dateTask) => ({
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                url: '/api/tareas',
                body: dateTask
            }),
            invalidatesTags: ["refreshPostTasks", "refreshGetTasks"]
        }),
        EliminarTareas: builder.mutation({
            query: ({ _id }) => ({
                method: 'DELETE',
                url: `/api/tareas/${_id}`,
                headers: { "Content-Type": "application/json" },
            }),
            invalidatesTags: ["refreshGetTasks", "refreshPostTasks"]
        }),
        ActualizarTareas: builder.mutation({
            query: ({ _id, datoTask }) => ({
                method: 'PUT',
                url: `/api/tareas/${_id}`,
                headers: { "Content-Type": "application/json" },
                body: datoTask
            }),
            invalidatesTags: ["refreshGetTasks", "refreshPostTasks"]
        }),

    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useObtenerTareasQuery, useAgregarTareasMutation, useEliminarTareasMutation, useActualizarTareasMutation } = Api