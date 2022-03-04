import './Tool_1.css'
import Lines from '../components/Lines'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Tool_1() {
    return(
        <>
            <Navbar />
            <Lines />
            <div>
                Some Text here <br/>
                Some more text
            </div>
            <textarea id="textboxid" Placeholder="Enter Some JSON here..."></textarea>
            <br/>
            <button>Click Me!</button>
            <Lines />
            <Footer />
        </>
    
    )
}