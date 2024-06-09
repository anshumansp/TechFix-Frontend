import { IconProps } from '@radix-ui/react-icons/dist/types';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

import Icons from '../ui/icons';
import WeSectionHeader from './WeSectionHeader';

const cardItems: Omit<WhatWeDoCardProps, 'sn'>[] = [
	{
		title: 'Expertise',
		Icon: Icons.AwardStar,
	},
	{
		title: 'Range of service',
		Icon: Icons.SettingsBRoll,
	},
	{
		title: 'Reliability',
		Icon: Icons.HandShake,
	},
	{
		title: 'Cost-effectiveness',
		Icon: Icons.Paid,
	},
	{
		title: 'Customer Support',
		Icon: Icons.SupportAgent,
	},
	{
		title: 'Reputation',
		Icon: Icons.HotelClass,
	},
];

type WhatWeDoCardProps = {
	sn: number;
	title: string;
	Icon: (props: IconProps) => React.JSX.Element;
};

const WhatWeDoCard = ({ sn, title, Icon }: WhatWeDoCardProps) => {
	return (
		<div className="hover:bg-secondary-500 border-neutral-30 group flex size-full flex-col justify-between gap-5 rounded-xl border bg-white p-4 text-neutral-500 transition-all duration-300 ease-linear hover:text-white md:p-7">
			<span className="text-primary-500 group-hover:bg-primary-500 bg-secondary-500 h-[26px] w-fit rounded-3xl px-4 text-base font-medium group-hover:text-white">
				{sn.toString().padStart(2, '0')}
			</span>
			<div className="flex w-full flex-row-reverse items-end justify-end gap-1 md:flex-row md:items-center md:justify-between">
				<p className="text-base font-medium md:text-xl">{title}</p>
				<Icon className="size-6 shrink-0 md:size-8" />
			</div>
		</div>
	);
};

const WhatWeDoSection = () => {
	const cardsRef = useRef<HTMLDivElement[]>([]);
	const scrollTriggerRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		if (cardsRef.current) {
			gsap.to(cardsRef.current, {
				opacity: 1,
				y: 0,
				duration: 1,
				stagger: 0.3,
				scrollTrigger: {
					trigger: scrollTriggerRef.current,
					start: 'top center',
					toggleActions: 'play none none none',
				},
			});
		}
	}, []);
	return (
		<div className="bg-neutral-10  px-4 py-10 md:py-24" ref={scrollTriggerRef}>
			<div className="mx-auto max-w-5xl">
				<WeSectionHeader
					title="WHAT WE DO"
					description="Sustainable IT hardware. 360° services. Loyal relationships with our customers."
				/>
				<div className="grid grid-cols-2 gap-5 md:grid-cols-3">
					{cardItems.map((item, index) => (
						<div
							key={index}
							className="translate-y-4 opacity-0"
							ref={element => {
								if (element) {
									cardsRef.current[index] = element;
								}
							}}
						>
							<WhatWeDoCard sn={index + 1} title={item.title} Icon={item.Icon} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhatWeDoSection;
