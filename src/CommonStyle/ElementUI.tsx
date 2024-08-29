import React from 'react'
import { styled } from '@mui/material/styles';
import { Button, Link } from '@mui/material';

export const PaddingLeftRight64 = styled('div')({
    padding: "0px 64px",
    height: "72px",
    borderBottom: "solid 1px #20293729",
});

export const StyleLinkNavbar = styled(Link)({
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#202937",
    marginRight: "32px"
});

export const StyleButtonWhiteBlue = styled(Button)({
    backgroundColor: 'white',
    color: '#2765EC',
    borderRadius: '6px',
    padding: '8px, 20px, 8px, 20px',
    border: 'solid 2px #2765EC',
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
});

export const StyleButtonBlueWhite = styled(Button)({
    backgroundColor: '#2765EC',
    color: 'white',
    borderRadius: '6px',
    padding: '8px, 20px, 8px, 20px',
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
});