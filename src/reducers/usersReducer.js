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

const usersReducer = (state, { type, payload }) => {
	switch (type) {
		case USERS_GET_REQUEST:
			return { isLoading: true }
		case USERS_GET_SUCCESS:
			return { isLoading: false, users: payload }
		case USERS_GET_FAIL:
			return { isLoading: false, error: payload }
		case USER_POST_REQUEST:
			return { isLoading: true }
		case USER_POST_SUCCESS:
			return {
				isLoading: false,
				users: payload,
				response: { success: true, message: 'User successfully created.' },
			}
		case USER_POST_FAIL:
			return {
				isLoading: false,
				error: payload,
				response: { success: false, message: 'User creation failed.' },
			}
		case USER_DELETE_REQUEST:
			return { isLoading: true }
		case USER_DELETE_SUCCESS:
			return {
				isLoading: false,
				users: payload,
				response: { success: true, message: 'User successfully deleted.' },
			}
		case USER_DELETE_FAIL:
			return {
				isLoading: false,
				error: payload,
				response: { success: false, message: 'User deletion failed.' },
			}
		case USERS_LIST_RESET:
			return {
				isLoading: null,
				users: [],
			}
		default:
			return state
	}
}

export default usersReducer
