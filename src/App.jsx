import logo from './logo.png'
import './App.css'
import { Link } from 'react-router-dom'



function App() {
	return (
		<div className="MAIN">
			<header>
				<logotext>
					<Link to='/'>ToolShed</Link>
				</logotext>
				<tools>
					<Link to='/LandingPage'>Tools</Link> // TODO Add dropdown
				</tools>
				<about>
					<Link to='/About' >About</Link>
				</about>
				<hr />
			</header>
			<img src={logo} alt=""/>
			<div className="welcomeinfo">
        Welcome to ToolShed!
			</div>
			<div className="welcomeinfo">
        One stop for all the tools you will ever need
			</div>
			<div className="welcomeinfo">
        during Web Development.
			</div>
			<button>
				<Link to='/LandingPage' class="started"><span class="button-content">
					<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 0H24V24H0z" fill="none">
					</path>
					<path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" fill="currentColor">
					</path>
					</svg>
					Get Started
				</span>
				</Link>
			</button>
			<footer>
				<hr />
				<info>
          MIT Licensed | Copyright © 2022-Present | Aninda Deb
				</info>
			</footer>
		</div>
	)
}

export default App
  