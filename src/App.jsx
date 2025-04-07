import { useState } from 'react'
 
import './App.css'

function App() {
  
function Doc({name,href}){
return <a className='pdf-content' href={href} target='_blank'>{name}</a>

}

  return (
    <>
      <div className='container '>


        <div className='content-course-container mb'>
        <h2 className='title-course'>MAR511</h2>

        <div className='flex-pdf-content'>
        <Doc href='https://drive.google.com/file/d/1PGPFE6Tbb02N80eETcFLIA53Xvwopew2/view?usp=drive_link' name='UNIT 1'/>
       
       <Doc href='https://drive.google.com/file/d/1XDjhGxo35AeC_yjGlLvJF74nOp1Xcsg3/view?usp=drive_link' name='UNIT 2'/>
       
       <Doc href='https://drive.google.com/file/d/1YrMHPnDv50M9UNnFfKd-C-c1JOkIFnD5/view?usp=drive_link' name='UNIT 3'/>
       <Doc href='https://drive.google.com/file/d/1e6zKnefwk-tWlfuSl_bWtjm8jh0bft1P/view?usp=drive_link' name='SYSTEM DESIGN AND ANALYSIS IN HYDRAULICS PNEUMATICS'/>
       <Doc href='https://drive.google.com/file/d/196Cj_0U0jRfd89fXXyml-h3zUF_rcuUK/view?usp=drive_link' name='HYDRAULIC AND PNEUMATIC COURSE PRIMER 1'/>
        </div>
    
        
        
        </div>


        <div className='content-course-container mb'>
        <h2 className='title-course'>EEE516</h2>

        <div className='flex-pdf-content'>
        <Doc href='https://drive.google.com/file/d/1u9YNxRcqdbp7Wr0oPCY-i8JodCp1lsmX/view?usp=drive_link' name='First Part'/>
       
       <Doc href='https://drive.google.com/file/d/1ygFSckv7MGyRxSrEel8jS7JLLQW7Uh1X/view?usp=drive_link' name='Amplifier 1'/>
       
       <Doc href='https://drive.google.com/file/d/1u9YNxRcqdbp7Wr0oPCY-i8JodCp1lsmX/view?usp=drive_link' name='Amplifier 2'/>
       
        </div>
    
        
        
        </div>
     
      </div>
     
    </>
  )
}

export default App;
