import './index.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'


function App() {
let [ShowContent, setShowContent]= useState(false)
  useGSAP(()=>{
    const tl= gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate:10,
      duration:2,
      ease:"Power4.easeInOut",
      transformOrigin:" 50% 50% ",
    }).to(".vi-mask-group",{
      scale:10,
      duration: 2,
      delay:-1.8,
      ease: "Expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate:function(){
        if(this.progress() > 0.9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill()
        }
      }
    })



  })
  return (
   <>
   <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
       
      <image 
       href="./bg.png"
       width="100%"
       height="100%"
       preserveAspectRatio="xMidYMid slice"
       mask="url(#viMask)"
      />
     </svg>
   </div>
   {ShowContent &&<div className="main w-full">
    <div className="landing w-full h-screen bg-black">
      <div className='navbar absolute top-0 left-0 z-[10] w-full py-4 px-10 '>
        <div className='logo flex gap-3'>
          <div className='lines flex flex-col gap-[4px]'>
            <div className='line w-10 h-1 bg-white'></div>
            <div className='line w-8 h-1 bg-white'></div>
            <div className='line w-5 h-1 bg-white'></div>
          </div>
          <h3 className='text-3xl mt-[-7px] leading-none text-white'>Rockstar</h3>
        </div>
      </div>
      <div className="imagesdiv overflow-hidden relative w-full h-screen">
        <img className="absolute top-0 left-0 w-full h-full object-cover " src="./sky.png" alt="" />
        <img className="absolute top-0 left-0 w-full h-full object-cover" src="./bg.png" alt="" />
        <img className="absolute -bottom-[89.9%]  left-1/2 -translate-x-1/2 scale-[0.6]" src="./girlbg.png" alt="" />
      </div>
      <div className='btmbar absolute bottom-0 left-0 w-full py-9 px-4 bg-gradient-to-t from-black to-transparent'>
        <div className='flex gap-4 text-white '>
          <i class="ri-arrow-down-line"></i>
        <h3 className='font-[Helvetica_Now_Display]'>Scroll Down</h3>
        </div>
    </div>
     {/* <img className='absolute h-[45px]   left-3.2  -translate-x-1/2  -translate-y-1/2' src="./ps5.png" alt="" />    */}
     
   </div>

   </div>}
    53:53
   </>
  )
}

export default App
