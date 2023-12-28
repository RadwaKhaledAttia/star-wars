import React, { FC } from "react";
import { useQuery } from "react-query";
import { format } from "date-fns";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { fetchGetAPI } from "../../../services/characters";
import useStyles from "./style";
import CircularLoading from "../../../components/CircularLoading";
import Button from "../../../components/button";

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
  url: string;
  handleClose: () => void;
}

const CharacterDetails: FC<Props> = ({ open, url, handleClose }) => {
  const classes = useStyles();
  const {
    data: character,
    isLoading,
    error: characterError,
  } = useQuery(["character", url], () => fetchGetAPI(url));

  const homeWorldUrl = character?.homeworld;

  const {
    data: homeworld,
    isLoading: homeworldLoading,
    error: homeworldError,
  } = useQuery(["homeworld", homeWorldUrl], () => fetchGetAPI(homeWorldUrl), {
    enabled: !!homeWorldUrl,
  });

  const infoSection = (title: string, content: string) => (
    <Box className={classes.characterInfo}>
      <Typography variant="h6" component="h6">
        {title}
      </Typography>
      <Typography variant="h5" component="h5">
        {content}
      </Typography>
    </Box>
  );

  if (characterError || homeworldError) return <>Something went Wrong!</>;
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
      className={classes.characterContainer}
    >
      <Fade in={open}>
        <Box className="boxContainer" sx={style}>
          <CircularLoading Open={isLoading || homeworldLoading} />
          {!isLoading && (
            <>
              <Typography
                id="transition-modal-title"
                variant="h2"
                component="h2"
              >
                {character.name}
              </Typography>
              <Typography variant="h4" component="h4">
                General Information
              </Typography>
              <Box className={classes.infoContainer}>
                {infoSection(
                  "Height:",
                  `${Number(character.height) / 100} meter`
                )}
                {infoSection("Mass:", `${Number(character.mass)} kg`)}
              </Box>
              <Box className={classes.infoContainer}>
                {infoSection("Films:", `${character.films.length} films`)}
                {infoSection("Birth:", `${character.birth_year}`)}
              </Box>
              <Box className={classes.infoContainer}>
                {infoSection(
                  "Created at:",
                  `${format(new Date(character.created), "dd-MM-yyyy")}`
                )}
              </Box>
              <br />
              {!homeworldLoading && (
                <>
                  <Typography variant="h4" component="h4">
                    Homeworld
                  </Typography>
                  <Box className={classes.infoContainer}>
                    {infoSection("Name:", `${homeworld.name}`)}
                    {infoSection("Terrain:", `${homeworld.terrain}`)}
                  </Box>
                  <Box className={classes.infoContainer}>
                    {infoSection("Climate:", `${homeworld.climate}`)}
                    {infoSection(
                      "Residents:",
                      `${homeworld?.residents?.length} residents`
                    )}
                  </Box>
                </>
              )}
            </>
          )}
          {!isLoading && !homeworldLoading && (
            <div className={classes.buttonContainer}>
              <Button onClick={handleClose}>GOT IT</Button>
            </div>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default CharacterDetails;
