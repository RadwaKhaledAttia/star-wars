import React, { useState } from "react";
import { useQuery } from "react-query";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { getAllCharacters } from "../../../services/characters";
import useStyles from "./style";
import CircularLoading from "../../../components/CircularLoading";
import CardComponent from "../../../components/card";
import PaginationButtons from "../../../components/paginattion";

const AllCharacters = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery(["people", page], () =>
    getAllCharacters(page)
  );

  if (error) return <>Something went Wrong!</>;
  return (
    <Box className={classes.allCharactersContainer}>
      <CircularLoading Open={isLoading} />
      <Grid container spacing={3}>
        {data?.results.map((people: any) => (
          <Grid key={people.url} item lg={3} md={4} sm={6} xs={12}>
            <CardComponent character={people} />
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
    </Box>
  );
};

export default AllCharacters;
