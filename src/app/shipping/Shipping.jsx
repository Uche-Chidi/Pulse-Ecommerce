import React from 'react';

export default function Shipping() {
  return (
    <section className='pt-[8vh] px-7'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='w-full md:w-[90%] gap-20 h-full overflow-auto'>
                <div>
                    <h3 className='font-extrabold text-3xl md:text-6xl pt-10 md:pt-20'>Shipping Policy</h3>
                    <p className='text-sm font-light py-5'>Below you'll find our shipping policy, designed to ensure a smooth and convenient shopping experience.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Processing Time</h3>
                    <p className='text-sm font-light py-5'>Orders are typically processed within 1-2 business days after payment confirmation. During peak seasons or promotional periods, processing times may be slightly longer.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Shipping Methods</h3>
                    <p className='text-sm font-light py-5'>We offer several shipping options to meet your needs, including Standard Shipping, Expedited Shipping, and Overnight Shipping. Please note that shipping times may vary depending on your location and the shipping method selected.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Shipping Fees</h3>
                    <p className='text-sm font-light py-5'>Shipping fees are calculated based on the selected shipping method, destination, and order weight. You'll see the shipping options and associated fees at checkout before completing your purchase.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>International Shipping</h3>
                    <p className='text-sm font-light py-5'>We currently offer international shipping to select countries. International orders may be subject to customs duties, taxes, and import fees, which are the responsibility of the recipient.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Order Tracking</h3>
                    <p className='text-sm font-light py-5'>Once your order has shipped, you'll receive a shipping confirmation email with tracking information. You can track your order's progress using the provided tracking number.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Shipping Restrictions</h3>
                    <p className='text-sm font-light py-5'>Please note that we are unable to ship to P.O. boxes or APO/FPO addresses. Additionally, certain products may be restricted from international shipping due to customs regulations.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Contact Us</h3>
                    <p className='text-sm font-light py-5'>If you have any questions or concerns about these terms of service, please contact us at hello@pulse.com.</p>
                </div>
            </div>
            <div className='h-[100vh] md:w-[100%] md:h-[100vh]  right-0 top-[8vh] md:top-0 md:right-7 sticky'>
                <img src="/shipping.jpg" alt="Terms Image" className='w-full h-full object-cover' />
            </div>
        </div>
    </section>
  )
}
