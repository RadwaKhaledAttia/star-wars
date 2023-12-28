import authenticatedHttpClientService from "../authenticated-http-client";

export const getAllCharacters = (page: number) =>
  authenticatedHttpClientService
    .get(
      `${process.env.REACT_APP_BASE_URL}/people?page=${page}`
    )
    .then(res => res.data);
