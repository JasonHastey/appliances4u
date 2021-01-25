import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'admin user',
		email: 'admin@mail.com',
		password: bcrypt.hashSync('secret', 10),
		isAdmin: true,
	},
	{
		name: 'joe shmo',
		email: 'joe@mail.com',
		password: bcrypt.hashSync('secret', 10),
	},
	{
		name: 'jane shmo',
		email: 'jane@mail.com',
		password: bcrypt.hashSync('secret', 10),
	},
]
export default users
