import React from 'react'
import { Tab, Tabs, Toolbar, AppBar, IconButton } from '@mui/material'
import Logo from "../nav/Logo.png"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
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
                        <Tab sx={{ color:'white'}} label="Homepage" />
                        <Tab sx={{ color:'white'}} label="Series" />
                        <Tab sx={{ color:'white'}} label="Movies" />
                        <Tab sx={{ color:'white'}} label="New and Popular" />
                        <Tab sx={{ color:'white'}} label="My List" />

                    </Tabs>
                
                </div>
                <div className='container-right'>
                   
                    <IconButton>
                        <SearchIcon sx={{ color:'white'}}/>
                    </IconButton>
                    <IconButton>
                    <NotificationsActiveIcon sx={{ color:'white'}}/>
                    </IconButton>
                    <img src='data:image/jpeg;base64,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'></img>
                    <div className='profile'>
                        <IconButton className='pro-icon'>
                            <ArrowDropDownIcon sx={{ color:'white'}}/>
                        </IconButton>
                        <div className='options'>
                            <span>settings</span>
                            <span>logout</span>
                        </div>

                    </div>
                    <IconButton>
                        <PowerSettingsNewIcon sx={{ color:'white'}}/>
                    </IconButton>
                </div>
                
                   
            </div>


        </div>
    )
}
