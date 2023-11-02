/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import SubmitBtn from '../Buttons/submit';
import SectionHeader from '../sectionHeader/SectionHeader';

const Contact = () => {
	const formRef = React.useRef(null);

	const formInView = useInView(formRef, { once: true });
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm();
	const form = useRef();

	const regForm = (data, e) => {
		emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY).then(
			(response) => {
				toast.success('Message sent successfully');
			},
			(err) => {
				toast.error('Message not sent');
			}
		);
		reset();
	};

	return (
		<div data-aos='fade-up' data-aos-duration='500' data-aos-once='true' id='contact' transiton={{ duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='flex px-4 gap-8 flex-col w-full'>
			<SectionHeader title='Contact Me' subtitle={"send a message and I'll be in touch with you as soon as possible."} />

			<div className='bg-[#e7eeee] grid grid-col-1 md:grid-cols-3 px-4 md:px-12 lg:px-16 py-20'>
				<div className='flex flex-col items-center gap-4 md:col-span-1'>
					<h2 className='text-4xl font-bold'>Work inquiries</h2>
					<p className='font-normal mb-4 '>Kindly Fill in this form with your inquiry.</p>
				</div>
				<div className=' md:col-span-2 justify-center flex w-full'>
					<form className='flex flex-col gap-[1rem] items-center max-w-xl w-full' onSubmit={handleSubmit(regForm)} ref={form}>
						<div className='flex flex-col w-full'>
							<label htmlFor='name' className=' text-gray-600  font-semibold'>
								Your name
							</label>
							<input type='text' id='name' name='from_name' className='w-full rounded-md   px-[10px] py-4' {...register('from_name', { required: 'Please enter your name' })} />
							{errors?.from_name && <span className='text-red-500'>{errors?.from_name?.message}</span>}
						</div>
						<div className='flex flex-col w-full'>
							<label htmlFor='email' className='text-gray-600  font-semibold '>
								Your email
							</label>
							<input type='email' id='email' name='from_email' {...register('from_email', { required: 'Please enter your email address' })} className='w-7/10 rounded-md py-4   px-[10px]' />
							{errors?.from_email && <span className='text-red-500'>{errors?.from_email?.message}</span>}
						</div>
						<div className='flex flex-col w-full'>
							<label htmlFor='subject' className='text-gray-600  font-semibold '>
								Subject
							</label>
							<input type='text' id='subject' name='from_subject' className='w-7/10 rounded-md  px-[10px] py-4' {...register('from_subject', { required: 'Please enter a subject' })} />
							{errors.from_subject && <span className='text-red-500'>{errors?.from_subject?.message}</span>}
						</div>
						<div className='flex flex-col w-full'>
							<label htmlFor='message' className='text-gray-600  font-semibold '>
								Your Message
							</label>
							<textarea type='text' id='message' rows={6} {...register('message', { required: 'Please enter your message' })} name='message' className='w-7/10 rounded-md  px-[10px]' />
							{errors?.message && <span className='text-red-500'>{errors.message?.message}</span>}
						</div>
						<div className='w-full flex justify-start'>
							<SubmitBtn onClick={() => handleSubmit(regForm)} />
						</div>
					</form>
				</div>
			</div>
			{/* <div className=' md:px-12 lg:px-16 capitalize'>
				<h4 className='text-2xl md:text-3xl font-semibold text-[#17161A]'>You can also reach us via:</h4>
				<ul>
					<li className='flex gap-2 lowercase'>
						<a href='https://www.eudiomuno@yahoo.com' className='text-base  active:red capitalize ' target='_blank' rel='noreferrer'>
							email:
						</a>
						<span>eudiomuno@yahoo</span>
					</li>
					<li>
						<a href='https://wa.me/+2348147576669' className='text-base hover:text-red-500 active:red  ' target='_blank' rel='noreferrer'>
							whatsApp
						</a>
					</li>
					<li>
						<a href='https://www.twitter.com/EzzyWealth' className='text-base hover:text-red-500 active:red  ' target='_blank' rel='noreferrer'>
							twitter
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/ezekiel-udiomuno' className='text-base hover:text-red-500 active:red  ' target='_blank' rel='noreferrer'>
							linkedin
						</a>
					</li>
				</ul>
			</div> */}
		</div>
	);
};

export default Contact;
