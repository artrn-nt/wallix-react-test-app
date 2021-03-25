import { createContext, useContext, useReducer } from 'react'

import usersReducer from '../reducers/usersReducer'
import usersInitialState from './usersInitialState'

const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
	const [usersState, usersDispatch] = useReducer(
		usersReducer,
		usersInitialState
	)

	return (
		<UsersContext.Provider value={{ usersState, usersDispatch }}>
			{children}
		</UsersContext.Provider>
	)
}

export const useUsersContext = () => useContext(UsersContext)
