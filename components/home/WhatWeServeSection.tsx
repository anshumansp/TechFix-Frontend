// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Mousewheel } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { cn } from '@/lib/utils';

import DiscoverButton from '../common/DiscoverButton';
import Icons from '../ui/icons';
import { Typography } from '../ui/typography';
import WeSectionHeader from './WeSectionHeader';

const services = ['Network Support', 'Hardware Maintenance', 'Third-party Maintenance', 'Other Services'];

const servicesData = [
	{
		service: 'Network Support',
		description:
			'Techfix Solutions delivers top-notch network support and ensures optimal performance with proactive monitoring, swift issue resolution, and tailored solutions for connectivity and security challenges.',
		image: '/assets/network-support.jpg',
	},
	{
		service: 'Hardware Maintainance',
		description:
			'Techfix Solutions offers superior hardware maintenance, ensuring peak performance through proactive monitoring, rapid issue resolution, and customized solutions for hardware reliability and efficiency.',
		image: '/assets/hardware-maintainance.jpg',
	},
	{
		service: 'Third-party Maintainance',
		description:
			'Techfix Solutions offers comprehensive third-party maintenance services and ensures seamless integration and support, freeing you to focus on core business activities while we handle your maintenance needs.',
		image: '/assets/third-party.jpg',
	},
	{
		service: 'Other Services',
		description:
			'Techfix Solutions delivers a full spectrum of other services beyond network support and hardware maintenance. Our holistic approach ensures your business operates smoothly and securely.',
		image: '/assets/other-services.jpg',
	},
];

const ServiceContent = ({ service, description, image }: { service: string; description: string; image: string }) => {
	return (
		<div className="flex size-full flex-col-reverse justify-between gap-8 bg-white p-4 sm:p-8 md:flex-row md:gap-12 md:p-20">
			<div className="flex w-full flex-col gap-4 md:gap-7">
				<Icons.Memory className="text-secondary-500 size-7 shrink-0" />
				<Typography variant={'h6'} as="h3" className="text-secondary-500">
					{service}
				</Typography>
				<p className="mb-2 text-lg text-neutral-500">{description}</p>
				<DiscoverButton />
			</div>
			<div className="techy-clip relative h-72 w-full shrink-0 md:shrink">
				<Image src={image} alt={service} fill={true} className="object-cover" />
			</div>
		</div>
	);
};

const MobileServiceContainer = () => {
	const cardsRef = useRef<HTMLDivElement[]>([]);
	const scrollTriggerRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		if (cardsRef.current) {
			gsap.to(cardsRef.current, {
				opacity: 1,
				stagger: 0.4,
				scrollTrigger: {
					scrub: true,
					trigger: scrollTriggerRef.current,
				},
			});
		}
	}, []);
	return (
		<div ref={scrollTriggerRef} className="flex flex-col gap-6 md:hidden">
			{servicesData.map((data, index) => (
				<div
					key={index}
					className="opacity-0"
					ref={element => {
						if (element) {
							cardsRef.current[index] = element;
						}
					}}
				>
					<ServiceContent service={data.service} description={data.description} image={data.image} />
				</div>
			))}
		</div>
	);
};

const WhatWeServeSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const swiperRef = useRef<SwiperRef>(null);
	const handleSlideChange = (index: number) => {
		swiperRef.current?.swiper.slideTo(index);
	};
	return (
		<div className="md:bg-secondary-50 bg-white px-4 py-10 md:py-24">
			<div className="mx-auto max-w-5xl">
				<WeSectionHeader title="What we serve" description="Mastering tech fixes, empowering your success" />
				{/* Header */}
				<div className="whatWeServeProgressContainer hidden bg-white md:flex">
					{services.map((service, index) => (
						<button
							key={index}
							onClick={() => handleSlideChange(index)}
							className={cn(
								'item flex w-full items-center justify-between gap-8 px-8 py-6 transition-all duration-300',
								index === currentSlide ? ' bg-secondary-500  text-white' : 'bg-white text-neutral-50'
							)}
						>
							{service}
							<Icons.Memory />
						</button>
					))}
				</div>

				<Swiper
					direction={'vertical'}
					ref={swiperRef}
					onSlideChange={swiper => {
						setCurrentSlide(swiper.activeIndex);
					}}
					slidesPerView={1}
					spaceBetween={30}
					effect="cards"
					modules={[Mousewheel, EffectCards]}
					mousewheel={{
						releaseOnEdges: true,
						thresholdTime: 500,
					}}
					cardsEffect={{
						perSlideOffset: 8,
						perSlideRotate: 0,
						rotate: false,
					}}
					className="whatWeServeSwiper mt-16 !hidden h-[500px] md:!block"
				>
					{servicesData.map((data, index) => (
						<SwiperSlide key={index} className="bg-white">
							<ServiceContent service={data.service} description={data.description} image={data.image} />
						</SwiperSlide>
					))}
				</Swiper>
				<MobileServiceContainer />
			</div>
		</div>
	);
};

export default WhatWeServeSection;
