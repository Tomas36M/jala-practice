import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link className='aa' to='/'><Navbar.Brand>Navbar</Navbar.Brand></Link>
                    <Nav className="me-auto">
                        <Link className='aa' to='/post'><Nav>Post</Nav></Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </div>
    )
}

export default NavBar