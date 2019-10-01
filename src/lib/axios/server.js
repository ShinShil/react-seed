import axios from 'axios';
import {SERVER_ROUTES} from "./server-routes";

export async function apiFetchRooms() {
    return await axios.get(SERVER_ROUTES.ROOMS);
}

export async function apiLogin(postModel) {
   return await axios.post(SERVER_ROUTES.LOGIN, postModel)
}

export async function apiLogout() {
    return await axios.post(SERVER_ROUTES.LOGOUT)
}

export async function apiAuthState() {
    return await axios.get(SERVER_ROUTES.AUTH)
}
