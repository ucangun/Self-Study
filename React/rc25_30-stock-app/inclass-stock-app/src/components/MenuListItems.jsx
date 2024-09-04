import React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

const links = [
  {
    title: "Dashboard",
    url: "/stock",
  },
  {
    title: "Purchases",
    url: "purchases",
  },
  {
    title: "Sales",
    url: "sales",
  },
  {
    title: "Firms",
    url: "firms",
  },
  {
    title: "Brands",
    url: "brands",
  },
  {
    title: "Products",
    url: "products",
  },
];

const MenuListItems = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {links.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton onClick={() => navigate(item.url)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
