import React from 'react'
import arrow from '../assets/arrow.svg'

function About() {
    const location = [
        'Abu Dhabi',
        'Dubai',
        'Sharjah & Ajman',
        'Fujairah',
        'Ras Al Khaimah',
        'Umm Al Quwain'
    ]
  return (
    <div className='about-cont'>
        <div className='side1'>
            <h1>Ready to dive into <span style={{color:"#271555"}}>HABOT?</span></h1>
            <span>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</span>
            <button>Sign up Today! <img src={arrow} alt='arrow' /></button>
        </div>
        <div className='side2'>
            {location.map((loc, index) => (
                <div key={index} className='loc'>
                    <span>{loc}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default About