import 'swiper/css';

import { gsap } from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Seo from '@/components/common/Seo';
import { aboutUsContent, slideImages, stats, teamImage } from '@/data/about-us';
import usePageConfiguration from '@/hooks/usePageConfiguration';
import { cn, getMediaUrl } from '@/lib/utils';

const AboutUsPage = () => {
	const { setNavTitle } = usePageConfiguration();

	const aboutUsContainer = useRef<HTMLDivElement[]>([]);
	const heroRef = useRef<HTMLDivElement>(null);

	const scrollTriggerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (aboutUsContainer.current) {
			gsap.to(aboutUsContainer.current, {
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
			gsap.to(heroRef.current, {
				opacity: 1,
				scale: 1,
				duration: 2,
			});
		}
	}, []);

	useEffect(() => {
		setNavTitle('/ About Us');
		return () => setNavTitle(null);
	}, [setNavTitle]);

	return (
		<div className="bg-neutral-20">
			<Seo title="About Us" />
			<div
				ref={heroRef}
				className="aboutUsHero flex min-h-[90vh] scale-125 items-center justify-center bg-[url(/assets/about-us-bg-mobile.png)] bg-cover p-4 opacity-25 md:bg-[url(/assets/about-us-bg.png)]"
			>
				<h1
					className={
						' group max-w-3xl text-center text-[54px] font-bold leading-tight text-white/30 transition-all duration-300 md:text-7xl'
					}
				>
					<span className="text-white transition-all group-hover:text-white md:text-inherit">Caring.</span> This is what
					we’re all about
				</h1>
			</div>
			<div className="bg-primary-500 relative flex h-[100px] items-center">
				<svg
					width="100%"
					height="86px"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute left-0 top-1/2 z-0 -translate-y-1/2"
				>
					<path
						d="M394.418 39.9147H328.605C327.962 34.6237 325.628 29.4946 321.604 25.4348L296.345 0H287.562L327.201 39.9147H261.387C260.744 34.6237 258.411 29.4946 254.386 25.4348L229.127 0H220.344L259.983 39.9147H194.17C193.527 34.6237 191.193 29.4946 187.168 25.4348L161.902 0H153.119L192.758 39.9147H126.945C126.302 34.6237 123.968 29.4946 119.944 25.4348L94.6777 0H85.8947L125.534 39.9147H59.7273C59.0845 34.6237 56.7507 29.4946 52.726 25.4348L27.46 0H18.677L58.3159 39.9147H0V46.1978L33.3293 46.1697V46.226L58.1063 46.2049L18.5512 86H27.3343L52.7191 60.4667C56.6948 56.4632 59.0146 51.4255 59.6924 46.2049L100.54 46.1697V46.226L125.317 46.2049L85.7689 86H94.5519L119.937 60.4667C123.912 56.4632 126.232 51.4255 126.91 46.2049L167.758 46.1697V46.226L192.535 46.2049L152.987 86H161.77L187.154 60.4667C191.13 56.4632 193.45 51.4255 194.128 46.2049L234.975 46.1697V46.226L259.752 46.2049L220.204 86H228.987L254.372 60.4667C258.348 56.4632 260.668 51.4255 261.345 46.2049L302.193 46.1697V46.226L326.97 46.2049L287.422 86H296.205L321.59 60.4667C325.566 56.4632 327.885 51.4255 328.563 46.2049L394.244 46.1486L354.64 86H363.423L388.807 60.4667C398.401 50.8064 398.394 35.0951 388.807 25.4348L363.562 0H354.779L394.418 39.9147Z"
						fill="#54D7DD"
					/>
				</svg>
				<h2 className="font-heading relative  w-full text-center text-xl font-bold text-white md:text-2xl">
					Technology that Considers Our Future
				</h2>
			</div>
			<div className="mb-4 bg-white py-10 md:mb-20 md:py-24">
				<div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-4 xl:p-0">
					<h1 className="font-headingAlt text-2xl font-bold text-neutral-900 md:text-4xl">About</h1>
					<p className="font-heading col-start-1 text-lg font-bold text-neutral-500 sm:col-span-2 md:col-span-3 md:col-start-2 md:text-4xl">
						Tech Fix Solutions: Your one-stop shop for expert hardware and software support, making technology
						effortless.
					</p>
					<hr className="col-start-1 mb-6 mt-4 sm:col-span-2 md:col-span-4 md:mb-24 md:mt-8" />
					<div
						ref={scrollTriggerRef}
						className="col-start-1 grid gap-6 sm:col-span-2 sm:grid-cols-2 md:col-span-3 md:col-start-2 md:gap-12"
					>
						{aboutUsContent.map((content, index) => (
							<div
								key={index}
								ref={element => {
									if (element) aboutUsContainer.current[index] = element;
								}}
								className="translate-y-3 opacity-0"
							>
								<div className="relative mb-4 h-60 w-full md:mb-7">
									<Image src={getMediaUrl(content.imageUrl)} alt={content.title} quality={100} fill />
								</div>
								<h2 className="text-secondary-500 font-heading text-xl font-bold md:text-2xl">{content.title}</h2>
								<p className="mt-4 text-sm font-normal text-neutral-500 md:mt-7">{content.description}</p>
							</div>
						))}
					</div>

					<hr className="col-start-1 my-6 sm:col-span-2 md:col-span-3 md:col-start-2 md:mb-24 md:mt-12" />
					<div>
						<h2 className="font-sans text-base font-medium text-neutral-500">Current Team</h2>
						<div className="mt-5 flex items-center">
							{teamImage.map((imgSrc, index) => (
								<div
									key={index}
									className={cn(
										'relative  size-12 rounded-full border-2 border-white bg-white',
										index === 0 ? '-ml-0' : '-ml-4'
									)}
								>
									<Image src={imgSrc} alt={'Test Image'} quality={100} fill />
								</div>
							))}
							<div className="bg-secondary-500 relative -ml-4  flex size-12 items-center justify-center rounded-full border-2 border-white text-base font-medium text-white">
								+13
							</div>
						</div>
					</div>
					<div className="col-start-1 mt-6 flex flex-wrap justify-between gap-12 sm:col-span-2 sm:mt-0 sm:flex-row md:col-span-3 md:col-start-2">
						{stats.map((stat, index) => (
							<div key={index} className={'max-w-[200px]'}>
								<h3 className="text-4xl font-bold text-neutral-900 md:text-5xl">{stat.count}</h3>
								<p className="text-sm font-medium text-neutral-500 md:text-base">{stat.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="bg-[url(/assets/about-us-ceo-bg.png)] bg-cover py-12 lg:py-24">
				<div className="mx-auto p-4 md:max-w-5xl xl:p-0">
					<div className="group relative">
						<h1 className="text-4xl font-bold leading-[36px] text-white/30 lg:text-7xl lg:leading-[72px]">
							To create a great future, you need to create a{' '}
							<span className="text-white transition-all group-hover:text-white md:text-inherit">great technology</span>
						</h1>
						{/* <div className="relative mt-4 flex w-fit items-center gap-3 rounded-full bg-white/30 p-1 pr-5 backdrop-blur-md lg:absolute lg:bottom-0 lg:right-1/4 lg:mt-0"> */}
						{/* 	<div className="h-10 w-10 rounded-full bg-[url(/assets/team/ch_03.png)] bg-cover md:h-12 md:w-12"></div> */}
						{/* 	<span className="font-heading text-lg font-bold text-white md:text-2xl">Ramesh Kandel</span> */}
						{/* </div> */}
					</div>
					<div className="mt-16 flex w-full flex-col justify-between gap-6 md:mt-48 md:flex-row md:items-end md:gap-24">
						<h2 className="font-heading text-2xl font-bold text-white md:max-w-[124px] md:text-4xl">
							Behind the Mission
						</h2>
						<p className="w-full text-lg text-white">
							TechFix Solutions is a dynamic and innovative company specializing in information and communication
							technologies established in 2022.
						</p>
					</div>
				</div>
			</div>
			<div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-0">
				<div className="mx-auto max-w-3xl">
					<h1 className="text-2xl font-bold leading-tight text-neutral-900 md:text-[54px]">
						Pushing the Limits of Technology to Solve Society’s Most Challenging Problems
					</h1>
					<p className="font-heading mt-4 text-base font-bold text-neutral-500 md:mt-12 md:text-2xl">
						Made possible only by a powerful convergence of multiple disciplines towards a common mission with.
					</p>
				</div>

				<Swiper
					pagination={true}
					slidesPerView={1.2}
					breakpoints={{
						'640': {
							slidesPerView: 2.4,
						},
						'1024': {
							slidesPerView: 4,
						},
					}}
					spaceBetween={20}
					className="mt-8 w-full md:mt-24"
				>
					{slideImages.map((imgSrc, index) => (
						<SwiperSlide key={index}>
							<div className="relative h-[400px] overflow-hidden rounded-2xl">
								<Image src={imgSrc} fill alt={'dummy'} className="object-cover" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default AboutUsPage;
