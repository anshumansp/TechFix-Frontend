import Link from 'next/link';
import React from 'react';

import { ROUTES } from '@/constants/routes';

import Icons from '../ui/icons';

const ContactSection = () => {
	return (
		<div>
			<h1 className="mx-auto max-w-2xl text-center text-5xl font-semibold md:text-7xl">
				Let us repair some &nbsp;
				<span className="relative -ml-3 p-2 pt-4 text-white">
					<span className="relative z-[2]  text-white">tech</span>
					<svg
						viewBox="0 0 171 71"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute left-0 top-0 z-0 size-full"
					>
						<path d="M0.5 56.3673V0.792969H166.209L170.5 6.03868V70.793H12.7116L0.5 56.3673Z" fill="#00C4CC" />
					</svg>
				</span>{' '}
				together
			</h1>
			<Link
				href={ROUTES.CONTACT}
				className="font-headingAlt bg-neutral-20 mt-12 flex items-center  justify-center gap-8 pb-3 pt-5 text-5xl font-bold uppercase md:gap-10 md:pb-5 md:pt-10 md:text-[86px]"
			>
				Contact <Icons.ArrowTopRight className="text-primary-500 size-9 md:size-16" />
			</Link>
		</div>
	);
};

export default ContactSection;
