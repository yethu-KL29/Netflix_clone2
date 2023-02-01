import React from 'react'
import { Tab, Tabs, Toolbar, AppBar, IconButton } from '@mui/material'
import Logo from "../nav/Logo.png"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from 'react';
import './Navbar.css'

export const Navbar = () => {

    return (
        <div className='Navbar'>
            <div className='container'>
                <div className='container-left'>
                    <img src={Logo} alt="Logo" />   
                     <Tabs  TabIndicatorProps={{ sx: { display: 'none' } }}
                     sx={{
                        '& .MuiTabs-flexContainer': {
                          flexWrap: 'wrap',
                        },
                      }}
                     
                    >
                        <Tab sx={{ color:'white'}} label="HomePage" />
                        <Tab sx={{ color:'white'}} label="About" />
                        <Tab sx={{ color:'white'}} label="Contact" />
                        <Tab sx={{ color:'white'}} label="Login" />
                        <Tab sx={{ color:'white'}} label="Register" />

                    </Tabs>
                
                </div>
                
                   
            </div>


        </div>
    )
}
