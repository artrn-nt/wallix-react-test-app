import { makeStyles } from '@material-ui/core'
import { blueGrey } from '@material-ui/core/colors'

const useStyles = makeStyles({
	users__list__page: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flex: '1',
		'& h2': {
			marginBottom: 48,
		},
	},
	users__list__container: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		maxWidth: 420,
		flex: 1,
	},
	users__list: {
		width: '100%',
		maxHeight: 625,
		backgroundColor: `${blueGrey[200]}`,
		borderRadius: 8,
		overflowY: 'scroll',
	},
	user__info: {
		'& p span': {
			display: 'block',
		},
	},
})

export default useStyles
