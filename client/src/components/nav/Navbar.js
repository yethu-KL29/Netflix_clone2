import React from 'react'
import { Button, Input, TextField, Typography, InputLabel, Tab, Tabs, Toolbar, AppBar, IconButton } from '@mui/material'
import Logo from "../nav/Logo.png"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

export const Navbar = () => {
    const [value, setvalue] = useState()
    return (
        <div className='Navbar'>
            <div className='left-content'>
                <div className='logo'>
                    <img src={Logo}></img>
                </div>
                <div>
                   
                        <Tabs>
                        
                       
                       
                     
                        
                        <Tab label="Home" sx={{color:"white",width: '3vw'}} />
                   
                        
                       

                     </Tabs>
                    
                </div>

            </div>
            <div className='right-content'>

                <IconButton sx={{ color: 'red', width: '3vw' }}>
                    <PowerSettingsNewIcon />
                </IconButton>
              
            </div>


        </div>
    )
}
