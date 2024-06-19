import React from 'react'

export default function Contact() {
  return (
    <section>
      <div className='px-7 pt-16 md:pt-32'>
        <div>
          <h1 className='font-extrabold text-4xl md:text-7xl'>Contact Us</h1>
          <div className='flex flex-col w-full md:w-[50%] text-sm md:text-md pt-5 md:pt-10'>
            <p>Have a question, comment, or just want to say hello? We're here for you!</p>
            <p>Feel free to reach out to our friendly team for expert assistance, personalized recommendations, or any inquiries you may have.</p>
          </div>
        </div>

        <div className='pt-10 md:pt-20'>
          <video autoPlay muted loop className='h-[50vh] md:h-screen w-full object-cover'>
            <source src="/contactvid.mp4" type='video/mp4' />
          </video>
        </div>
      </div>
    </section>
  )
}

