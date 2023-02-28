import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const Api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    tagTypes: ["alias", "refreshGetTasks", "refreshPostTasks", "refreshGetUsers"],
    keepUnusedDataFor: 3,
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    endpoints: (builder) => ({
        ObtenerTareas: builder.query({
            query: (token) => ({
                method: 'GET',
                headers: { "Content-Type": "application/json", token },
                url: '/api/tareas'
            }),
            providesTags: ["refreshGetTasks"]
        }),
        AgregarTareas: builder.mutation({
            query: ({ dateTask, token }) => ({
                method: 'POST',
                headers: { "Content-Type": "application/json", token },
                url: '/api/tareas',
                body: dateTask
            }),
            invalidatesTags: ["refreshPostTasks", "refreshGetTasks"]
        }),
        EliminarTareas: builder.mutation({
            query: ({ _id, token }) => ({
                method: 'DELETE',
                url: `/api/tareas/${_id}`,
                headers: { "Content-Type": "application/json", token },
            }),
            invalidatesTags: ["refreshGetTasks", "refreshPostTasks"]
        }),
        ActualizarTareas: builder.mutation({
            query: ({ _id, datoTask, token }) => ({
                method: 'PUT',
                url: `/api/tareas/${_id}`,
                headers: { "Content-Type": "application/json", token },
                body: datoTask
            }),
            invalidatesTags: ["refreshGetTasks", "refreshPostTasks"]
        }),
        ActualizarEstadoTareas: builder.mutation({
            query: ({ _id, datoEstadoTask, token }) => ({
                method: 'PUT',
                url: `/api/tareasEstado/${_id}`,
                headers: { "Content-Type": "application/json", token },
                body: datoEstadoTask
            }),
            invalidatesTags: ["refreshGetTasks", "refreshPostTasks"]
        }),
        crearUsuario: builder.mutation({
            query: (createUser) => ({
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                url: '/api/usuarios',
                body: createUser
            }),
            invalidatesTags: ["refreshGetUsers"]
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useObtenerTareasQuery, useAgregarTareasMutation, useEliminarTareasMutation, useActualizarTareasMutation, useCrearUsuarioMutation, useActualizarEstadoTareasMutation } = Api