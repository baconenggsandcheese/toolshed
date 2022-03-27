import React, {useState, useEffect} from 'react';
import './App.css'
import Lines from './components/Lines'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Landing'

function useWindowSize() {
	const [Size, setSize] = useState([window.innerHeight, window.innerWidth]);
	useEffect(() => {
		const handleResize = () => {
			setSize([window.innerHeight, window.innerWidth]);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return Size;
}

function App() {
	const [height, width] = useWindowSize();
	if(width<=820){
		return(
			<>
				<div class="mobile-message">
					<h2>Sorry, this app is not supported on Mobile Devices</h2>
					<p>To use this app, please use a computer or Tablet</p>
				</div>
			</>
		)
	}
	else{
		return (
			<>
				<div className='body'>
					<Landing />
				</div>
			</>
		)
	}
	
}

export default App
  