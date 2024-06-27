import React from 'react'
import Require from './Require'
import Right from './Right'
import Skills from './subcomponents/Skills'
import About from './subcomponents/About'
import Info from './subcomponents/Info'


function RightLeft() {
  return (
    <div className='max-w-screen-2xl  flex  ' >
        <div className='w-[75%] '>
          <Require/>
          <Skills/>
          <About/>
          <Info/>
        </div>
        <div className='w-[25%] bg-[#FCFCFC]'>
            <Right/>

        </div>

    </div>
  )
}

export default RightLeft