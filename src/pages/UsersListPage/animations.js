import { blueGrey } from '@material-ui/core/colors'

export const usersListPageVariants = {
	exit: {
		opacity: 0,
		y: 25,
		transition: {
			delay: 0.15,
			duration: 0.3,
			ease: 'easeOut',
		},
	},
}

export const titleVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.45,
			duration: 0.3,
			ease: 'easeOut',
		},
	},
}

export const usersListVariants = {
	initial: {
		opacity: 0,
		y: 25,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: 'easeOut',
		},
	},
}
