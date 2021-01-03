import React from 'react'
import { Link } from 'react-router-dom'
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Container,
	Carousel,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductPage = ({ match }) => {
	const product = products.refridgerators.find(p => p._id === match.params.id)
	return (
		<div>
			<Link to='/' className='btn btn-dark'>
				Go Back
			</Link>
			<Container>
				<Row className='pt-4'>
					<Col md={7}>
						<Carousel>
							{product.images.map(img => (
								<Carousel.Item>
									<Image src={img} fluid />
								</Carousel.Item>
							))}
						</Carousel>
					</Col>
					<Col md={5}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>
									<strong>{product.brand} </strong>
									{product.name}
								</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating
									value={product.rating}
									text={`${product.numReviews} reviews`}
								/>
							</ListGroup.Item>
							<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
							<ListGroup.Item>
								Description: {product.description}
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
				<Row className='pt-4'>
					<Col md={8}>
						<ul>
							{product.features.map(feature => (
								<li>{feature}</li>
							))}
						</ul>
					</Col>
					<Col md={4}>
						<Card>
							<ListGroup>
								<ListGroup.Item>
									<Row>
										<Col>Price:</Col>
										<Col>
											<strong>${product.price}</strong>
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Status:</Col>
										<Col>
											{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Button
										className='btn-block'
										type='button'
										disabled={product.countInStock === 0}>
										Add To Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ProductPage
