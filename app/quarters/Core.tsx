import React from 'react'

const Core = () => {
  return (
 <div>
     <div className="bg-gray-200 text-center mx-auto text-black">
        <div className="px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Core Course</h1>
          
</div>
<div  className='flex max-w-4xl text-lg text-justify mx-auto md:flex-row flex-col mt-5'>        
<div>

  <h2 className='font-bold text-xl'>Quarter I (Core)</h2>
  <h2>CS-101: Object-Oriented Programming using TypeScript</h2>
  <h2 className='font-bold text-xl'>Quarter II (Core)</h2>
  <h2>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs
using Next.js 13 and Cloud Development Kit (CDK) for Terraform
</h2>

  </div>

  <img 
        src='/images/core.jpg' 
        alt='background' 
        height={400} 
        width={400}
        className='ml-5 rounded-lg'
        ></img>
    </div>
 </div>
 </div>
  )
}

export default Core
