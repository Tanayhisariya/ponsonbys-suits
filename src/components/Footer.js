import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
const Footer = () => {
  return (
   <>
   <Box sx={{textAlign:"center" ,bgcolor:'black' , color:'white' , p:2}}>
    <Box sx={{my:2 , '& svg':{fontSize:"60px" , cursor:'pointer' , mr:2} , '& svg:hover':{color:'blue' , transform:'translateX(5px)' , transition:'all 400ms'}}}>
<LinkedInIcon/>
<GitHubIcon/>
<TwitterIcon/>
    </Box>
          <Typography varient="h5" sx={{"@media (max-width:600px)":{fontSize:'1 rem'}}}>
            All Rights Reserved &copy; Tanay Hisariya
          </Typography>
   </Box>
   </>
  )
}

export default Footer
