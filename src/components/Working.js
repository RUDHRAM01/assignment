import React from 'react'
import Icon1 from '../assets/icon1.svg'
import Icon2 from '../assets/icon2.svg'
import Icon3 from '../assets/icon3.svg'
import Icon4 from '../assets/icon4.svg'
import Icon5 from '../assets/icon5.svg'
import Icon6 from '../assets/icon6.svg'

function Working() {
    const working = [
        {
            name: 'Select Your Role and Sign Up',
            icon: Icon1
        },
        {
            name: 'Buyers Post Your Requirements',
            icon: Icon2
        },
        {
            name: 'Review, Select, and Contact the Best Suppliers',
            icon: Icon3
        },
        {
            name: 'Suppliers Complete your profile and get notified for opportunities',
            icon: Icon4
        },
        {
            name: 'Contact to Buyers and Share your Quote for the service',
            icon: Icon5
        },
        {
            name: 'Both the Parties can Connect and Make Business Leave a Feedback',
            icon:  Icon6
        }
    ]
  return (
    <div className='working-cont'>
        <h1>How it works?</h1>
        <span>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</span>
        <div className='working'>
            {working.map((work, index) => (
                <div className='working-item' key={index}>
                    <img src={work.icon} alt='icon' style={{height:"50px"}}/>
                    <span>{work.name}</span>    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Working