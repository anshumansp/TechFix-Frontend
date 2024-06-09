import React from 'react';

import { WHY_BUSINESS_TURN_DATA } from '@/data/services';
import { cn } from '@/lib/utils';

import Icons from '../ui/icons';
import Container from './Container';

const WhyBusinessTurn = () => {
	return (
		<div className="px-4 py-8 lg:px-0 lg:py-24">
			<Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 ">
				<div className="bg-neutral-20 col-span-1 rounded-xl py-12 md:px-8 lg:col-span-3">
					<h1 className="max-w-md text-4xl font-bold md:text-[54px] md:leading-[1.05]">Why businesses turn to TFS</h1>
					<div className="mt-8">
						{WHY_BUSINESS_TURN_DATA.map((item, index) => (
							<div key={index} className="flex max-w-sm gap-3 py-4">
								<Icons.StarCircle
									className={cn('mt-1 size-5 shrink-0', index === 0 ? 'text-neutral-900' : 'text-neutral-500')}
								/>
								<div>
									<h2
										className={cn(
											'text-xl font-bold md:text-2xl',
											index === 0 ? 'text-neutral-900' : 'text-neutral-500'
										)}
									>
										{item.title}
									</h2>
									<p className="mt-2 text-sm text-neutral-100 md:mt-4">{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="bg-secondary-500 col-span-1 rounded-xl px-8  py-12 text-white lg:col-span-2">
					<h1 className="max-w-[290px] text-4xl font-bold">We’re Australia’s leading tech repair company</h1>
					<div className="mt-12 flex gap-4 md:mt-36">
						<Icons.Pages className="size-6" />
						<div>
							<span className="font-heading text-2xl font-bold">
								4.8 <span className="text-sm font-semibold">(1370 Reviews)</span>
							</span>
							<p className="mt-2 text-base font-medium">Rated Quality Services</p>
						</div>
					</div>

					<div className="mt-12 flex gap-4">
						<Icons.Public className="size-6" />
						<div>
							<h3 className="font-heading max-w-[171px] text-2xl font-bold">Global Brand Partnerships</h3>
							<div className="mt-3 flex items-center gap-6">
								<img src={'/assets/brands/apple.png'} className="object-contain" alt="Apple Brand" />
								<img src={'/assets/brands/dell.png'} className="object-contain" alt="Dell Brand" />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default WhyBusinessTurn;
