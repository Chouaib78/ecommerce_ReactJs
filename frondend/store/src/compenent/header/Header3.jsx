import {
  Box,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
  IconButton,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { useState } from "react";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

import MenuItem from "@mui/material/MenuItem";

import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  Close,
  Home,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Links from "./Links";


export default function header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useState();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt:3,
      }}
    >
      <Button
        className="border"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{}}
      >
        <WindowIcon sx={{ color: "black" }} />
        <Typography
          sx={{ padding: "0", textTransform: "capitalize", color: "black" }}
        >
          Categorie
        </Typography>
        <Box flexGrow={1} />
        <KeyboardArrowRightOutlinedIcon sx={{ color: "black" }} />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>

        <MenuItem>
          <ListItemIcon>
            <SportsEsportsOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText>Accesoire</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ElectricBikeOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cadeaux</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LaptopChromebookOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText>Special</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MenuBookOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
        </MenuItem>
      </Menu>
     {useMediaQuery("(min-width:1000px)")&&(
       <Stack gap={10} direction={"row"} alignItems={"center"}>
          <Links title={"Home"}/>
      <Links title={"Mege Menu"}/>
      <Links title={"product"}  />
      <Links title={"New"}/>
      <Links title={"Solde"}/>
      <Links title={"My Account"}/>

       </Stack>
     ) }
    
      {useMediaQuery("(max-width:1000px)")&& (<IconButton onClick={toggleDrawer("top", true)}>
         
         <MenuIcon />
       </IconButton>
      )}
     

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
       
      >
        <Box
          sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {[
            { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
            { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
            {
              mainLink: "full screen menu",
              subLinks: ["Link 1", "Link 2", "Link 3"],
            },
            { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
            {
              mainLink: "user account",
              subLinks: ["Link 1", "Link 2", "Link 3"],
            },
            {
              mainLink: "vendor account",
              subLinks: ["Link 1", "Link 2", "Link 3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.subLinks.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}
