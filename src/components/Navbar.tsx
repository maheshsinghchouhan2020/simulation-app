"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useMediaQuery } from "@mui/material";

const pages = [
  { name: "Start page", link: "/" },
  { name: "Simulation config", link: "/simulationconfig" },
  { name: "Landing page config", link: "/landingpageconfig" },
  { name: "Simulations", link: "/simulations" },
  { name: "Deployments", link: "/deployments" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [mainNavbar, setmainNavbar] = React.useState(true);

  const switchmainNavbar = () => {
    setmainNavbar((prevMode) => !prevMode);
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [select, setSelect] = React.useState("");

  const handleNav = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  const [recentNav, setrecentNav] = React.useState(null);

  const handleDownClick = (pageName: any) => {
    setrecentNav(pageName);
    handleCloseNavMenu();
  };

  const forMobileView = useMediaQuery("(max-width:1200px)");

  return (
    <>
      <Box>
        <AppBar position="static" sx={{ display: "flex" }}>
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                justifyContent: "space-between",
                overflow: "hidden",
              }}
            >
              <Box>
                <Link href="/">
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                      mr: 2,
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "flex",
                      },
                      fontWeight: 800,
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    Simulation
                  </Typography>
                </Link>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: forMobileView ? "flex" : "none" },
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  {/* mobile menu */}
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: {
                        xs: forMobileView ? "block" : "none",
                        md: "none",
                      },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                        <Link key={page.name} href={page.link}>
                          {page.name}
                        </Link>{" "}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
              <Link href="/">
                <Typography
                  variant="h5"
                  noWrap
                  component="div"
                  sx={{
                    mr: 2,
                    display: { xs: forMobileView ? "flex" : "none" },
                    flexGrow: 1,
                    fontWeight: 800,
                    textDecoration: "none",
                  }}
                >
                  Simulation
                </Typography>
              </Link>
              {/* for categories */}
              <Box
                sx={{
                  flexGrow: "1",
                  display: { xs: forMobileView ? "none" : "flex" },
                  marginLeft: "4rem",
                }}
              >
                {pages.map((page, index) => (
                  <Link key={page.name} href={page.link}>
                    <Button
                      key={page.name}
                      onClick={() => handleDownClick(page.name)}
                      sx={{
                        // color: "white",
                        display: "block",
                        whiteSpace: "nowrap",
                        color: recentNav === page.name ? "white" : "#A5A9B1",
                        fontWeight: recentNav === page.name ? "bold" : "normal",
                        textTransform: "none",
                      }}
                    >
                      {page.name}
                    </Button>{" "}
                  </Link>
                ))}
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  gap: 1,
                }}
              >
                {recentNav !== "Start page" && (
                  <FormGroup>
                    <FormControlLabel
                      sx={{ whiteSpace: "nowrap" }}
                      control={
                        <Switch
                          checked={mainNavbar}
                          onChange={switchmainNavbar}
                          color="secondary"
                        />
                      }
                      label="Development Mode"
                    />
                  </FormGroup>
                )}
                {recentNav !== "Start page" && (
                  <FormControl
                    sx={{
                      minWidth: 95,
                      maxHeight: 35,
                      backgroundColor: "#D6D6D4",
                      borderRadius: "6px",
                      marginX: { md: "40px", sm: "20px" },
                    }}
                  >
                    <Select
                      value={select}
                      onChange={handleNav}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      sx={{ maxHeight: 38 }}
                    >
                      <MenuItem value="">IPL</MenuItem>
                      <MenuItem value={20}>HELL</MenuItem>
                      <MenuItem value={30}>ANT</MenuItem>
                    </Select>
                  </FormControl>
                )}{" "}
              </Box>
              <Box sx={{ flexGrow: 0, xs: { display: "block" } }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/boy.png" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>{" "}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
