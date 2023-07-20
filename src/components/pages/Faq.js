// import { StayPrimaryLandscape } from '@mui/icons-material'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

const Faq = () => {
  return (
    <>
    <Navbar/>
    <Container className='customMargin'>
        <Box padding={3} bgcolor='secondary.light'>
        <Box display={'flex'} sx={{backgroundColor:'rgba(255,255,255,50%)'}}>
           <Box padding={5} borderRadius={10} borderRight={5} sx={{backgroundColor:'rgba(255,255,255,20%)'}}>
            <Typography variant='h3'>
            Q1
            </Typography>
            </Box>
           <Box margin={4}>
            <Typography variant='h4' sx={{textDecoration:'underline'}}>
                Question: Where are you located?
            </Typography>
            <Typography variant='h5' >
               Answer: We are located at jamal,kantipath, Kathmandu above Nabil bank.
            </Typography>
           </Box>
        </Box>
        <Box padding={5}  boxShadow={5} bgcolor={'white'} width={'50%'} margin={'auto'}
        marginTop={5}>
            <Typography variant='h5'>
            Enquiry form
            </Typography>
            <TextField label={'E-mail'} fullWidth required/>
            <TextField label={'subject'} fullWidth required/>
            <TextField label={'body'} fullWidth required multiline rows={3} variant='filled'/>
            <Button variant='contained' fullWidth color='secondary' disableRipple>Submit</Button>
        </Box>
        </Box>
    </Container>

    <Footer/>
    </>
  )
}

export default Faq