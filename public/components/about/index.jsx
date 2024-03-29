/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import portfolio from '../../images/FullSizeRender (1).jpg';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../sectionHeader/SectionHeader';

const About = () => {
	const textRef = React.useRef(null);
	const textInView = useInView(textRef, { once: true });
	return (
		<main className='py-4'>
			<SectionHeader title='About Me' subtitle={'Discover More About Me.'} />
			<div id='about' className='w-full pb-8 lg:px-20  flex justify-center items-center'>
				<motion.div id='about' className='flex flex-col-reverse  md:justify-center md:grid grid-cols-2  gap-4'>
					<motion.section data-aos='fade-up' data-aos-duration='500' data-aos-once='true' className='flex flex-col gap-4 px-4  items-end  justify-start w-full'>
						<div className='w-full space-y-4 text-center md:text-start text-base tracking-wider leading-6 text-secondary-text-light dark:text-secondary-text-dark'>
							<p>With several years of experience in web development, I'm driven by a passion for innovation and a steadfast commitment to excellence. I'm an architect of digital experiences. My meticulous attention to detail and focus on crafting clean and maintainable code ensures long-term scalability and ease of maintenance for my projects.</p>
							<p>Aside coding, I love to play football, watch movies, and play video games. I also love to learn new things and I'm always open to new opportunities. I'm currently open to new opportunities, so feel free to reach out to me if you have any questions or would like to work together on a project.</p>
						</div>
					</motion.section>
					<section className='flex flex-col items-center w-auto px-4 justify-center'>
						<motion.div data-aos='fade-up' data-aos-duration='500' data-aos-once='true' className=''>
							<Image src={portfolio} alt='me' layout='intrinsic' height={350} width={400} className='shadow-xl mx-4  rounded-2xl ' />
						</motion.div>
					</section>
				</motion.div>
			</div>
		</main>
	);
};

export default About;
