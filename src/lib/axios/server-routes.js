const baseUrl = 'http://localhost:9999/lr4/';

const getUrl = (url) => `${baseUrl}${url}`;

export const SERVER_ROUTES = {
   ROOMS: getUrl('rooms'),
   LOGIN: getUrl('login'),
   LOGOUT: getUrl('logout'),
   AUTH: getUrl('auth')
};