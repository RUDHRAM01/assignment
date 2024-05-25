import React from 'react'
import YouTubeIcon from "../assets/youtube.png"
import check from "../assets/check.svg"

function Banner() {
  return (
    <div className='banner-cont'>
        <div className='banner'>
            <div className='banner-img'>
              <img src={YouTubeIcon} alt='youtube'/>
            </div>
            <div className='tab-container'>
                <div className='tabs'>
                  <span>Buyer</span>
                  <span>Supplier</span>
                </div>
                <div className='tab-items'>
                    <span><img src={check} alt='check' />  Post your requirements.</span>
                    <span><img src={check} alt='check' />  Sit back for multiple suppliers to contact you.</span>
                    <span><img src={check} alt='check' />  Choose among the suppliers based on the ratings and reviews.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner