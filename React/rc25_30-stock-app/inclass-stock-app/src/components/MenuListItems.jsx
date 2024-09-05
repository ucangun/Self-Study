import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const icon = (name) => `/assets/navbar/${name}.svg`;

const links = [
  {
    title: "Dashboard",
    url: "/stock",
    // icon:"/assets/navbar/ic_analytics.svg",
    icon: icon("ic_analytics"),
  },
  {
    title: "Firms",
    url: "/stock/firms",
    icon: icon("firms"),
  },
  {
    title: "Brands",
    url: "/stock/brands",
    icon: icon("brand"),
  },
  {
    title: "Purchases",
    url: "/stock/purchases",
    icon: icon("purchase"),
  },
  {
    title: "Sales",
    url: "/stock/sales",
    icon: icon("sales"),
  },
  {
    title: "Products",
    url: "/stock/products",
    icon: icon("ic_cart"),
  },
];

const MenuListItems = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Toolbar />
      <List>
        {links.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.url)}
              sx={{
                color: "secondary.main",
                borderRadius: "1rem",
                transition: "all 0.4s ease-in-out",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  color: "white",
                },
              }}
            >
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  mr: 2,
                  mask: `url(${item.icon}) no-repeat center / contain `,
                  bgcolor: "currentColor",
                }}
              />
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
