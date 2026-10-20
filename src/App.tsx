import React, { ReactElement, useState } from 'react'
import logo from './logo.svg'
import viteLogo from './vite.svg'
import tailwindLogo from './tailwind.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Landing from './routes/Landing'
// import Help from './routes/Help'
// import Signup from './routes/Signup'
// import Login from  './routes/Login'

const App = (): ReactElement => {
  	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Landing />}></Route>
					{/* <Route path='/help' element={<Help />}></Route> */}
				</Routes>
			</BrowserRouter>
		</>
  	)
}

export default App
