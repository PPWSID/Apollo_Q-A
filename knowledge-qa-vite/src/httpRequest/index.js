import createHttpRequest from './createhttp';

const httpRequest = createHttpRequest(import.meta.env.VITE_API_URL);

export default httpRequest;
