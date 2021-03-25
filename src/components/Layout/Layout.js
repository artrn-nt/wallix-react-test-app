import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography, Box } from '@material-ui/core'
import GroupIcon from '@material-ui/icons/Group'
import PersonAddIcon from '@material-ui/icons/PersonAdd'

import { useUsersContext } from '../../contexts/usersContext'
import Notification from '../ui/Notification/Notification'

import useStyles from './LayoutStyles'

const Layout = ({ children }) => {
	const { usersState } = useUsersContext()

	const classes = useStyles()

	const [mountNotification, setMountNotification] = useState(null)

	useEffect(() => {
		if (usersState.response) {
			setMountNotification(true)
		}
	}, [usersState])

	return (
		<Container className={classes.main__container} maxWidth='lg'>
			{usersState.response && mountNotification && (
				<Notification
					success={usersState.response.success}
					message={usersState.response.message}
					setMountNotification={setMountNotification}
				/>
			)}
			<header className={classes.header}>
				<Link to='/'>
					<Typography
						variant='h5'
						component='h1'
						color='textSecondary'
						fontWeight='fontWeightBold'
					>
						<Box
							fontWeight='fontWeightBold'
							color='text.primary'
							letterSpacing={2}
						>
							Users Manager
						</Box>
					</Typography>
				</Link>
				<nav>
					<ul className={classes.links__list}>
						<li>
							<Link to='/'>
								<GroupIcon />
								<Typography component='span'>Users list</Typography>
							</Link>
						</li>
						<li>
							<Link to='/user-create'>
								<PersonAddIcon />
								<Typography component='span'>Create user</Typography>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main className={classes.main__content}>{children}</main>
			<footer className={classes.footer}>
				<Typography component='span' align='center'>
					Users Manager &copy; 2021
				</Typography>
			</footer>
		</Container>
	)
}

export default Layout
