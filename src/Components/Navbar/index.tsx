import React from 'react'
import { Box, Button, Link, Stack } from '@mui/material'
import { styled } from '@mui/material/styles';

import logo from '../../images/MotionLogo 1.png'
import { PaddingLeftRight64, StyleButtonBlueWhite, StyleButtonWhiteBlue, StyleLinkNavbar } from '../../CommonStyle/ElementUI';

function Navbar() {
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (
        <>
            <PaddingLeftRight64>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                    <Box
                        sx={{
                          
                        }}
                        onClick={preventDefault}
                    >
                        <StyleLinkNavbar href="#" sx={{ textDecoration: 'none' }}>Fuel Card</StyleLinkNavbar>
                        <StyleLinkNavbar href="#" sx={{ textDecoration: 'none' }}>Factoring</StyleLinkNavbar>
                        <StyleLinkNavbar href="#" sx={{ textDecoration: 'none' }}>Fleet Management</StyleLinkNavbar>
                    </Box>
                    <Box
                        component="img"
                        sx={{
                            height: 43,
                            width: 125,
                            margin: 'auto 0',
                        }}
                        alt="The logo"
                        src={logo}
                    />
                    <Stack spacing={2} direction="row">
                        <StyleButtonWhiteBlue>Get Started</StyleButtonWhiteBlue>
                        <StyleButtonBlueWhite>Login</StyleButtonBlueWhite>
                    </Stack>
                </Box>
            </PaddingLeftRight64>
        </>
    )
}

export default Navbar
