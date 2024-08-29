import { Box, Stack } from '@mui/material'
import React from 'react'
import { StyleButtonBlueWhite, StyleButtonWhiteBlue } from '../../CommonStyle/ElementUI'

function Header() {
  return (
    <>
      <Box
        component="img"
        sx={{
          padding: '112px 64px 60px 64px',
          gap: '80px'
        }}
      >
        <Box>
          Fuel Cards, Fleet Management, Financial Solutions Tailored to Your Business
        </Box>
        <Box>
          Keep Moving with Motion
        </Box>
        <Box>
          Join leaders in the logistics sector who trust Motion to enhance operational efficiencies and grow profitability. Our tailored solutions adapt to your unique challenges, powering potential through innovation and expertise.
        </Box>
        <Stack spacing={2} direction="row">
          <StyleButtonWhiteBlue>Get Started</StyleButtonWhiteBlue>
          <StyleButtonBlueWhite>Login</StyleButtonBlueWhite>
        </Stack>
        <Box>
          Trusted by 1000+ companies
          Top Discounts Across North America
          Fastest delivery
        </Box>
      </Box>
    </>
  )
}

export default Header