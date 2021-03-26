import { makeStyles } from '@material-ui/core'
import { blueGrey } from '@material-ui/core/colors'

const useStyles = makeStyles({
	main__container: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '125vh',
		backgroundColor: blueGrey[100],
		padding: '0',
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		height: '64px',
		padding: '0 24px',
		backgroundColor: blueGrey[300],
	},
	links__list: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		'& > li > a': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			minWidth: '140px',
			padding: '5px 8px',
			border: `1.5px solid ${blueGrey[900]}`,
			borderRadius: '4px',
			backgroundColor: blueGrey[900],
			color: blueGrey[50],
			textAlign: 'center',
			transition: 'background-color 300ms ease-out, color 300ms ease-out',
			'&:hover': {
				backgroundColor: blueGrey[50],
				color: blueGrey[900],
			},
			'& > svg': {
				marginRight: '8px',
			},
		},
		'& li:nth-child(2)': {
			marginLeft: '16px',
		},
	},
	main__content: {
		display: 'flex',
		flexFlow: 'column',
		flexGrow: 1,
		width: '100%',
		padding: '48px 0',
		textAlign: 'center',
	},
	footer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '64px',
		padding: '0 24px',
		backgroundColor: blueGrey[300],
	},
})

export default useStyles
