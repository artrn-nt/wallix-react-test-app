import React, { useState, useEffect } from 'react'
import {
	Typography,
	Button,
	Container,
	TextField,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
	CircularProgress,
} from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { motion } from 'framer-motion'
import { isEmail } from 'validator'

import { useUsersContext } from '../../contexts/usersContext'
import { createSingleUser } from '../../actions/usersActions'
import useStyles from './UserCreatePageStyles'
import {
	createUserPageVariants,
	titleVariants,
	formContainerVariants,
} from './animations.js'

const UserCreatePage = () => {
	const { usersState, usersDispatch } = useUsersContext()
	const classes = useStyles()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [role, setRole] = useState('Administrator')

	const [isValid, setIsValid] = useState(null)

	const handleSubmit = (ev) => {
		ev.preventDefault()
		createSingleUser({ name, email, role }, usersDispatch)
	}

	useEffect(() => {
		// Validation ultra basique
		if (name.length === 0 || email.length === 0 || !isEmail(email)) {
			setIsValid(false)
			return
		}

		setIsValid(true)
	}, [name, email])

	useEffect(() => {
		if (usersState.response !== undefined && usersState.response.success) {
			setName('')
			setEmail('')
			setRole('Administrator')
		}
	}, [usersState])

	return (
		<Container
			className={classes.create__user__page}
			component={motion.section}
			variants={createUserPageVariants}
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
				Create a single user
			</Typography>
			<Container
				className={classes.form__container}
				component={motion.div}
				variants={formContainerVariants}
			>
				<form onSubmit={(ev) => handleSubmit(ev)} noValidate autoComplete='off'>
					<TextField
						onChange={(ev) => setName(ev.target.value)}
						value={name}
						className={classes.field}
						label='Name'
						variant='outlined'
						color='secondary'
						fullWidth
						required
					/>
					<TextField
						onChange={(ev) => setEmail(ev.target.value)}
						value={email}
						className={classes.field}
						label='Email'
						variant='outlined'
						color='secondary'
						fullWidth
						required
					/>

					<FormControl className={classes.form__control}>
						<FormLabel>User role</FormLabel>
						<RadioGroup
							onChange={(ev) => setRole(ev.target.value)}
							value={role}
						>
							<FormControlLabel
								value='Administrator'
								control={<Radio />}
								label='Administrator'
							/>
							<FormControlLabel
								value='Auditor'
								control={<Radio />}
								label='Auditor'
							/>
							<FormControlLabel
								value='Integrator'
								control={<Radio />}
								label='Integrator'
							/>
						</RadioGroup>
					</FormControl>

					<Button
						className={classes.form__btn}
						type='submit'
						disabled={usersState.isLoading || !isValid}
						color='secondary'
						variant='contained'
						startIcon={!usersState.isLoading && <PersonAddIcon />}
					>
						{usersState.isLoading ? (
							<CircularProgress
								color='primary'
								size={22}
								thickness={4}
								value={100}
							/>
						) : (
							'Create User'
						)}
					</Button>
				</form>
			</Container>
		</Container>
	)
}

export default UserCreatePage
