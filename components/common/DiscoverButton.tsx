import Link from 'next/link';
import React from 'react';

import { ROUTES } from '@/constants/routes';

import Icons from '../ui/icons';

const DiscoverButton = () => {
	return (
		<Link
			href={ROUTES.SERVICES}
			className="text-secondary-500 group relative flex h-12 w-44 items-center justify-center"
		>
			<svg
				className="group-hover:fill-secondary-500 transition-all delay-200 duration-700 ease-linear"
				width="100%"
				height="100%"
				viewBox="0 0 182 48"
				fill="transparent"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M1 31.2958V0.5H164.536L173 9.4114V47.5H16.8831L1 31.2958Z" stroke="currentColor" />
			</svg>

			<svg
				className="text-secondary-500 absolute scale-0 transition-all duration-300 ease-out group-hover:scale-100"
				width="100%"
				height="100%"
				viewBox="0 0 182 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M1 31.2958V0.5H164.536L173 9.4114V47.5H16.8831L1 31.2958Z" stroke="currentColor" />
			</svg>
			<svg
				className="text-secondary-500 absolute scale-0 transition-all duration-700 group-hover:scale-100"
				width="100%"
				height="100%"
				viewBox="0 0 182 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M1 31.2958V0.5H164.536L173 9.4114V47.5H16.8831L1 31.2958Z" stroke="currentColor" />
			</svg>
			<div className="absolute flex  items-center gap-4 whitespace-nowrap font-medium uppercase delay-300 duration-700 group-hover:text-white">
				<Icons.ArrowTopRight className="size-5 shrink-0" />
			</div>
		</Link>
	);
};

export default DiscoverButton;
