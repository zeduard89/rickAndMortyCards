import React from 'react'
import './About.Module.css'
import imgAbout from '../../img/Guille-1.jpg'

const About = () => {
  return (
    <div className='aboutDiv'>
      <h1 className='h1'>Welcome Visitor !! </h1>
      <img className ='guille' src={imgAbout} alt="Guille" />
      <div>
        <h2 className='h2'>"Allow me to provide you with some information about myself"</h2>
        <p className='p'>My name is Guillermo Eduardo Paez. I'm a junior programmer currently studying at SoyHenry, where I have learned skills in web programming such as HTML, CSS, JavaScript, Redux, and React. I consider myself a self-taught, committed person who is always willing to learn in order to grow professionally. Thank you for your time. I hope you enjoy my web page </p>

      </div>
    </div>
  )
}

export default About