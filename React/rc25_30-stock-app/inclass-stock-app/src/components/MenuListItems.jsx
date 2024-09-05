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
      <Divider />
      <List>
        {links.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton onClick={() => navigate(item.url)}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              {/* <Box 
                sx={{
                  backgroundImage: `url(${item.icon})`,
                  backgroundPosition:"center",
                  backgroundSize:"cover",
                  backgroundRepeat:"no-repeat",
                  width:"24px",
                  height:"24px",
                  backgroundColor:"red",
                  mr:2
                }}
             /> */}

              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  mr: 2,
                  mask: `url(${item.icon}) no-repeat center / contain `,
                  bgcolor: "red",
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
