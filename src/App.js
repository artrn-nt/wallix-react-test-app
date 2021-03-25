import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import { AnimatePresence } from 'framer-motion'

import { UsersProvider } from './contexts/usersContext'
import Layout from './components/Layout/Layout'
import UsersListPage from './pages/UsersListPage/UsersListPage'
import UserCreatePage from './pages/UserCreatePage/UserCreatePage'

import theme from './AppTheme.js'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<UsersProvider>
				<Router>
					<Layout>
						<Route
							render={({ location }) => (
								<AnimatePresence initial={false} exitBeforeEnter>
									<Switch location={location} key={location.pathname}>
										<Route path='/' render={() => <UsersListPage />} exact />
										<Route
											path='/user-create'
											render={() => <UserCreatePage />}
										/>
									</Switch>
								</AnimatePresence>
							)}
						/>
					</Layout>
				</Router>
			</UsersProvider>
		</ThemeProvider>
	)
}

export default App
