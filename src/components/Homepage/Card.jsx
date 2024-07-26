import React from 'react'

const Card = ({imgUrl, title, colleges, streams}) => {
  return (
    <div className="card4">
    <div className="content">
      <div className="back">
        <div className="back-content bg-white">
          <img src={imgUrl}/>
          <strong className='text-black'>{title}</strong>
          <p className='text-[14px] text-black'>{colleges}{" "}colleges</p>
        </div>
      </div>
      <div className="front">
        
        {/* <div className="img">
          <div className="circle">
          </div>
          <div className="circle" id="right">
          </div>
          <div className="circle" id="bottom">
          </div>
        </div> */}
  
        <div className="front-content">
          
          <div className="description h-full">
            <div className="title">
                {streams?.map((stream, index) => (
                    <div key={index} className='hover:border-b pl-3 hover:border-white'>
                        <p  className="title">
                    <strong className='text-[14px]'>{stream}</strong>
                  </p>
                    </div>
                    
                ))}              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card