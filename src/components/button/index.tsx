import React, { FC } from "react";
import Button from "@mui/material/Button";
import useStyles from "./style";


type Type = undefined | "submit" | "button" | "reset"
interface Props {
  children: string;
  type?: Type;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonComponent: FC<Props> = ({ onClick, type, disabled, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonStyle}>
      <Button variant="outlined" onClick={onClick} type={type} disabled={disabled}>
        {children}
      </Button>
    </div>
  );
};

export default ButtonComponent;
