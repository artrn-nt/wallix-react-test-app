import { createMuiTheme } from '@material-ui/core'
import { blueGrey, teal } from '@material-ui/core/colors'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: blueGrey[100],
			main: blueGrey[500],
			dark: blueGrey[800],
		},
		secondary: {
			light: teal[200],
			main: teal[500],
			dark: teal[800],
		},
	},
	typography: {
		fontFamily: 'Lato',
		fontWeightLight: 100,
		fontWeightRegular: 300,
		fontWeightMedium: 400,
		fontWeightBold: 700,
	},
})

export default theme
