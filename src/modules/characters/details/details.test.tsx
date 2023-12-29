/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, waitFor } from "@testing-library/react";
import CharacterDetails from "./index";
import { useQuery } from "react-query";

jest.mock("react-query", () => ({
  useQuery: jest.fn(),
}));

describe("CharacterDetails Component", () => {
  const mockCharacter = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    films: ["A New Hope", "The Empire Strikes Back"],
    birth_year: "19BBY",
    created: "1977-05-25T12:00:00.000Z",
  };

  const mockHomeworld = {
    name: "Tatooine",
    terrain: "Desert",
    climate: "Arid",
    residents: ["Anakin Skywalker", "C-3PO"],
  };

  beforeEach(() => {
    (useQuery as jest.Mock).mockImplementation((url: string) => {
      if (url.includes("character")) {
        return Promise.resolve(mockCharacter);
      } else if (url.includes("homeworld")) {
        return Promise.resolve(mockHomeworld);
      }
      return Promise.resolve({});
    });
  });

  test("renders character and homeworld information", async () => {
    const handleClose = jest.fn();

    const { getByText } = render(
      <CharacterDetails
        open={true}
        url="https://swapi.dev/api/people/1/"
        handleClose={handleClose}
      />
    );

    await waitFor(() => {
      expect(getByText("Luke Skywalker")).toBeInTheDocument();
      expect(getByText("Height: 1.72 meter")).toBeInTheDocument();
      expect(getByText("Mass: 77 kg")).toBeInTheDocument();
      expect(getByText("Films: 2 films")).toBeInTheDocument();
      expect(getByText("Birth: 19BBY")).toBeInTheDocument();
      expect(getByText("Created at: 25-05-1977")).toBeInTheDocument();
      expect(getByText("Homeworld")).toBeInTheDocument();
      expect(getByText("Name: Tatooine")).toBeInTheDocument();
      expect(getByText("Terrain: Desert")).toBeInTheDocument();
      expect(getByText("Climate: Arid")).toBeInTheDocument();
      expect(getByText("Residents: 2 residents")).toBeInTheDocument();
    });
  });
});
