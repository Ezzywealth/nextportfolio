// pages/project/[projectId].js
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FiClock, FiUsers, FiTag } from 'react-icons/fi'; // Replace with your preferred icons
import Link from 'next/link';
import GitBtn from './Buttons/gitBtn';
import DemoBtn from './Buttons/demoBtn';

const ProjectDetails = ({ project, setShowProject }) => {
	return (
		<div className='backdrop-brightness-50 flex justify-center  min-h-screen backdrop-blur-lg '>
			<div className='max-w-3xl h-screen p-4 md:p-8 overflow-auto rounded shadow-lg bg-white custom-scrollbar'>
				<div className='max-w-3xl mx-auto overflow-auto mb-8 custom-scrollbar  pb-8  rounded '>
					<div className='flex justify-end w-full font-bold mb-4 text-red-500'>
						<span className='cursor-pointer text-2xl' onClick={() => setShowProject(false)}>
							X
						</span>
					</div>

					<div className=' w-full flex justify-center'>
						<Image height={400} width={700} src={project?.image} alt={project?.name} cla ssName='my-2 rounded' />
					</div>
					<h1 className='text-2xl md:text-3xl mt-2 font-bold'>{project?.name}</h1>
					<div className='flex flex-col md:flex-row md:justify-between md:items-center w-full flex-wrap mt-4'>
						<div className='flex items-center flex-1'>
							<FiClock className='text-base md:text-xl text-gray-600' />
							<span className='ml-2'>{project?.duration}</span>
						</div>
						<div className='flex items-center w-full flex-1 '>
							<FiUsers className='text-base md:text-xl text-gray-600' />
							<span className='ml-2 flex-1 flex'>{`${project?.teamSize} Team Member${project?.teamSize > 1 ? 's' : ''}`} </span>
						</div>
						<div className='flex items-center flex-1'>
							<FiTag className='text-base md:text-xl text-gray-600' />
							<span className='ml-2'>{project?.category}</span>
						</div>
					</div>

					<div className='my-6 space-y-2'>
						<h2 className='text-lg md:text-xl font-semibold underline tracking-wider'>Description:</h2>
						<p className='text-gray-600 text-base md:text-lg'>{project?.description}</p>
					</div>

					<div className='my-6 space-y-2'>
						<h2 className='text-lg md:text-xl font-semibold underline tracking-wider'>Key Features:</h2>
						<div className='text-gray-600  space-y-4'>
							{Object?.entries(project?.features).map(([key, value]) => (
								<div key={key}>
									<li className='grid md:grid-cols-9 items-start gap-1 md:gap-3'>
										<span className='md:col-span-2 capitalize font-semibold text-base md:text-lg'>{key}:</span>
										<span className='md:col-span-7 text-base md:text-lg'>{value}</span>
									</li>
								</div>
							))}
						</div>
					</div>

					{/* Additional Project Details */}
					<div className='my-8 space-y-2'>
						<h2 className='text-xl  font-semibold underline tracking-wider'>Results:</h2>
						<p className='text-gray-600 text-base md:text-lg '>{project?.results}</p>
					</div>

					<div className='flex flex-col md:flex-row justify-between mt-4 mb-2 w-full gap-4 px-20'>
						<GitBtn github={project?.Github} />
						<DemoBtn liveDemo={project?.liveDemo} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;