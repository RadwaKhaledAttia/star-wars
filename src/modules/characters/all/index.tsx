import React, { useState } from "react";
import { useQuery } from "react-query";
import _debounce from 'lodash/debounce';
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { getAllCharacters } from "../../../services/characters";
import useStyles from "./style";
import CircularLoading from "../../../components/CircularLoading";
import CardComponent from "../../../components/card";
import PaginationButtons from "../../../components/paginattion";
import CharacterDetails from "../details";
import SearchIcon from "../../../assets/images/search.png";

const AllCharacters = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [serachInput, setSerachInput] = useState("");

  const { data, isLoading, error } = useQuery(
    ["people", page, serachInput],
    () => getAllCharacters(page, serachInput)
  );

  const showDetails = (url: string) => {
    setSelectedUrl(url);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUrl("");
  };

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
      </Grid>
      <Grid container spacing={3}>
        {data?.results.map((people: any) => (
          <Grid key={people.url} item lg={3} md={4} sm={6} xs={12}>
            <CardComponent character={people} handleClick={showDetails} />
          </Grid>
        ))}
      </Grid>
      {!isLoading && (
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
    </Box>
  );
};

export default AllCharacters;
