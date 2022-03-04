import './Tools.css'
import Lines from '../components/Lines'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Tools() {
    return (
        <>
        <Navbar/>
        <Lines />
        <body>
            <h2 class="section-heading"><strong>Tools of the trade</strong></h2>
            <div class='gallery'>
                <Link to='/tool_1'>
                    <div class="gallery card">
                        <h2 class="tool-text">PrettyPrint<br/>JSON</h2>
                            <desc>
                                Pretty printing is a form of stylistic formatting including indentation. It is easy for humans to read and write and for machines to parse and generate.
                            </desc>
                    </div>
                </Link>
                {/*End of tool 1*/}
                <Link to='/tool_2'>
                    <div class="gallery card">
                        <h2 class="tool-text">CSS<br/>Validator</h2>
                            <desc>
                                Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, in placeat. Nulla eius omnis ad deleniti illo aut soluta molestiae itaque corporis doloremque consectetur nemo labore officiis, perspiciatis, eos ullam.
                            </desc>
                    </div>
                </Link>
                {/*End of tool 2*/}
                <Link to='/tool_3'>
                    <div class="gallery card">
                        <h2 class="tool-text">CHAT <br/>BOTS</h2>
                            <desc>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet libero asperiores veritatis quid!
                            </desc>
                    </div>
                </Link>
            </div>
        </body>
        <Lines />
        <Footer/>
        </>
    )
}
