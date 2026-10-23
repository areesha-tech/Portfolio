import {useOutlet,useLocation} from 'react-router-dom'
import Navbar from '../Component/Navbar'
import{motion,AnimatePresence} from 'framer-motion'
function Layout() {
  const location=useLocation()
  const outlet=useOutlet()
  return (
   <div className="bg-base">
        <Navbar/>
          <AnimatePresence mode="wait">
         <motion.div key={location.pathname} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}transition={{ease:"easeInOut",duration:0.2}}>
        {outlet}
        
    </motion.div>
    
    </AnimatePresence>
    </div>
  )
}

export default Layout