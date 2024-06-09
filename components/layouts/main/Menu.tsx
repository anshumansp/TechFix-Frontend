import { gsap } from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icons from '@/components/ui/icons';
import { Typography } from '@/components/ui/typography';
import { MenuItem, menuItems } from '@/data/menu';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import usePageConfiguration from '@/hooks/usePageConfiguration';
import { cn } from '@/lib/utils';

const NavItem = React.forwardRef<
	React.ElementRef<'div'>,
	React.ComponentPropsWithoutRef<'div'> & { menuItem: MenuItem; sub?: boolean }
>(({ menuItem, sub }, ref) => {
	const { label, href, subItems, depth } = menuItem;
	return (
		<Typography variant={sub ? 'h6' : 'h4'} asChild>
			<div ref={ref} className={cn(!sub && 'translate-x-28 opacity-0', '')}>
				{subItems === null && href && (
					<Link
						href={href}
						className={cn(
							'hover:text-primary-500 group flex w-fit translate-y-0 items-center gap-0 text-white transition-all duration-300 ease-in-out ',
							sub ? 'hover:gap-4' : 'py-3  hover:gap-8',
							{
								'text-5xl': depth === 1,
								'text-2xl pl-4': depth === 2,
								'text-xl pl-8': depth === 3,
							}
						)}
					>
						<Icons.ArrowTopRight
							className={cn(
								'group-hover:text-primary-500 text-white transition-all duration-300',
								sub ? 'h-5 w-0 group-hover:w-5' : 'h-10 w-0 group-hover:w-10'
							)}
						/>
						{label}
					</Link>
				)}

				{subItems !== null && !href && (
					<Collapsible className="w-[350px] space-y-2">
						<CollapsibleTrigger asChild>
							<button
								className={cn(
									'hover:text-primary-500 group flex items-center gap-0 py-3 text-white transition-all duration-300 ease-in-out hover:gap-8',
									{
										'text-5xl': depth === 1,
										'text-2xl pl-4': depth === 2,
										'text-xl pl-8': depth === 3,
									}
								)}
							>
								{label}
								<div className="group-hover:border-primary-500 ml-8 size-3 rounded-full border-2 border-white  transition-all duration-300 ease-in-out group-hover:ml-0"></div>
							</button>
						</CollapsibleTrigger>
						<CollapsibleContent>
							<div className="flex flex-col gap-4">
								{subItems.map((item, index) => (
									<NavItem key={index} menuItem={item} sub={item.sub} />
								))}
							</div>
						</CollapsibleContent>
					</Collapsible>
				)}
			</div>
		</Typography>
	);
});

NavItem.displayName = 'MenuItem';

const MenuItemsContainer = () => {
	const menuItemsContainer = useRef<HTMLDivElement[]>([]);
	useEffect(() => {
		if (menuItemsContainer.current) {
			gsap.to(menuItemsContainer.current, {
				opacity: 1,
				x: 0,
				duration: 1,
				stagger: 0.3,
			});
		}
	}, []);
	return (
		<div className="font-heading flex size-full flex-col justify-between gap-6 md:gap-12">
			<div className="opacity-1 flex flex-col gap-2 md:gap-4">
				{menuItems.map((item, index) => (
					<NavItem
						key={index}
						menuItem={item}
						ref={element => {
							if (element) menuItemsContainer.current[index] = element;
						}}
					/>
				))}
			</div>
			<div className="flex w-full flex-col justify-between gap-12 text-xl font-bold text-white md:flex-row">
				<div className="flex w-full flex-col gap-3 ">
					<Link href="tel:+61 0828042106">+61 0828042106</Link>
					<a href="mailto:hello@techfixsolutions.com">hello@techfixsolutions.com</a>
				</div>
				<p className="w-full text-base">21 Gipps St, Fortitude Valley QLD 4006, Australia</p>
			</div>
		</div>
	);
};

const Menu = () => {
	const { isNavTransparent, toggleMenuOpen, isMenuOpen } = usePageConfiguration();
	const isLargeScreen = useMediaQuery('(min-width:640px)');
	return (
		<div className="relative">
			<button
				onClick={toggleMenuOpen}
				className={cn(
					'transition-color flex items-center gap-2 duration-300 ease-in-out',
					isMenuOpen && 'text-primary-500',
					isNavTransparent ? 'text-white' : 'text-neutral-500'
				)}
			>
				<Icons.Burger />
				{isMenuOpen ? 'Close' : 'Menu'}
			</button>
			{isMenuOpen && isLargeScreen && (
				<Dialog open={isMenuOpen} onOpenChange={toggleMenuOpen}>
					<DialogContent className="sm:techy-clip bg-secondary-500 block h-[75vh] w-full max-w-full overflow-x-hidden overflow-y-scroll border-none font-sans shadow-none sm:left-full sm:min-w-[600px] sm:max-w-lg sm:translate-x-[-110%] sm:rounded-none sm:p-12">
						<MenuItemsContainer />
					</DialogContent>
				</Dialog>
			)}
			{isMenuOpen && !isLargeScreen && (
				<div className="bg-secondary-500 fixed left-0 top-0 h-screen w-full overflow-x-hidden overflow-y-scroll p-6  pb-12 font-sans">
					<button
						onClick={toggleMenuOpen}
						className={cn(
							'text-primary-500 absolute right-6 top-10 float-right flex items-center gap-2 font-semibold ease-in-out'
						)}
					>
						<Icons.Burger className="w-10" />
						Close
					</button>
					<div className="mt-12">
						<MenuItemsContainer />
					</div>
				</div>
			)}
		</div>
	);
};

export default Menu;
