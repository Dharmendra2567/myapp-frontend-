import { Facebook, FacebookRounded, FacebookSharp, Instagram, Twitter, WhatsApp } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <Container className='customMargin' sx={{width:'850%'}}>
        <Box p={5} boxShadow={5} marginTop={5} borderRadius={5}>
            <Typography variant='h1' color='success.main' className='text-decoration-underline'>
                Contact
            </Typography>
            <Grid container spacing={5} padding={5}>
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="logo192.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Facebook/>
        <FacebookRounded/>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="logo192.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <FacebookSharp/>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="logo192.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <WhatsApp/>
        </IconButton>
        <Button size="small" startIcon={<Twitter/>}>Share</Button>
        <Button size="small" endIcon={<Instagram/>}>Learn More</Button>
      </CardActions>
    </Card>
                </Grid>
            </Grid>
        </Box>
    </Container>

    <Footer/>
    </>
  )
}

export default Contact