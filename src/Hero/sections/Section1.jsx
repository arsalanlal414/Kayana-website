import React from 'react'
import sideImage from '../../assets/imagesgallery.png'

function Section1() {
  return (
      <>
        <div className='section1'>
            <div className='section1-wrapper'>
                <h1>Staffing simplified. <br />Efficiency amplified.</h1>
                <p>Kayana's AI-driven platform is your bridge to <br />
                <span>can-do assistants</span> who transform your business.</p>
            </div>
            <div className='section1-wrapper img-wrapper'>
                <img src={sideImage} alt="image_gallery" />
            </div>
        </div>
        <div className='style-top'></div>
        <div className='style-bottom'></div>
        <div className='style-bottom-fade'></div>
    </>
  )
}

export default Section1