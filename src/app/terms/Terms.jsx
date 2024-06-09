import React from 'react';

export default function Terms() {
  return (
    <section className='pt-[8vh] px-7'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='w-full md:w-[90%] gap-20'>
                <div>
                    <h3 className='font-extrabold text-3xl md:text-6xl pt-10 md:pt-20'>Terms</h3>
                    <p className='text-sm font-light py-5'>By accessing or using our website, you agree to be bound by these terms of service. Please read these terms carefully before using our website.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-lg'>Use of Website</h3>
                    <p className='text-sm font-light py-5'>By accessing or using our website, you agree to comply with all applicable laws and regulations. You may not use our website for any illegal or unauthorized purpose. You may not interfere with the security or integrity of our website or attempt to gain unauthorized access to any part of our website.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-lg'>Intellectual Property</h3>
                    <p className='text-sm font-light py-5'>All content on this website, including text, graphics, logos, images, and software, is the property of Choice or its licensors and is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content from this website without our prior written consent.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-lg'>Disclaimer or Warranties</h3>
                    <p className='text-sm font-light py-5'>Our website is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-lg'>Limitation of Liability</h3>
                    <p className='text-sm font-light py-5'>In no event shall Choice be liable for any indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of our website.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-lg'>Governing Law</h3>
                    <p className='text-sm font-light py-5'>These terms of service shall be governed by and construed in accordance with the laws of New York, USA, without regard to its conflict of law provisions.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-lg'>Changes to Terms</h3>
                    <p className='text-sm font-light py-5'>We reserve the right to update or modify these terms of service at any time without prior notice. Your continued use of our website after any such changes constitutes your acceptance of the new terms.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-lg'>Contact Us</h3>
                    <p className='text-sm font-light py-5'>If you have any questions or concerns about these terms of service, please contact us at hello@pulse.com.</p>
                </div>
            </div>
            <div className='h-[100vh] md:w-[100%] md:h-[100vh]  right-0 top-[8vh] md:top-0 md:right-7'>
                <img src="/terms.jpg" alt="Terms Image" className='w-full h-full object-cover' />
            </div>
        </div>
    </section>
  )
}
