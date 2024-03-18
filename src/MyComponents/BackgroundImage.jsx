import React from 'react';
import { GrFormNext,GrFormPrevious } from "react-icons/gr";


const BackgroundImage = ({HandlePreviousImage,Images,currentIndex,HandleNextImage}) => {
  
  return (
    <div className='container'>
    <div className='background-image' >                    
      <button className='left-button'  type='text' onClick={HandlePreviousImage}><GrFormPrevious />
</button>
              <img className='images' src={Images[currentIndex]} alt='god'></img>

      <button className='right-button' onClick={HandleNextImage} type='text'><GrFormNext />
</button>
    </div>
    </div>
  )
}

export default BackgroundImage