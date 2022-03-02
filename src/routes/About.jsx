import './About.css'
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div class='mainclass_about'>
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
            <body>
                Ye hai about section.
            </body>
            <footer>
                <hr />
                <info>
                    MIT Licensed | Copyright © 2022-Present | Aninda Deb
                </info>
            </footer>
        </div>
    );
}