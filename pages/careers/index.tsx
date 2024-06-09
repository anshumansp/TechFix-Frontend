import { gsap } from 'gsap';
import { InferGetServerSidePropsType } from 'next';
import React, { useEffect, useRef } from 'react';

import CareerListItem from '@/components/career/CareerListItem';
import Seo from '@/components/common/Seo';
import Icons from '@/components/ui/icons';
import usePageConfiguration from '@/hooks/usePageConfiguration';
import { getCareersService } from '@/services/career.service';
import { CareerEntity } from '@/types/models';

const cardItems = [
	{
		title: 'Honesty',
	},
	{
		title: 'Persistency',
	},
	{
		title: 'Improvement',
	},
	{
		title: 'Purpose',
	},
];

export const getServerSideProps = async () => {
	const careers = await getCareersService();
	return {
		props: { careers: careers as CareerEntity[] },
	};
};

const CareersPage = ({ careers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { setNavTitle } = usePageConfiguration();

	const heroRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setNavTitle('/ Careers');
		return () => setNavTitle(null);
	}, [setNavTitle]);

	useEffect(() => {
		gsap.to(heroRef.current, {
			opacity: 1,
			scale: 1,
			duration: 2,
		});
	}, []);
	return (
		<div className="bg-neutral-10">
			<Seo title="Careers" />
			<div ref={heroRef} className="mx-auto max-w-4xl scale-125 px-4 py-24 opacity-25 md:px-0">
				<h1 className="text-4xl font-bold md:text-7xl">Explore Exciting Career Opportunities</h1>
				<p className="font-heading mt-8 max-w-xs text-xl font-bold text-neutral-500 md:ml-auto md:text-2xl">
					We value hard work, dedication, and a passion for providing technical and reliable solutions to our clients.
				</p>
				<Icons.ArrowLight className="text-secondary-500 mt-12 size-32 md:mx-auto md:size-auto" />
			</div>
			<div className="bg-secondary-50 px-4  py-12 md:py-24 lg:px-0">
				<div className="mx-auto max-w-6xl">
					<div className="border-secondary-100 md: flex flex-col items-center justify-between gap-6 border-b py-8 md:flex-row">
						<h1 className="font-headingAlt w-full text-4xl font-bold">WHAT WE BELIEVE IN</h1>
						<p className="font-heading text-xl font-bold text-neutral-500 md:max-w-md md:text-right md:text-2xl">
							Our team&apos;s mindset enabled our big shift into becoming a venture builder.
						</p>
					</div>
					<div className="mt-12 grid grid-cols-2 gap-5 md:mt-24 md:grid-cols-4">
						{cardItems.map((item, index) => (
							<div
								key={index}
								className="hover:bg-secondary-500 border-neutral-30 group flex size-full flex-col justify-between gap-5 rounded-xl border bg-white p-4 text-neutral-500 transition-all duration-300 ease-linear hover:text-white md:p-7"
							>
								<span className="group-hover:bg-primary-500 bg-secondary-500 h-[26px] w-fit rounded-3xl px-4 text-base font-medium text-white">
									{(index + 1).toString().padStart(2, '0')}
								</span>
								<div className="flex w-full flex-row-reverse items-end justify-end gap-1 md:flex-row md:items-center md:justify-between">
									<p className="text-base font-medium md:text-xl">{item.title}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="bg-secondary-500 px-4 py-12 md:py-24 xl:px-0">
				<div className="mx-auto max-w-6xl">
					<h1 className="text-2xl font-bold text-white md:text-4xl">OPEN POSITIONS</h1>
					<p className="mt-2 max-w-xl text-base font-medium text-white md:mt-6 md:text-xl">
						Most of us combine work at home and office but we also offer a remote option for most positions.
					</p>
					<div className="mt-6 flex w-full flex-col md:mt-12">
						{careers.map((career, index) => (
							<CareerListItem key={index} career={career} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CareersPage;
