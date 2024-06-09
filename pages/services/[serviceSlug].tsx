import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React, { useEffect } from 'react';

import LetUsSolve from '@/components/common/LetUsSolve';
import Seo from '@/components/common/Seo';
import SubmitTicketButton from '@/components/common/SubmitTicketButton';
import WhyBusinessTurn from '@/components/common/WhyBusinessTurn';
import Icons from '@/components/ui/icons';
import { getServiceTypeRoute } from '@/constants/routes';
import { SERVICES_DATA } from '@/data/services';
import usePageConfiguration from '@/hooks/usePageConfiguration';
import { ServiceType } from '@/types';

export function getStaticPaths() {
	const paths = SERVICES_DATA.map(s => ({ params: { serviceSlug: s.slug } }));
	return {
		paths,
		fallback: false,
	};
}

export function getStaticProps({ params }: GetStaticPropsContext) {
	const slug = params?.serviceSlug as string;
	const service = SERVICES_DATA.find(s => s.slug === slug);
	if (!service) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			service,
		},
	};
}

const ServiceTypeCard = ({ serviceType }: { serviceType: ServiceType }) => {
	return (
		<Link
			href={getServiceTypeRoute(serviceType.slug)}
			className="bg-neutral-20 border-neutral-30 outline-secondary-500 hover:bg-secondary-50 hover:border-secondary-500 flex flex-col justify-between gap-8 rounded-xl border p-6 transition-colors duration-300"
		>
			<h2 className="font-sans text-xl text-neutral-500">{serviceType.name}</h2>
			<div className="flex items-center justify-between text-neutral-100">
				<span className="flex items-center gap-1">
					<Icons.Pages className="text-inherit" />
					{serviceType.rating}
				</span>
				<span>{serviceType.skills} skills</span>
			</div>
		</Link>
	);
};

const ServiceListPage = ({ service }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { setNavTitle } = usePageConfiguration();
	useEffect(() => {
		setNavTitle(`/Services/${service.name}`);
		return () => setNavTitle(null);
	}, [service.name, setNavTitle]);
	return (
		<div className="bg-neutral-10">
			<Seo title={service.name} />
			<div className="mx-auto max-w-5xl px-4 py-8 lg:px-0 lg:py-24">
				<h1 className="max-w-lg text-2xl font-bold  md:text-4xl">Our Complete Range of {service.name} Services</h1>
				<div className="mt-6 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
					{service.services.map((serviceType, index) => (
						<ServiceTypeCard key={index} serviceType={serviceType} />
					))}

					<div className="bg-secondary-500 flex flex-col justify-between gap-8 rounded-xl border p-6 text-white transition-colors duration-300">
						<h2 className="text-2xl font-bold">Submit a ticket for free</h2>
						<SubmitTicketButton filled />
					</div>
				</div>
			</div>
			<LetUsSolve />
			<WhyBusinessTurn />
		</div>
	);
};

export default ServiceListPage;
