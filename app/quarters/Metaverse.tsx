import React from 'react'

const Metaverse = () => {
  return (
 <div className="bg-gray-200 text-center mx-auto text-black">
     <div >
        <div className="px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Specialized Tracks</h1>
        
</div>
{/* Metaverse */}
<div  className='flex max-w-4xl text-lg text-justify mx-auto md:flex-row flex-col mt-5'>        
<div>
<h1 className="text-3xl font-bold">Web 3.0 Blockchain & Metaverse </h1>
  <p>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and
Metaverse experiences for the next generation of the internet by specializing in building
worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D
metaverse client experiences.</p>  
  <h2 className='font-bold text-xl'>Quarter III</h2>
  <h2>W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</h2>
  <h2 className='font-bold text-xl'>Quarter IV</h2>
  <h2>MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse
Experiences
</h2>
  </div>
  <img 
        src='/images/blockchain4.png' 
        alt='background' 
        height={400} 
        width={400}
        className='ml-5 rounded-lg'
        ></img>
    </div>
 </div>
 {/* AI */}
 
 <div  className='flex max-w-4xl text-lg text-justify mx-auto md:flex-row flex-col mt-10'>        
<div>
<h1 className="text-3xl font-bold">Artificial Intelligence (AI) and Deep Learning </h1>
    <p>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs
using OpenAI models and building custom Deep Learning Tensorflow models.</p>  
  <h2 className='font-bold text-xl'>Quarter III</h2>
  <h2>AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</h2>
  <h2 className='font-bold text-xl'>Quarter IV</h2>
  <h2>AI-361: Deep Learning and MLOps
</h2>
  </div>
  <img 
        src='/images/ai2.jpg' 
        alt='background' 
        height={400} 
        width={400}
        className='ml-5 rounded-lg'
        ></img>
    </div>
    {/* CNC */}
 
 <div  className='flex max-w-4xl text-lg text-justify mx-auto md:flex-row flex-col mt-10'>        
<div>
<h1 className="text-3xl font-bold mb-4">Cloud-Native Computing </h1>
  <p>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK
for Kubernetes.
</p>  
  <h2 className='font-bold text-xl'>Quarter III</h2>
  <h2>CN-351: Certified Kubernetes Application Developer (CKAD)</h2>
  <h2 className='font-bold text-xl'>Quarter IV</h2>
  <h2>CN-361: Developing Multi-Cloud APIs using CDK for Terraform</h2>
  </div>
  <img 
        src='/images/cloud.jpg' 
        alt='background' 
        height={400} 
        width={400}
        className='ml-5 rounded-lg'
        ></img>
    </div>
        {/* IOT */}
 
 <div  className='flex max-w-4xl text-lg text-justify mx-auto md:flex-row flex-col mt-10'>        
<div>
<h1 className="text-3xl font-bold mb-4">Ambient Computing and IoT </h1>
  <p>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices,
Factories, and Cities using Voice computing, Matter and Embedded Devices.
</p>  
  <h2 className='font-bold text-xl'>Quarter III</h2>
  <h2>AC-351: Ambient Computing with Voice Assistants and Matter Devices</h2>
  <h2 className='font-bold text-xl'>Quarter IV</h2>
  <h2>AC-361: Embedded Programming using C and Rust</h2>
  </div>
  <img 
        src='/images/iot.jpg' 
        alt='background' 
        height={400} 
        width={400}
        className='ml-5 rounded-lg'
        ></img>
    </div>
 </div>

 
  )
}

export default Metaverse
