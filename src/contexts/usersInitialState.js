import { v4 as uuid4 } from 'uuid'

export const users = [
	{
		_id: uuid4(),
		name: 'Edouard',
		email: 'edouard@yahoo.fr',
		role: 'Auditor',
	},
	{
		_id: uuid4(),
		name: 'Alice',
		email: 'alice@gmail.com',
		role: 'Administrator',
	},
	{
		_id: uuid4(),
		name: 'Hector',
		email: 'hector@aol.com',
		role: 'Integrator',
	},
]

const usersInitialState = {
	isLoading: null,
	users: [],
}

export default usersInitialState
