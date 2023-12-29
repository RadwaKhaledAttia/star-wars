import authenticatedHttpClientService from "../authenticated-http-client";

export const getAllSpecies = () =>
  authenticatedHttpClientService
    .get(`${process.env.REACT_APP_BASE_URL}/species`)
    .then((res) => res.data);
