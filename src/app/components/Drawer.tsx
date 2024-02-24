import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { BsCardList } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLooks } from "react-icons/md";
import { GiClothes, GiWingfoot } from "react-icons/gi";
import { FaAccessibleIcon } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
 
export function DrawerWithNavigation() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <React.Fragment>

      <button className="ml-3" onClick={openDrawer}><FcCustomerSupport/> </button>

      <Drawer placeholder={""} open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
        
          <IconButton placeholder={""} variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List placeholder={""}>
          
          <ListItem placeholder={""}>
            <ListItemPrefix placeholder={""}>
            <LuLayoutDashboard  />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem placeholder={""}>
            <ListItemPrefix placeholder={""}>
            <MdLooks />
            </ListItemPrefix>
            Lookup
          </ListItem>
          <ListItem placeholder={""}>
            <ListItemPrefix placeholder={""}>
            <GiClothes />
            </ListItemPrefix>
            Clothes
          </ListItem>
          <ListItem placeholder={""}>
            <ListItemPrefix placeholder={""}>
            <GiWingfoot />
            </ListItemPrefix>
            Footware
          </ListItem>
          <ListItem placeholder={""}>
            <ListItemPrefix placeholder={""}>
            <FaAccessibleIcon />
            </ListItemPrefix>
            Accessories
          </ListItem>
          <ListItem placeholder={""}>
            <ListItemPrefix placeholder={""}>
            <BsCardList />
            </ListItemPrefix>
            About
          </ListItem>
     
        </List>
        <Button variant="outlined" placeholder={""} className="mt-3 ml-5" size="sm">
          Access your account
        </Button>
      </Drawer>
    </React.Fragment>
  );
}