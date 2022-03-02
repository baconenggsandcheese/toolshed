import './Tool_3.css'
import { Link } from "react-router-dom";

export default function Tool_3() {
    return (
        <div class='mainclass_tool_3'>
            <header>
                <logotext>
                    <Link to='/'>ToolShed</Link>
                </logotext>
                <tools>
                    <Link to='/LandingPage'>Tools</Link>
                </tools>
                <about>
                    <Link to='/About'>About</Link>
                </about>
                <hr />
            </header>
            <footer>
                <hr />
                <info>
                    MIT Licensed | Copyright © 2022-Present | Aninda Deb
                </info>
            </footer>
        </div>
    )
}
