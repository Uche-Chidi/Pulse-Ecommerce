import React from 'react';

export default function Refund() {
  return (
    <section className='pt-[8vh] px-7'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='w-full md:w-[90%] gap-20'>
                <div>
                    <h3 className='font-extrabold text-3xl md:text-6xl pt-10 md:pt-20'>Refund Policy</h3>
                    <p className='text-sm font-light py-5'>Below you'll find our refund policy, outlining our commitment to customer satisfaction and transparency.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Returns</h3>
                    <p className='text-sm font-light py-5'>We want you to be completely satisfied with your purchase from Choice. If for any reason you're not happy with your order, you may return it within 30 days of receipt for a full refund or exchange. To initiate a return, please contact our customer support team at <span className='font-extrabold text-md'>hello@pulse.com</span> to obtain a return authorization.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Eligibility</h3>
                    <p className='text-sm font-light py-5'>To be eligible for a return, your item must be unused, in its original condition, and in the original packaging. Any items that show signs of wear, damage, or alteration may not be eligible for return.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Return Process</h3>
                    <p className='text-sm font-light py-5'>Once your return is authorized, you'll receive instructions on how to return your item. Please securely package your item and include a copy of your original order invoice or receipt. You'll be responsible for covering the return shipping costs, unless the return is due to an error on our part.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Refunds</h3>
                    <p className='text-sm font-light py-5'>Once we receive your return and verify its condition, we'll process your refund within 3-5 business days. Refunds will be issued to the original payment method used for the purchase.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Exchanges</h3>
                    <p className='text-sm font-light py-5'>If you'd like to exchange your item for a different style, color, or size, please indicate your preference when initiating the return. We'll do our best to accommodate your request, subject to availability.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Damaged or Defective Items</h3>
                    <p className='text-sm font-light py-5'>If your item arrives damaged or defective, please contact us immediately. We'll arrange for a replacement or refund, depending on the nature of the issue.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Non-refundable Items</h3>
                    <p className='text-sm font-light py-5'>Certain items may not be eligible for return or refund, including gift cards, personalized or custom-made items, and clearance or sale items. Please refer to the product description or contact us for clarification.</p>
                </div>
                <div>
                    <h3 className='font-extrabold text-xl'>Contact Us</h3>
                    <p className='text-sm font-light py-5'>If you have any questions or concerns about these terms of service, please contact us at hello@pulse.com.</p>
                </div>
            </div>
            <div className='h-[100vh] md:w-[100%] md:h-[100vh]  right-0 top-[8vh] md:top-0 md:right-7 sticky'>
                <img src="/refund.jpg" alt="Terms Image" className='w-full h-full object-cover' />
            </div>
        </div>
    </section>
  )
}
