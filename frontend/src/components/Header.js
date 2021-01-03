import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>Appliances4U</Navbar.Brand>
					</LinkContainer>
					<Nav className='ml-auto'>
						<LinkContainer to='/cart'>
							<Nav.Link>
								<i className='fas fa-shopping-cart' /> Cart
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/login'>
							<Nav.Link>
								<i className='fas fa-user' /> Sign In
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
