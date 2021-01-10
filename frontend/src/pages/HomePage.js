import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomePage = ({match}) => {
    const [products, set_products] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products')
            set_products(data)
        }
        fetchProducts()
	},[products])
	
	return (
		<div>
			<h1>Latest Products</h1>
			<Row>
				{products && products.map(fridge => (
					<Col sm={12} md={6} lg={4}>
						<Product product={fridge} />
					</Col>
				))}
			</Row>
		</div>
	)
}

export default HomePage
