import './Hero.css'
import {Box, Typography} from '@mui/material';
import React from 'react'

const Hero = () => {
    return(
        <>
            <Box id='hero'>
                <Typography variant='h1' id='h1-tag'>The Rick and Morty API</Typography>
            </Box>
        </>
    )
}
export default Hero