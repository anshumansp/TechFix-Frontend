import React from 'react';

import Icons from '../ui/icons';
import { Typography } from '../ui/typography';
import WeSectionHeader from './WeSectionHeader';

const WhoWeAreSection = () => {
	return (
		<div className="mx-auto max-w-5xl px-4 py-10 md:py-24">
			<WeSectionHeader title={'Who we are'} description={'Technology that Considers Our Future'} />
			<div className="flex gap-24">
				<Icons.ArrowTopRightBig data-aos="zoom-in-up" className="text-neutral-20 hidden w-1/2 md:block" />
				<div className="w-full">
					<div className="flex gap-5">
						<div data-aos="fade-up" className="border-primary-100 w-full  rounded-xl border bg-[#e6f9fa] p-8">
							<Typography variant={'h5'} className="text-secondary-500">
								5+
							</Typography>
							<p className="mt-4 text-sm font-medium text-neutral-500 md:text-base">
								Years experience in the field of IT
							</p>
						</div>

						<div
							data-aos="fade-up"
							data-aos-delay="100"
							className="border-primary-100 w-full rounded-xl border bg-[#e6f0fa] p-8"
						>
							<Typography variant={'h5'} className="text-secondary-500">
								50+
							</Typography>
							<p className="mt-4 text-sm font-medium text-neutral-500 md:text-base">
								Engineers operating 24/7 to achieve the Goals
							</p>
						</div>
					</div>
					<h5
						data-aos="fade-up"
						data-aos-anchor-placement="center-bottom"
						data-aos-delay="200"
						className="mt-6 text-lg font-bold text-neutral-500 md:mt-12 md:text-4xl"
					>
						Sustainable IT hardware. 360° services. Loyal relationships with our customers.
					</h5>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAreSection;
