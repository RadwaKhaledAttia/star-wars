import React, { FC } from "react";
import Button from "@mui/material/Button";
import useStyles from "./style";

interface Props {
  children: any;
  onClick: () => void;
}

const ButtonComponent: FC<Props> = ({ onClick, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonStyle}>
      <Button variant="outlined" onClick={onClick}>{children}</Button>
    </div>
  );
};

export default ButtonComponent;
