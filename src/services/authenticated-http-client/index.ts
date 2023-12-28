import axios from "axios";
import tokenProvider from "axios-token-interceptor";

const authHttpClientService = axios.create();

authHttpClientService.interceptors.request.use(
  tokenProvider({
    getToken: () => localStorage.getItem("token") || ""
  })
);

export default authHttpClientService;
