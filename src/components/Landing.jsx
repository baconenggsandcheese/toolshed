import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Landing.css'

export default function Landing() {
    return(
        <>        
            <img src={logo} alt="" class="animate pop"/>
            <div id="welcomeinfo" class="animate pop delay-1">
                Welcome to ToolShed 
            </div>
            <div id="welcomeinfo" class="animate pop delay-2">
                All the tools you need 
            </div>
            <div id="welcomeinfo" class="animate pop delay-3">
                In one place!
            </div>
            <button class="animate pop delay-4">
                <Link to='/Tools' class="started"><span class="button-content">
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
        </>
    )
}