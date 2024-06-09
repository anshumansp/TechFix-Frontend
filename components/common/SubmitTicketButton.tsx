import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';

import Icons from '../ui/icons';

const SubmitTicketButton = ({
	filled,
	showArrow,
	label,
}: {
	filled?: boolean;
	showArrow?: boolean;
	label?: string;
}) => {
	return (
		<Link
			href={'/submit-ticket'}
			className="text-primary-500 group relative flex h-12 w-44 items-center justify-center"
		>
			<svg
				className={cn(
					'group-hover:fill-primary-500 transition-all delay-200 duration-700 ease-linear',
					filled && 'fill-primary-500'
				)}
				width="100%"
				height="100%"
				viewBox="0 0 182 48"
				fill="transparent"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0.5 31.3115V0.5H173.925L181.5 9.39584V47.5H14.7262L0.5 31.3115Z" stroke="currentColor" />
			</svg>

			<svg
				className="text-primary-500 absolute scale-0 transition-all duration-300 ease-out group-hover:scale-100"
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
			<div
				className={cn(
					'absolute flex items-center gap-4 whitespace-nowrap font-medium uppercase delay-300 duration-700 group-hover:text-white',
					filled && 'text-white'
				)}
			>
				{label || 'Submit a ticket'}
				{showArrow && <Icons.ArrowTopRight className="size-4" />}
			</div>
		</Link>
	);
};

export default SubmitTicketButton;
