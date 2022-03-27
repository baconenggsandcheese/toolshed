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
                <div class="mainStyle">
                    <h2>Under Development</h2>
                    <p>Stay tuned</p>
                </div>
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
                {/* Tool 1 */}
                <Link to='/tool_1'>
                    <div class="gallery p1">
                        <h2 class="tool-text">PrettyPrint<br/>JSON</h2>
                            <desc>
                                PrettyPrint JSON is a tool that allows you to format JSON data in a readable format.
                            </desc>
                    </div>
                </Link>
                {/*End of tool 1*/}
                {/* Tool 2 */}
                <Link to='/tool_2'>
                    <div class="gallery p2">
                        <h2 class="tool-text">CSS<br/>Validator</h2>
                            <desc>
                                A tool which formats your CSS correctly and validates it.
                            </desc>
                    </div>
                </Link>
                {/*End of tool 2*/}
                <Link to='/tool_3'>
                    <div class="gallery p3">
                        <h2 class="tool-text">Base64<br/>Decode</h2>
                            <desc>
                                A tool which decodes a base64 encoded string.
                            </desc>
                    </div>
                </Link>
            </div>
            <h2 class="cs">*More tools coming Soon!*</h2>
        </body>
        <Footer/>
        </>
    )
    }
}
