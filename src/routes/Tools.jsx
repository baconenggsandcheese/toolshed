import './Tools.css'
import { Link } from "react-router-dom";

export default function Tools() {
    return (
        <div className="main-tp">
        <header>
        <logotext>
          <Link to='/'>ToolShed</Link>
        </logotext>
        <tools>
            <Link to='/LandingPage'>Tools</Link>
        </tools>
        <about>
            <Link to='/About' >About</Link>
        </about>
        <hr />
      </header>
        <body>
            <h2 class="section-heading">Tools of the trade</h2>
                <Link to='/tool_1'>
                <div class="column tool-1">
                    <h2 class="tool-text">PrettyPrint<br/>JSON</h2>
                    <desc>
                        Pretty printing is a form of stylistic formatting including indentation. It is easy for humans to read and write and for machines to parse and generate.
                    </desc>
                </div>
                </Link>
                {/*End of tool 1*/}
                <Link to='/tool_2'>
                <div class="column tool-2">
                    <h2 class="tool-text">CSS<br/>Validator</h2>
                    <desc>
                        Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, in placeat. Nulla eius omnis ad deleniti illo aut soluta molestiae itaque corporis doloremque consectetur nemo labore officiis, perspiciatis, eos ullam.
                    </desc>
                </div>
                </Link>
                {/*End of tool 2*/}
                <Link to='/tool_3'>
                <div class="column tool-3">
                    <h2 class="tool-text">CHAT <br/>BOTS</h2>
                    <desc>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet libero asperiores veritatis quos soluta. Voluptates, architecto nobis cumque blanditiis dignissimos provident! Fugit, veniam nobis. Expedita quos dolorem asperiores quisquam? Aliquid!
                    </desc>
                </div>
                </Link>
                <Link to='/tool_4'>
                <div class="column tool-4">
                    <h2 class="tool-text">GAME <br/> DESIGN</h2>
                    <desc>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet libero asperiores veritatis quos soluta. Voluptates, architecto nobis cumque blanditiis dignissimos provident! Fugit, veniam nobis. Expedita quos dolorem asperiores quisquam? Aliquid!
                    </desc>
                </div>
                </Link>
                <div class="column tool-5">
                    <h2 class="tool-text">TEXT <br/> ANALYSIS</h2>
                    <desc>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet libero asperiores veritatis quos soluta. Voluptates, architecto nobis cumque blanditiis dignissimos provident! Fugit, veniam nobis. Expedita quos dolorem asperiores quisquam? Aliquid!
                    </desc>
                </div>
                <div class="column tool-6">
                    <h2 class="tool-text">JAVA <br/> SCRIPT</h2>
                    <desc>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet libero asperiores veritatis quos soluta. Voluptates, architecto nobis cumque blanditiis dignissimos provident! Fugit, veniam nobis. Expedita quos dolorem asperiores quisquam? Aliquid!
                    </desc>
                </div>
                <div class="column tool-7">
                    <h2 class="tool-text">DATA <br/> PRIVACY</h2>
                    <desc>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet libero asperiores veritatis quos soluta. Voluptates, architecto nobis cumque blanditiis dignissimos provident! Fugit, veniam nobis. Expedita quos dolorem asperiores quisquam? Aliquid!
                    </desc>
                </div>
                <div class="column
                 tool-8">
                    <h2 class="tool-text"> THIS <br/> THIS</h2>
                    <desc>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet libero asperiores veritatis quos soluta. Voluptates, architecto nobis cumque blanditiis dignissimos provident! Fugit, veniam nobis. Expedita quos dolorem asperiores quisquam? Aliquid!
                    </desc>
                </div>
        </body>
            <footer>
                <hr />
                <info>
                    MIT Licensed | Copyright © 2022-Present | Aninda Deb
                </info>
            </footer>
        </div>
    )
}
