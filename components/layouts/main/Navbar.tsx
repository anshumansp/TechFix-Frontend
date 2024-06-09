import Link from 'next/link';
import React from 'react';

import SubmitTicketButton from '@/components/common/SubmitTicketButton';
import Icons from '@/components/ui/icons';
import { typographyVariants } from '@/components/ui/typography';
import { ROUTES } from '@/constants/routes';
import usePageConfiguration from '@/hooks/usePageConfiguration';
import { cn } from '@/lib/utils';

import Menu from './Menu';

const Navbar = () => {
	const { isNavTransparent, navTitle } = usePageConfiguration();
	return (
		<div
			className={cn(
				'top-0 z-10 flex w-full items-center justify-between overflow-x-hidden bg-black/10   p-4 py-6 transition-all duration-300 md:px-20 md:py-12',
				isNavTransparent ? 'absolute' : 'relative bg-white'
			)}
		>
			<div className="flex items-center gap-12">
				<Link href={ROUTES.HOME}>
					{isNavTransparent ? (
						<Icons.LogoWhiteHorizontal className="h-8 w-32 md:h-11 md:w-40" />
					) : (
						<Icons.LogoBlack className="h-8 w-32 md:h-11 md:w-40" />
					)}
				</Link>
				<span
					className={cn(
						'hidden max-w-xs truncate md:block',
						typographyVariants({ variant: 'h6' }),
						isNavTransparent ? 'text-white' : 'text-black'
					)}
				>
					{navTitle}
				</span>
			</div>
			<div className="flex items-center gap-12">
				<div className="hidden md:block">
					<SubmitTicketButton />
				</div>
				<Menu />
			</div>
		</div>
	);
};

export default Navbar;
