import React, { useEffect, Fragment } from 'react'
import {
	Container,
	Typography,
	List,
	ListItem,
	Divider,
	CircularProgress,
	ListItemAvatar,
	ListItemText,
	Avatar,
	IconButton,
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { motion } from 'framer-motion'

import { useUsersContext } from '../../contexts/usersContext'
import {
	getAllUsers,
	deleteSingleUser,
	resetUsersList,
} from '../../actions/usersActions'
import {
	usersListPageVariants,
	titleVariants,
	usersListVariants,
} from './animations'
import useStyles from './UsersListPageStyles'

const UsersListPage = () => {
	const classes = useStyles()
	const { usersState, usersDispatch } = useUsersContext()

	const handleDeleteUser = (id) => {
		deleteSingleUser(id, usersDispatch)
	}

	useEffect(() => {
		getAllUsers(usersDispatch)

		return () => {
			resetUsersList(usersDispatch)
		}
	}, [usersDispatch])

	return (
		<Container
			className={classes.users__list__page}
			component={motion.section}
			variants={usersListPageVariants}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<Typography
				variant='h3'
				component={motion.h2}
				color='secondary'
				variants={titleVariants}
			>
				All users
			</Typography>
			<Container className={classes.users__list__container}>
				{usersState.isLoading ? (
					<CircularProgress
						color='primary'
						size={56}
						thickness={4}
						value={100}
					/>
				) : (
					<>
						{usersState.users && usersState.users.length !== 0 && (
							<List
								className={classes.users__list}
								component={motion.ul}
								variants={usersListVariants}
							>
								{usersState.users.map(
									({ _id, name, email, role }, index, arr) => (
										<Container key={_id}>
											<ListItem className={classes.users__list__item}>
												<ListItemAvatar>
													<Avatar
														alt={name}
														src='/assets/images/default-avatar.jpg'
													/>
												</ListItemAvatar>
												<ListItemText
													className={classes.user__info}
													primary={name}
													secondary={
														<Fragment>
															<Typography component='span' color='textPrimary'>
																{email}
															</Typography>
															<Typography component='span' color='textPrimary'>
																{role}
															</Typography>
														</Fragment>
													}
												/>
												<IconButton
													onClick={() => handleDeleteUser(_id)}
													type='button'
													color='primary'
													variant='contained'
													aria-label='delete'
												>
													<HighlightOffIcon />
												</IconButton>
											</ListItem>
											{index !== arr.length - 1 && <Divider variant='inset' />}
										</Container>
									)
								)}
							</List>
						)}
					</>
				)}
			</Container>
		</Container>
	)
}

export default UsersListPage
