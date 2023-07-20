import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
    <Navbar/>
    <h1 className='text-secondary'>About</h1>
    <Container className='text-center d-flex justify-content-evenly customMargin'>
    <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="logo192.png" />
      <Card.Body>
        <Card.Title>Mr.Singhania</Card.Title>
        <Card.Text>
            CEO
        </Card.Text>
        <Button variant="primary">Follow<i className='bi bi-facebook'/></Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/
       images?q=tbn:ANd9GcRUEJwJ6kaM-4iuwgIercDw31SyKiknthPnA_MYgNm4mQ&s" />
      <Card.Body>
        <Card.Title>Mr.Singhania</Card.Title>
        <Card.Text>
            CEO
        </Card.Text>
        <Button variant="primary">Follow<i className='bi bi-facebook'/></Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/
       images?q=tbn:ANd9GcRUEJwJ6kaM-4iuwgIercDw31SyKiknthPnA_MYgNm4mQ&s" />
      <Card.Body>
        <Card.Title>Mr.Singhania</Card.Title>
        <Card.Text>
            CEO
        </Card.Text>
        <Button variant="primary">Follow<i className='bi bi-facebook'/></Button>
      </Card.Body>
    </Card>
        </Col>
    </Row>
    </Container>

    <Footer/>
    </>
  )
}

export default About