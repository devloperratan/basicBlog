
import Header from './component/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} >
          <Route path='pageOne' element={<p>React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

            Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.

            React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.</p>} >
          </Route>
          <Route path='pageTwo' element={<p>In the example below, we declare a variable called name and then use it inside JSX by wrapping it in curly braces:
            You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.

            In the example below, we embed the result of calling a JavaScript function, formatName(user), into an  element.</p>} ></Route>
        </Route>
        <Route path='/services' element={<h1>Services</h1>} ></Route>
        <Route path='/blog' element={<h1>Blog</h1>} ></Route>
        <Route path='/contact' element={<h1>Contact</h1>} ></Route>
      </Routes>
    </>
  )
}

export default App
