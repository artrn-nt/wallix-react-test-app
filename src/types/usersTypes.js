// Get all users from users list
export const USERS_GET_REQUEST = 'USERS_GET_REQUEST'
export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS'
export const USERS_GET_FAIL = 'USERS_GET_FAIL'

// Add single user to users list
export const USER_POST_REQUEST = 'USER_POST_REQUEST'
export const USER_POST_SUCCESS = 'USER_POST_SUCCESS'
export const USER_POST_FAIL = 'USER_POST_FAIL'

// Remove single user from users list
export const USER_DELETE_REQUEST = 'USER_DELETE_REQUEST'
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS'
export const USER_DELETE_FAIL = 'USER_DELETE_FAIL'

// Reset the users state to avoid flashing when usersListPage.js mount
export const USERS_LIST_RESET = 'USERS_LIST_RESET'
