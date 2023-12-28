import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AuthService from "../../services/auth";
import useStyles from "./style";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Header() {
  const isAuthenticated = !!AuthService.getToken();
  const [value, setValue] = useState(0);
  const [authenticated, setAuthenticated] = useState(isAuthenticated);

  useEffect(() => {
    if (authenticated) {
      const interval = setInterval(() => {
        AuthService.isTokenExpired();
      }, 60000);
      return () => clearInterval(interval);
    }
  }, [authenticated]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleLogout = async () => {
    await AuthService.logout();
    await setAuthenticated(false);
  };

  const handleLogin = async () => {
    const token = await AuthService.login("user", "123456");
    if (token) setAuthenticated(true);
  };

  const submitLoginLogout = () => {
    if (isAuthenticated) handleLogout();
    else handleLogin();
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
      <button className={classes.signInButton} onClick={submitLoginLogout}>
        <img
          src={
            "https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User-85043c6786ab.svg"
          }
          alt="login"
        />
        {authenticated ? <p>Logout</p> : <p>Sign in</p>}
      </button>
    </header>
  );
}

export default Header;
