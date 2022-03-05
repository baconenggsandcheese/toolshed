import './Tool_1.css'
import Lines from '../components/Lines'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React, { useState } from 'react'
import { parse, stringify, toJSON, fromJSON } from 'flatted';

export default function Tool_1() {
    // document.getElementById("op").innerHTML="xyz"
    const [data,setData]=useState(null) // For Printing
    const [print,setPrint]=useState(false)
    function parse(val)
    {
        
        // var val = { "glossary": { "title": "example glossary", "GlossDiv": { "title": "S", "GlossList": { "GlossEntry": { "ID": "SGML", "SortAs": "SGML", "GlossTerm": "Standard Generalized Markup Language", "Acronym": "SGML", "Abbrev": "ISO 8879:1986", "GlossDef": { "para": "A meta-markup language, used to create markup languages such as DocBook.", "GlossSeeAlso": ["GML", "XML"] }, "GlossSeeworking": "markup" } } } } }
        var pretty = JSON.stringify(val, null, 2);
        setData(pretty.target.value) // For Printing
        setPrint(false)
    }
    return(
        <>
            <Navbar />
            <Lines />
            <br />
            <h3>Enter Some JSON: </h3>
            <br />
            <textarea onChange={parse}/>
            <br/>
            <button onClick={()=>setPrint(true)}>Pretty Print</button>
            <br/>
            {
                print ?
                <>
                <h3>Prettyfied data: </h3>
                <div>{data}</div>
                </>
                :null
            }
            <br/>
            <Lines />
            <Footer />
        </>
    )
}