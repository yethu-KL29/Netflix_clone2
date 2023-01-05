import React from 'react'
import { Button, Input, TextField, Typography, InputLabel, Tab, Tabs, Toolbar, AppBar, IconButton } from '@mui/material'
import Logo from "../nav/Logo.png"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import "./Navbar.css"

export const Navbar = () => {
    const [value, setvalue] = useState()
    return (
        <div className='Navbar'>
            <div className='content'>
                <div className='logo'>
                    {/* <img src={Logo}></img> */}
                </div>
                <div>
                    <Toolbar sx={{
                        width: "100vw"
                    }}>
                        <Tabs TabIndicatorProps={{ style: { background: 'red' } }} value={value} onChange={(e, val) => {
                            setvalue(val)
                        }} sx={{ backgroundColor: "inherit" }}>
                            <Tab sx={{
                                color: "white",
                               
                            }} label="Home" />

                            <Tab LinkComponent={Link} to="/series" sx={{
                                color: "white",
                                
                            }} label="series" />

                            <Tab LinkComponent={Link} to="/movies" sx={{
                                color: "white",
                               
                            }} label="Movies" />

                            <Tab sx={{
                                color: "white",
                               
                            }} label="popular" />
                            <Tab sx={{
                                color: "white",
                               
                            }} label="My List" />

                        </Tabs>
                    </Toolbar>
                </div>

            </div>
            <div className='logout'>

                <IconButton sx={{ color: 'red', width: '3vw' }}>
                    <PowerSettingsNewIcon />
                </IconButton>
            </div>


        </div>
    )
}
