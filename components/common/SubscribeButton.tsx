import React from 'react';

import Icons from '../ui/icons';

const SubscribeButton = ({ onClick }: { onClick?: () => void }) => {
	return (
		<button
			onClick={onClick}
			type="submit"
			className="group relative flex h-12 w-44 items-center justify-center text-neutral-100"
		>
			<svg
				className="group-hover:fill-primary-500 transition-all delay-200 duration-700 ease-linear"
				width="100%"
				height="100%"
				viewBox="0 0 182 48"
				fill="transparent"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0.5 31.3115V0.5H173.925L181.5 9.39584V47.5H14.7262L0.5 31.3115Z" stroke="currentColor" />
			</svg>

			<svg
				className="text-prmary-500 absolute scale-0 transition-all duration-300 ease-out group-hover:scale-100"
				width="100%"
				height="100%"
				viewBox="0 0 182 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0.5 31.3115V0.5H173.925L181.5 9.39584V47.5H14.7262L0.5 31.3115Z" stroke="currentColor" />
			</svg>
			<svg
				className="text-primary-500 absolute scale-0 transition-all duration-700 group-hover:scale-100"
				width="100%"
				height="100%"
				viewBox="0 0 182 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0.5 31.3115V0.5H173.925L181.5 9.39584V47.5H14.7262L0.5 31.3115Z" stroke="currentColor" />
			</svg>
			<div className="absolute flex items-center gap-4 whitespace-nowrap font-medium uppercase delay-300 duration-700 group-hover:text-white">
				Subscribe
				<Icons.ArrowTopRight className="size-5" />
			</div>
		</button>
	);
};

export default SubscribeButton;
