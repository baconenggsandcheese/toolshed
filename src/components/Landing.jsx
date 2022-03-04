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
                <strong>In one place!</strong>
            </div>
            <br/>
            <div class="animate pop delay-4">
            <button id='landbutt'>
                <Link to='/Tools' class="started"><span class="button-content">
                    Get Started
                </span>
                </Link>
            </button>
            </div>
            <br/>
            <br/>
        </>
    )
}