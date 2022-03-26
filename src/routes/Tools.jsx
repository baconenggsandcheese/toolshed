import React, { useState, useEffect } from 'react';
import './Tools.css'
import Lines from '../components/Lines'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

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

export default function Tools() {
    const [height, width] = useWindowSize();
    if (width <= 820) {
        return (
            <>
                <div className="container">Unsupported device</div>
            </>
        )
    }
    else{
    return (
        <>
        <Navbar/>
        <Lines />
        <body>
            <h2 class="section-heading"><strong>Tools of the trade</strong></h2>
            <div class='gallery'>
                <Link to='/tool_1'>
                    <div class="gallery p1">
                        <h2 class="tool-text">PrettyPrint<br/>JSON</h2>
                            <desc>
                                Pretty printing is a form of stylistic formatting including indentation. It is easy for humans to read and write and for machines to parse and generate.
                            </desc>
                    </div>
                </Link>
                {/*End of tool 1*/}
                <Link to='/tool_2'>
                    <div class="gallery p2">
                        <h2 class="tool-text">CSS<br/>Validator</h2>
                            <desc>
                                Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, in placeat. Nulla eius omnis ad deleniti illo aut soluta molestiae itaque corporis doloremque consectetur nemo labore officiis, perspiciatis, eos ullam.
                            </desc>
                    </div>
                </Link>
                {/*End of tool 2*/}
                <Link to='/tool_3'>
                    <div class="gallery p3">
                        <h2 class="tool-text">CHAT <br/>BOTS</h2>
                            <desc>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet libero asperiores veritatis quid!
                            </desc>
                    </div>
                </Link>
            </div>
            <h2 class="cs">*More tools coming Soon!*</h2>
        </body>
        <Lines />
        <Footer/>
        </>
    )
    }
}
