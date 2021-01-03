import React from 'react'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
import products from '../products'

const HomePage = () => {
	return (
		<div>
			<h1>Latest Products</h1>
			<Row>
				{products.refridgerators.map(fridge => (
					<Col sm={12} md={6} lg={4}>
						<Product product={fridge} />
					</Col>
				))}
			</Row>
		</div>
	)
}

export default HomePage
