import React,{useState}from 'react'
import {HiMenuAlt4 } from "react-icons/hi";
import {motion} from "framer-motion";
import {HiX} from "react-icons/hi";
import {images} from '../../myconstants'
import './Navbar.scss'

    
 const Navbar = () => {
  const [toggle,setTogggle] = useState(false);
  
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <img src={images.portfolio} alt="portfolio"/>
      </div>

      <ul className="app__navbar-links">
        {['home','about','work','skills','contact'].map
        ((item)=>
         (
          <li className="app__flex p-text" key={`link-${item}`}>
          <div/>
          <a href={`#${item}`}>{item}</a>
          </li> 
         ) 
        )
        }
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={()=> setTogggle(true)}/>    
        { toggle &&
         (<motion.div whileInView={{x:[350,0]}} transition={{duration:0.85, ease:'easeOut'}}>
          <HiX onClick={()=> setTogggle(false) }/>
          <ul>
          {['home','about','work','skills','contact'].map
           ( (item)=>
            (
             <li key={item}>
              <a href={`#${item}`} onClick={()=> setTogggle(false) }>{item}</a>
             </li> 
            ) 
           )
          } 
        </ul>
         </motion.div>
         ) 
        }
      </div>
    </nav>
  )
}
 export default Navbar