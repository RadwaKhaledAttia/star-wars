/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import _debounce from "lodash/debounce";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { getAllCharacters } from "../../../services/characters";
import useStyles from "./style";
import CircularLoading from "../../../components/CircularLoading";
import CardComponent from "../../../components/card";
import PaginationButtons from "../../../components/paginattion";
import CharacterDetails from "../details";
import SearchIcon from "../../../assets/images/search.png";
import FilterIcon from "../../../assets/images/filter.png";
import CharactersFilterations from "./filteration";
import { Character } from "../../../interfaces/charcter";

const AllCharacters = () => {
  const classes = useStyles();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [serachInput, setSerachInput] = useState("");
  const [filters, setFilters] = useState<{
    films: string[];
    species: string[];
  }>({ films: [], species: [] });

  const { data, isLoading, error } = useQuery(
    ["people", page, serachInput],
    () => getAllCharacters(page, serachInput)
  );

  useEffect(() => {
    if (data?.results) setCharacters(data.results);
  }, [data]);

  // IMPLEMENT FILTER: Implemented the filter as there's no filter in swapi api
  // So, there's no handling to pagination
  useEffect(() => {
    const { films, species } = filters;
    console.log("first", filters);
    if ((films.length > 0 || species.length > 0) && !isLoading) {
      const allCharacters = [...data.results];
      const filteredCharacters: Character[] = [];
      if (films.length > 0 && species.length === 0) {
        allCharacters.forEach((character) => {
          const matchesFilmsIncludes = character.films.filter((item: string) =>
            films.some((element) => element === item)
          );
          if (matchesFilmsIncludes.length === films.length)
            filteredCharacters.push(character);
        });
      } else if (films.length === 0 && species.length > 0) {
        const allCharacters = [...data.results];
        allCharacters.forEach((character) => {
          const matchesSpeciesIncludes = character.species.filter(
            (item: string) => species.some((element) => element === item)
          );
          if (matchesSpeciesIncludes.length === species.length)
            filteredCharacters.push(character);
        });
      } else if (films.length > 0 && species.length > 0) {
        const allCharacters = [...data.results];
        allCharacters.forEach((character) => {
          const matchesFilmsIncludes = character.films.filter((item: string) =>
            films.some((element) => element === item)
          );
          const matchesSpeciesIncludes = character.species.filter(
            (item: string) => species.some((element) => element === item)
          );
          if (
            matchesSpeciesIncludes.length === species.length &&
            matchesFilmsIncludes.length === films.length
          )
            filteredCharacters.push(character);
        });
      }
      setCharacters(filteredCharacters);
    } else if (films.length === 0 && species.length === 0 && !isLoading) {
      setCharacters([...data.results]);
    }
  }, [filters, isLoading]);

  const showDetails = (url: string) => {
    setSelectedUrl(url);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUrl("");
  };

  const handleCloseFilter = () => setOpenFilter(false);

  const handleSearchChange = _debounce((value) => {
    setSerachInput(value);
  }, 500);

  if (error) return <>Something went Wrong!</>;
  return (
    <Box className={classes.allCharactersContainer}>
      <CircularLoading Open={isLoading} />
      <Grid container spacing={1} direction="row" justifyContent="center">
        <FormControl sx={{ marginBottom: "50px" }}>
          <OutlinedInput
            placeholder="Search characters ..."
            endAdornment={
              <InputAdornment position="end">
                <img src={SearchIcon} alt="SearchIcon" />
              </InputAdornment>
            }
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </FormControl>
        <button
          className={classes.filterButton}
          onClick={() => setOpenFilter(true)}
        >
          <img src={FilterIcon} alt="filter" />
        </button>
      </Grid>
      {!isLoading && (
        <Grid container spacing={3}>
          {characters.length === 0 && (
            <Typography variant="h6" sx={{ margin: "auto" }}>
              No characters found
            </Typography>
          )}
          {characters.map((people: Character) => (
            <Grid key={people.url} item lg={3} md={4} sm={6} xs={12}>
              <CardComponent character={people} handleClick={showDetails} />
            </Grid>
          ))}
        </Grid>
      )}
      {!isLoading && data.count > 0 && (
        <PaginationButtons
          count={Math.ceil(data.count / 10)}
          page={page}
          changePage={setPage}
        />
      )}
      {openModal && (
        <CharacterDetails
          open={openModal}
          url={selectedUrl}
          handleClose={handleCloseModal}
        />
      )}
      {openFilter && (
        <CharactersFilterations
          open={openFilter}
          handleClose={handleCloseFilter}
          setFilters={setFilters}
          filters={filters}
        />
      )}
    </Box>
  );
};

export default AllCharacters;
