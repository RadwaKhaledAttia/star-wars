import React, { FC } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useStyles from "./style";

interface Props {
  count: number;
  page: number;
  changePage: (page: number) => void;
}

const PaginationButtons: FC<Props> = ({ count, page, changePage }) => {
  const classes = useStyles();
  const handleChange = (event: any, page: number) => {
    event.preventDefault();
    changePage(page);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        className={classes.paginationContainer}
        page={page}
        count={count}
        showFirstButton
        showLastButton
        onChange={handleChange}
      />
    </Stack>
  );
};

export default PaginationButtons;
