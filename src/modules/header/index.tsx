import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useStyles from "./style";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <header className={classes.HeaderContainer}>
      <Box className={classes.Logo}>
        <img
          src={
            "https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
          }
          alt="Logo"
        />
      </Box>
      <Box className={classes.Tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Films" {...a11yProps(1)} />
          <Tab label="Series" {...a11yProps(2)} />
          <Tab label="Games" {...a11yProps(3)} />
          <Tab label="Characters" {...a11yProps(4)} />
          <Tab label="Features" {...a11yProps(5)} />
        </Tabs>
      </Box>
    </header>
  );
}

export default Header;
