import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'

dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
	res.send('api is connected')
})
app.get('/api/products', (req, res) => {
	res.json(products)
})

app.get('/api/products/:id', (req, res) => {
	const product = products.refridgerators.find(p => p._id === req.params.id)
	res.json(product)
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
