import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";

const Personal = () => {

    const [val , setVal]=useState(true)
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div> 
 <div style={{backgroundColor:' #0a192f',height:'91vh'}}>
        {isMatch ? (<div></div>) : (
            <div className="build_thing">
            <div className="icon_list">
              <ul>
                <li>
                  <a><GitHubIcon /></a>
                </li>
                <li>
                  <a><InstagramIcon /></a>
                </li>
                <li>
                  <a><FacebookIcon /></a>
                </li>
                <li>
                  <a><LinkedInIcon /></a>
                </li>
                <li>
                  <a><GoogleIcon /></a>
                </li>
                <li className="line"></li>
              </ul>
            </div>
              
          </div>
        ) }
    
      
      <div className="names">
          <p>Hi , My name is </p>
          <h1 style={{fontSize:'3rem',color:'rgb(209, 212, 204)'}}>Chithirai Vel</h1>
          <h1 style={{fontSize:'3rem'}}>I build things for the web.</h1>
          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            <p>on building accessible, human-centered products at Upstatement.</p>
          </p>
            <Button variant="outlined">Check out my Course</Button>
        </div>
        </div>
    </div>
  );
};

export default Personal;
