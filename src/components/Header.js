import React from 'react'
import { useState } from 'react';
import { AppBar, Box,Divider,Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import CheckroomIcon from '@mui/icons-material/Checkroom';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import "./Headerstyle.css";
const Header = () => {
  const [mobileOpen , setmobileOpen] = useState(false);

  const handleonclickdrawer = ()=>{
    setmobileOpen(!mobileOpen)
  }
  const drawer = (
     <Box onClick={handleonclickdrawer} sx={{textAlign :'center'}}>
    <Typography color={'goldenrod'} variant="h6" component={"div"} sx ={{flexGrow : 1 , my:2 }}> 
    <CheckroomIcon/> Ponsonbys</Typography>
       <Divider/>
          <ul className="mobile-suits" >
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/suits">Suits</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/contact">Contact</Link></li>
          </ul>
     </Box>
  )
  return (
    <>
    <Box>
      <AppBar component={'nav'} sx={{bgcolor : "black"}}>
        <Toolbar>
    <IconButton color="inherit" aria-label='open drawer' edge="start" sx={{mr : 2 , display :{sm :"none"}}} onClick={handleonclickdrawer}>
          <MenuIcon/>
    </IconButton>
        <Typography color={'goldenrod'} variant="h6" component={"div"} sx ={{flexGrow : 1}}> <CheckroomIcon/> Ponsonbys</Typography>
        <Box sx={{display:{ xs: "none" , sm:"block"}}}>
          <ul className="navigation-suits" >
            <li className="main-suits"><Link to = "/">Home</Link></li>
            <li className="main-suits"><Link to = "/suits">Suits</Link></li>
            <li className="main-suits"><Link to = "/about">About</Link></li>
            <li className="main-suits"><Link to = "/contact">Contact</Link></li>
          </ul>
        </Box>
        </Toolbar>
      </AppBar>
      <Box compnent="nav">
           <Drawer varient="temporary" open={mobileOpen} onClose={handleonclickdrawer} sx={{display:{xs:'block' , sm:'none' , "& .MuiDrawer-paper":{boxSizing:"border-box" , width:"240px"}}}}>
            {drawer}
           </Drawer>
      </Box>
      <Toolbar/>
        
      </Box>     
    </>
  )
}

export default Header
