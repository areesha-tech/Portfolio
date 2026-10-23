import {Route,Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './Pages/Layout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './pages/Services'
import Projects from './pages/Projects'
    function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/projects' element={<Projects/>}/>
           <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>

   
  </>
  )
}

export default App