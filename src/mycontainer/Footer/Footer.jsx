import React,{useState} from 'react'
import {images} from '../../myconstants'
import {AppWrap,MotionWrap  } from "../../wrapper";
import {client  } from "../../client";

import './Footer.scss'

export const Footer = () => {
  const[formData,setFormData]=useState({name:'',email:'',message:''})
  const[isformSubmitted,setIsFormSubmitted]=useState(false);
  const[loading,setLoading]=useState(false);
  
  const{name,email,message}=formData;


  const handleChangeInput=(e)=>{
    const {name,value}=e.target

    setFormData({...formData,[name]:value})

  }

  const handleSubmit =()=>{
    setLoading(true)

    const contact={
      _type:'contact',
      name: name,
      email: email,
      message:message,

    }
    client.create(contact)
    .then(()=>{
      setLoading(false);
      setIsFormSubmitted(true)

    })

  }


  return (
    <>
    
      <h2 className="head-text">Contacts And Supports</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email"/>
          <a href="mailto:neriyaprabhat17@gmail.com" className="p-text">neriyaprabhat17@gmail.com</a>

        </div>

      </div>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile"/>
          <a href="tel:+917879641429" className="p-text">+917879641429</a>

        </div>
      </div>

    {!isformSubmitted ?

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" value={name} name="name" onChange={handleChangeInput} required/>

        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" value={email} name="email" onChange={handleChangeInput} required/>

        </div>
        <div >
          <textarea
          className="p-text"
          placeholder="Your Message "
          value={message}
          name="message"
          onChange={handleChangeInput}
          required
          
          />

        </div>
        <button className="p-text" type="button" onClick={handleSubmit}>{loading? 'Sending':'SEND'}</button>

      </div>
      : <div>
        <h3 className="head-text"> Thank you for getting in touch! </h3>
      </div>}

      <div className="copyright" >
        <p className="p-text">@2023 pNeriya</p>
       <p className="p-text">All rights reserved</p>
      </div>

    
    
    </>
  )
}

export default AppWrap(MotionWrap(Footer,'app__footer'),
'contact',
'app__whitebg'
)