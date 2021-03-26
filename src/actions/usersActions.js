import { v4 as uuid4 } from 'uuid'

import {
	USERS_GET_REQUEST,
	USERS_GET_SUCCESS,
	USERS_GET_FAIL,
	USER_POST_REQUEST,
	USER_POST_SUCCESS,
	USER_POST_FAIL,
	USER_DELETE_REQUEST,
	USER_DELETE_SUCCESS,
	USER_DELETE_FAIL,
	USERS_LIST_RESET,
} from '../types/usersTypes'

import { users } from '../contexts/usersInitialState'

// Je reproduis ici artificiellement le caractère asynchrone d'une requête vers une API externe
// à l'aide de la fonction setTimeout().
// Voir en bas du fichier la façon dont j'aurais procédé si il s'agissait de données non statiques.

// 1 - Get all users - GET
export const getAllUsers = async (dispatch) => {
	const usersFromStorage = localStorage.getItem('users')
		? JSON.parse(localStorage.getItem('users'))
		: users
	try {
		dispatch({ type: USERS_GET_REQUEST })

		setTimeout(() => {
			dispatch({ type: USERS_GET_SUCCESS, payload: usersFromStorage })
		}, 1800)
	} catch (err) {
		// On imagine ici que la constante data stock un objet renvoyé par le back-end de type (format JSON)
		// { success: false, message: 'That's not you. That's us. Please retry in a few moment.'}
		// avec un status code 500 - Internal Server Error

		// const { data: { message } } = err.response
		// Auquel cas le dispatch aurait l'air de : dispatch({ type: USERS_GET_FAIL, payload: message })

		dispatch({
			type: USERS_GET_FAIL,
			payload: "That's not you. That's us. Please retry in a few moment.",
		})
	}
}

// 2 - Create a single user - POST
export const createSingleUser = async ({ name, email, role }, dispatch) => {
	const usersFromStorage = localStorage.getItem('users')
		? JSON.parse(localStorage.getItem('users'))
		: users
	try {
		dispatch({ type: USER_POST_REQUEST })

		const newUser = { _id: uuid4(), name, email, role }
		const updatedUsers = [...usersFromStorage, newUser]

		setTimeout(() => {
			dispatch({
				type: USER_POST_SUCCESS,
				payload: updatedUsers,
			})

			localStorage.setItem('users', JSON.stringify(updatedUsers))
		}, 1800)
	} catch (err) {
		dispatch({
			type: USER_POST_FAIL,
			payload: 'User creation failed.',
		})
	}
}

// 3 - Delete a single user - DELETE
export const deleteSingleUser = async (id, dispatch) => {
	const usersFromStorage = localStorage.getItem('users')
		? JSON.parse(localStorage.getItem('users'))
		: users
	try {
		dispatch({ type: USER_DELETE_REQUEST })

		const updatedUsers = usersFromStorage.filter((user) => user._id !== id)

		setTimeout(() => {
			dispatch({
				type: USER_DELETE_SUCCESS,
				payload: updatedUsers,
			})

			localStorage.setItem('users', JSON.stringify(updatedUsers))
		}, 1800)
	} catch (err) {
		dispatch({
			type: USER_DELETE_FAIL,
			payload: 'User deletion failed.',
		})
	}
}

export const resetUsersList = (dispatch) => {
	dispatch({ type: USERS_LIST_RESET })
}

// Si l'on faisait réellement appel à une API externe voici comment j'aurais écrit une requête type POST
// avec axios par exemple (on pourrait également utiliser l'API fetch à la place)

// export const createSingleUser = async ({ name, email, role }, dispatch) => {
// 	try {
// 		dispatch({ type: USER_POST_REQUEST })

// 		const config = {
// 			headers: {
// 				'Content-Type': 'application/json'
// 			}
// 		}

// 		await axios.post('/api/users', { name, email, role }, config)

// 		dispatch({ type: USER_POST_SUCCESS })

// 	} catch (err) {
// 		// const { data: { message } } = err.response

// 		dispatch({
// 			type: USER_POST_FAIL,
// 			payload: message,
// 		})
// 	}
// }
