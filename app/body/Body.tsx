import Link from 'next/link';
import React from 'react'

function Body () {
    return (
        <div className="bg-gray-200 text-center mx-auto text-black">
        <div className="px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Metaverse</h1>
          
</div>
<div  className='flex max-w-4xl text-lg text-justify mx-auto md:flex-row flex-col mt-5'>        
<p >The internet is without a doubt the most important technological 
        development in human history. Web3 and metaverse technologies expand the internet as 
        we know it by introducing novel features and advancements. 
        Metaverse will make use of all aspects of modern technology, 
        including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, 
        ambient computing, and more.In this brand-new type of curriculum, 
        students will learn how to make money and boost exports in the classroom 
        and will begin doing so within six months of the program's beginning. 
        It resembles a cross between a corporate venture and an educational project.</p>
  <img 
        src='/images/metaverse.jpg' 
        alt='background' 
        height={400} 
        width={400}
        className='ml-5 rounded-lg'
        ></img>
    </div>
    <h1 className="text-3xl font-bold m-10">Program of Studies</h1>
    <div  className='flex max-w-4xl text-lg text-justify mx-auto md:flex-row flex-col mt-5'>        
<p >This curriculum is intended for beginners who want to learn 
        software development from the ground up. The first two quarters are shared by all 
        specialities and are dedicated to studying Object-Oriented Programming and 
        cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long 
        hybrid program that includes both onsite and online classes and is divided 
        into four quarters of 13 weeks each.</p>
  <img 
        src='/images/pos.webp' 
        alt='background' 
        height={400} 
        width={400}
        className='ml-5 rounded-lg'
        ></img>
    </div>
   </div>

      
     
  )
}
export default Body;