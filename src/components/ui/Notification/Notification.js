import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Container } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import { motion } from 'framer-motion'

import notificationVariants from './animations'

const useStyles = makeStyles(() => ({
	default: {
		position: 'fixed',
		top: 80,
		left: '50%',
		width: '100%',
		maxWidth: 640,
		borderRadius: '8px',
		overflow: 'hidden',
	},
}))

const Notification = ({ success, message, setMountNotification }) => {
	const classes = useStyles()

	const [countDown, setCountDown] = useState(5)

	const timeOutRef = useRef(null),
		intervalRef = useRef(null)

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setCountDown((prev) => {
				const count = prev <= 0 ? 0 : --prev
				return count
			})
		}, 1000)

		timeOutRef.current = setTimeout(() => {
			setMountNotification(false)
		}, 5500)

		return () => {
			clearTimeout(timeOutRef.current)
			timeOutRef.current = null
			clearInterval(intervalRef.current)
			intervalRef.current = null
			setMountNotification(false)
		}
	}, [setMountNotification])

	if (typeof window !== undefined || typeof window === 'object') {
		if (success) {
			return ReactDOM.createPortal(
				<Container
					className={classes.default}
					component={motion.div}
					variants={notificationVariants}
					initial='initial'
					animate='animate'
				>
					<Alert severity='success'>
						<AlertTitle>Success</AlertTitle>
						{`${message} Disappearing in ${countDown} seconds...`}
					</Alert>
				</Container>,
				document.getElementById('notifications')
			)
		}

		return ReactDOM.createPortal(
			<Container
				className={classes.default}
				component={motion.div}
				variants={notificationVariants}
				initial='initial'
				animate='animate'
			>
				<Alert severity='error'>
					<AlertTitle>Error</AlertTitle>
					{`${message} Disappearing in ${countDown} seconds...`}
				</Alert>
			</Container>,
			document.getElementById('notifications')
		)
	}
}

export default Notification
