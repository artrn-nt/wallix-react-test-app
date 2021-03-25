export const createUserPageVariants = {
	animate: {
		transition: {
			duration: 0.3,
			ease: 'easeOut',
			staggerChildren: 0.45,
		},
	},
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
	},
}

export const formContainerVariants = {
	initial: {
		opacity: 0,
		y: 25,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
}
