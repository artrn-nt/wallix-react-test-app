import { makeStyles } from '@material-ui/core'
import { blueGrey, teal } from '@material-ui/core/colors'

const useStyles = makeStyles({
	create__user__page: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flex: '1',
		'& h2': {
			marginBottom: 48,
		},
	},
	form__container: {
		maxWidth: 640,
		minHeight: 448,
		border: `2px solid ${teal[400]}`,
		borderRadius: '8px',
		padding: '32px 40px',
		background: `${blueGrey[50]}`,
	},
	field: {
		display: 'block',
		marginBottom: 28,
	},
	form__control: {
		display: 'block',
		textAlign: 'left',
		marginBottom: 28,
		'& label:nth-child(1)': {
			fontWeight: 500,
		},
	},
	form__btn: {
		fontSize: 16,
		minWidth: 140,
		minHeight: 37,
		padding: '6px 16px',
	},
})

export default useStyles
