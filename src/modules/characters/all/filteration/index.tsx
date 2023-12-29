/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState } from "react";
import { useQueries } from "react-query";
import Backdrop from "@mui/material/Backdrop";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ButtonComponent from "../../../../components/button";
import CircularLoading from "../../../../components/CircularLoading";
import CloseIcon from "../../../../assets/images/close.png";
import { getAllFilms } from "../../../../services/films";
import { getAllSpecies } from "../../../../services/species";
import useStyles from "./style";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  handleClose: () => void;
  setFilters: (filters: { films: string[]; species: string[] }) => void;
  filters: { films: string[]; species: string[] };
}

const CharactersFilterations: FC<Props> = ({
  open,
  handleClose,
  setFilters,
  filters,
}) => {
  const classes = useStyles();
  const [selectedFilms, setSelectedFilms] = useState<string[]>(filters.films);
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>(
    filters.species
  );

  const [
    { data: films, isLoading: isFilmsLoading },
    { data: species, isLoading: isSpeciesLoading },
  ] = useQueries([
    { queryKey: ["films"], queryFn: getAllFilms },
    { queryKey: ["species"], queryFn: getAllSpecies },
  ]);

  const handleFilmsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) setSelectedFilms([...selectedFilms, name]);
    else {
      const filteredFilms = selectedFilms.filter((item) => item !== name);
      setSelectedFilms(filteredFilms);
    }
  };

  const handleSpeciesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) setSelectedSpecies([...selectedSpecies, name]);
    else {
      const filteredSpecies = selectedSpecies.filter((item) => item !== name);
      setSelectedSpecies(filteredSpecies);
    }
  };

  const applyFilter = async () => {
    await setFilters({ films: selectedFilms, species: selectedSpecies });
    await handleClose();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      className={classes.filterContainer}
    >
      <Fade in={open}>
        <Box className="boxContainer" sx={style}>
          <Typography id="transition-modal-title" variant="h2" component="h2">
            Filters
          </Typography>
          <img src={CloseIcon} alt="close filter" onClick={handleClose} />
          <CircularLoading Open={isFilmsLoading || isSpeciesLoading} />
          {!isFilmsLoading && !isSpeciesLoading && (
            <>
              <Typography variant="h5" component="h5">
                By films
              </Typography>
              <Grid container spacing={1}>
                {films?.results.map((film: any) => (
                  <Grid item lg={6} key={film.url}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={film.url}
                          checked={
                            selectedFilms.find((item) => item === film.url)
                              ? true
                              : false
                          }
                          onChange={handleFilmsChange}
                          sx={{
                            color: "#B5B7B7",
                            "&.Mui-checked": {
                              color: "#FADE4B",
                            },
                          }}
                        />
                      }
                      label={film.title}
                    />
                  </Grid>
                ))}
              </Grid>
              <br />
              <Typography variant="h5" component="h5">
                By species
              </Typography>
              <Grid container spacing={1}>
                {species?.results.map((item: any) => (
                  <Grid item lg={6} key={item.url}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={item.url}
                          checked={
                            selectedSpecies.find(
                              (element) => element === item.url
                            )
                              ? true
                              : false
                          }
                          onChange={handleSpeciesChange}
                          sx={{
                            color: "#B5B7B7",
                            "&.Mui-checked": {
                              color: "#FADE4B",
                            },
                          }}
                        />
                      }
                      label={item.name}
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid container direction="row" justifyContent="center">
                <div className={classes.applyBtn}>
                  <ButtonComponent onClick={applyFilter}>Apply</ButtonComponent>
                </div>
              </Grid>
            </>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default CharactersFilterations;
