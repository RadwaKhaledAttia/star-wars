import authenticatedHttpClientService from "../authenticated-http-client";

export const getAllCharacters = (page: number, search: string) =>
  authenticatedHttpClientService
    .get(`${process.env.REACT_APP_BASE_URL}/people?page=${page}&search=${search}&film=1`)
    .then((res) => res.data);

export const fetchGetAPI = (url: string) =>
  authenticatedHttpClientService.get(`${url}`).then((res) => res.data);
