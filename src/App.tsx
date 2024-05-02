import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import { PalettePage, TimerPage } from './pages'

function App() {
	return (
		<BrowserRouter>
			<nav>
				<ul>
					<li>
						<Link to='/timer'>Таймер</Link>
					</li>
					<li>
						<Link to='/palette'>Палитра</Link>
					</li>
				</ul>
			</nav>

			<main>
				<Routes>
					<Route
						path='/'
						element={
							<Navigate
								replace
								to='/timer'
							/>
						}
					/>
					<Route
						path='/timer'
						element={<TimerPage />}
					/>
					<Route
						path='/palette'
						element={<PalettePage />}
					/>
				</Routes>
			</main>
		</BrowserRouter>
	)
}

export default App
