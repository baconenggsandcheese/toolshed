import './About.css'
import { Link } from "react-router-dom";
import Lines from '../components/Lines'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReactMarkdown from 'react-markdown'


export default function About() {
    return (
        <>
            <Navbar/>
            <Lines />
                <body>
                    <ReactMarkdown># *React-Markdown* is **Awesome**</ReactMarkdown>
                    <br/>
                    <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px"/> 
                    <ReactMarkdown>Hi, I’m @baconenggsandcheese</ReactMarkdown>
                    <ReactMarkdown>👀 I’m interested in developing Full Stack Applications.</ReactMarkdown>
                    <ReactMarkdown>🌱 I’m currently learning ReactJS after learning VueJS a bit.</ReactMarkdown>
                    <ReactMarkdown>💞️ I’m looking to collaborate on React/Vue JS</ReactMarkdown>
                    <ReactMarkdown>My site is **Coming Soon**</ReactMarkdown>
                    <ReactMarkdown>#### 📫 How to reach me:</ReactMarkdown>
                    <br/>
                    <ReactMarkdown></ReactMarkdown>
                <a href="https://www.linkedin.com/in/anindadeb/"><img align="center" src="https://img.shields.io/badge/LinkedIn-0A66C2?&style=for-the-badge&logo=LinkedIn&logoColor=white" /></a>
                <a href="#"><img align="center" src="https://img.shields.io/badge/Email-EA4335?&style=for-the-badge&logo=Gmail&logoColor=white" /></a>
                <br /><br />
                <ReactMarkdown># My Github Statistics: </ReactMarkdown>
                <br />
                <ReactMarkdown>
                    ![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=baconenggsandcheese&theme=holi-theme)

                    ![GitHub Stats](https://github-readme-stats.vercel.app/api?username=baconenggsandcheese&count_private=true&show_icons=true&theme=github_dark)

                    ![Github Activity](https://activity-graph.herokuapp.com/graph?username=baconenggsandcheese&theme=github&custom_title=Activity)
                </ReactMarkdown>
            </body>
            <Lines/>
            <Footer/>
        </>
    );
}