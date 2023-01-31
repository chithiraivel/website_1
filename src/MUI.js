import * as React from "react";
import './MUiI.css'
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import a from '../src/Assets/25.jpg'
import Personal from "./Personal";


function MUI() {
  const [value, setVal] = React.useState();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const arr1 = ["PRODUCTS","SERVICES","CONTACTS","ABOUT US"];
  const arr2 = ["LOGIN","HOME","PRODUCTS","SERVICES","CONTACTS","ABOUT US","LOGOUT"];

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#0a192f" }}>
        <Toolbar>
          <img src={a} style={{height:'40px',width:'40px',borderRadius:'30px'}}/>
          
          {isMatch ? (
            <>
            <Typography sx={{margin:'auto',color:'lightblue',fontFamily:'cursive'}}>CHITHIRAI VEL</Typography>
              <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >
                {arr2.map( (data) => 
                 <List sx={{width:'200px'}}>
                 <ListItemButton>
                   <ListItemIcon>
                     <ListItemText  className="left_side_bar">{data}</ListItemText>
                   </ListItemIcon>
                 </ListItemButton>
               </List>
                )}
              </Drawer>

              <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{marginLeft:'auto',color:'white'}}>
                <MenuOpenIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setVal(value)}
                indicatorColor="secondary"
              
              >
                {arr1.map( (data) =>  <Tab label={data} ></Tab>)}
              </Tabs>

              <Button variant="outlined" sx={{ marginLeft: "auto",color:'white' }}>
                Login
              </Button>
              <Button variant="outlined" sx={{ marginLeft: "20px",color:'white' }}>
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
  
    </div>
  );
}
export default MUI;
