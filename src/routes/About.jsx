import './About.css'
import { Link } from "react-router-dom";
import Lines from '../components/Lines'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
    return (
        <>
            <Navbar/>
            <Lines />
                <body>
                    Ye hai about section.
                </body>
            <Lines/>
            <Footer/>
        </>
    );
}