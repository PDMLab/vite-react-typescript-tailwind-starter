import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import githubSVG from '../assets/github.svg'
import Logout from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const Navbar = (): React.ReactElement => {
	const imgSz = 30
	return (
		<>
			<div
				class="bg-white text-black
                        text-base
                        fixed top-0 left-0
                        p-12 w-full
                        flex flex-row justify-between items-center
						border-b border-b-black"
			>
				{/* Title and Logo */}
				<div class="flex flex-row gap-6 items-center">
					<img src={logo} width={imgSz} />
					<h1 class="text-xl font-bold">Filet</h1>
				</div>

				{/* Links */}
				<div class="flex gap-8 items-center">
					<div class="flex gap-6">
						<Link to="/contributions">Contributions</Link>
						<Link to="/help">Help</Link>
						<Link to="/login">Login</Link>
					</div>
					<img src={githubSVG} width={imgSz} />
				</div>
			</div>
		</>
	)
}

export default Navbar
