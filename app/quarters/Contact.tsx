import React from 'react'

const Contact = () => {
  return (
    <div 
    id='contact' 
    className='bg-gray-200'>
      <div>
        <div className= 'text-center mx-auto'>
        <h1 className="text-3xl font-bold mb-5">Contact us</h1>
            <p className='text-center text-black my-5'>Keep in touch with us</p>
            <form
  action="https://formspree.io/f/mzbqjyoy"
  method="POST">
                <div className='mx-auto text-center'>
                    <input 
                    required
                    placeholder='Your Name' 
                    type={"text"}
                    className="p-2 bg-slate-600 w-80 rounded-md focus:outline-none text-white border-2" 
                    />
                </div>
                <div className='mx-auto text-center'>
                    <input 
                    required
                    placeholder='Your Email' 
                    type={"email"}
                    name="email"
                    className="mt-5 p-2 bg-slate-600 w-80 rounded-md focus:outline-none text-white border-2"
                    />
                </div>
                <div className='mx-auto text-center'>
                    <textarea 
                    required
                    name="message"
                    rows={6}
                    placeholder='Your Message...' 
                    className="mt-5 p-2 bg-slate-600 w-80 rounded-md focus:outline-none text-white border-2"
                    />
                </div>
                <button
                type='submit'
                className='mx-auto  mt-5 block px-5 rounded-md bg-gradient-to-b from-slate-600 t0-slate-900 text-black'
                >Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
