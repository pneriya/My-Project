import React,{useState,useEffect}from 'react'
import {motion} from 'framer-motion'
import {HiCheveronRight,HiCheveronLeft} from 'react-icons/hi'
import {AppWrap,MotionWrap} from '../../wrapper'
import {urlFor,client} from '../../client'

import imageUrlBuilder from '@sanity/image-url'



import './Cv.scss'
const Cv = () => {

  const[cvs,setCvs]=useState([])
  const[brands,setBrands]=useState([])
  const[currentIndex,setCurrentIndex]=useState(0)

  useEffect(() => {    
    const query='*[_type=="cvs"]'
    const brandsquery='*[_type=="brands"]'

    client.fetch(query)
    .then((data)=>{
     setCvs(data);
    
    })
    client.fetch(brandsquery)
    .then((data)=>{
     setBrands(data);
    
    })


  }, [])
  


  return (
    <>
   {cvs.length && (
      <>
      <div className="app__cv-item app__flex">
        <img src={urlFor(cvs[currentIndex].imgurl)} alt="cv" />
    
        <div className="app__cv-content">
          <p className="p-text">{cvs[currentIndex].name}</p>
        </div>
      </div>
      
      </>
  
   )}

    </>
    
  )
}

export default AppWrap(MotionWrap(Cv, 'app__cv'),'cv', "app__primarybg")