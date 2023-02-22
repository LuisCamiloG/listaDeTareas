import axiosApi from "./config";

export const loginRequest = async ({ usuario, contraseña }) => {
    return axiosApi.patch("/api/usuarios", {
        usuario,
        contraseña,
    });
};