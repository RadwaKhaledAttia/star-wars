import authenticatedHttpClientService from "../authenticated-http-client";

export const getAllFilms = () =>
  authenticatedHttpClientService
    .get(`${process.env.REACT_APP_BASE_URL}/films`)
    .then((res) => res.data);
