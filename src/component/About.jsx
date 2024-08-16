import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div className='main'>
            <h1>JSX</h1>
            <p>
                This funny tag syntax is neither a string nor HTML.

                It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

                JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.

            </p>

            <ul>
                <li><Link to='pageOne'>Why JSX?
                </Link></li>
                <li><Link to='pageTwo'>Embedding Expressions in JSX</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default About