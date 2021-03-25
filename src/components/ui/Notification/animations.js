const animationVariants = {
	initial: {
		opacity: 0,
		y: 16,
		translateX: '-50%',
	},
	animate: {
		opacity: 1,
		y: 0,
		translateX: '-50%',
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
}

export default animationVariants
