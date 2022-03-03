import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return(
        <header>
            <logotext>
                <Link to='/'>ToolShed</Link>
            </logotext>
            <tools>
                <Link to='/tools'>Tools</Link>
            </tools>
            <about>
                <Link to='/About' >About</Link>
            </about>
        </header>
    )
}