import 'swiper/css';
import 'swiper/css/pagination';

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Icons from '../ui/icons';

const SocialReviewCard = () => {
	return (
		<div className="w-full max-w-xl shrink-0 rounded-xl bg-white p-8 text-neutral-500">
			<div className="flex items-center gap-4">
				<div className="size-8 shrink-0 rounded-full bg-gray-100"></div>
				<div className="flex items-center gap-1">
					<Icons.TwitterPlain className="shrink-0" />
					<p className="text-sm font-medium">john.Poul • Yesterday at 14:13</p>
				</div>
			</div>
			<p className="mt-2 text-sm">
				Lorem ipsum dolor sit amet consectetur. Morbi faucibus sagittis id egestas malesuada dolor. Aliquet tempor leo
				justo ut in nam tincidunt est eu. Feugiat nunc tellus amet sit eu tortor semper commodo. Ipsum in nec porta
				magna.
			</p>
		</div>
	);
};

const ReviewsSection = () => {
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
		<div ref={scrollTriggerRef} className="bg-secondary-500 w-full px-4 py-10 md:py-24">
			<div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-4 md:flex-row">
				<div className="w-full max-w-xl">
					<span className="font-heading text-primary-500 text-sm font-bold md:text-2xl">From Reviews</span>
					<div className="mt-3 text-white md:mt-10">
						<h3 className="font-heading text-4xl font-bold text-white md:text-[54px]">
							Know what people say about our service
						</h3>
						<p className="font-heading mt-6 text-lg font-bold md:mt-24 md:text-2xl">
							Lorem ipsum dolor sit amet consectetur. Duis fermentum cursus bibendum lectus sed dignissim.
						</p>
					</div>
				</div>
				<div className="hidden flex-col gap-4 md:flex">
					{new Array(3).fill(1).map((_, index) => (
						<div
							key={index}
							className="translate-y-4 opacity-0"
							ref={element => {
								if (element) {
									cardsRef.current[index] = element;
								}
							}}
						>
							<SocialReviewCard />
						</div>
					))}
				</div>

				<Swiper
					pagination={true}
					modules={[Pagination]}
					slidesPerView={1}
					spaceBetween={30}
					className="reviewsSwiper mb-8 w-full md:!hidden"
				>
					{new Array(3).fill(1).map((_, index) => (
						<SwiperSlide key={index} className="w-full">
							<SocialReviewCard />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default ReviewsSection;
