import React, { useState } from "react";
import { useQuery } from "react-query";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { getAllCharacters } from "../../../services/characters";
import useStyles from "./style";
import CircularLoading from "../../../components/CircularLoading";
import CardComponent from "../../../components/card";
import PaginationButtons from "../../../components/paginattion";
import CharacterDetails from "../details";

const AllCharacters = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  const { data, isLoading, error } = useQuery(["people", page], () =>
    getAllCharacters(page)
  );

  const showDetails = (url: string) => {
    setSelectedUrl(url);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUrl("");
  };

  if (error) return <>Something went Wrong!</>;
  return (
    <Box className={classes.allCharactersContainer}>
      <CircularLoading Open={isLoading} />
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
