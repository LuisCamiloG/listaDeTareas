import axiosApi from "./config";

export const loginRequest = async ({ usuario, contraseña }) => {
    return axiosApi.patch("/api", {
        usuario,
        contraseña,
    });
};