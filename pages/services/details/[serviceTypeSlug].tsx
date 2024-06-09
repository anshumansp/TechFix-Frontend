import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import React, { useEffect } from 'react';

import LetUsSolve from '@/components/common/LetUsSolve';
import Seo from '@/components/common/Seo';
import SubmitTicketButton from '@/components/common/SubmitTicketButton';
import WhyBusinessTurn from '@/components/common/WhyBusinessTurn';
import { SERVICE_TYPE_DATA } from '@/data/services';
import usePageConfiguration from '@/hooks/usePageConfiguration';

export function getStaticPaths() {
	const paths = SERVICE_TYPE_DATA.map(s => ({ params: { serviceTypeSlug: s.slug } }));
	return {
		paths,
		fallback: false,
	};
}

export function getStaticProps({ params }: GetStaticPropsContext) {
	const slug = params?.serviceTypeSlug as string;
	const serviceDetail = SERVICE_TYPE_DATA.find(s => s.slug === slug);
	if (!serviceDetail) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			serviceDetail,
		},
	};
}

const ServiceTypeDetailPage = ({ serviceDetail }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { setNavTitle } = usePageConfiguration();
	useEffect(() => {
		setNavTitle(`Services / ` + serviceDetail.name);
	}, [serviceDetail.name, setNavTitle]);
	return (
		<div className="bg-neutral-10">
			<Seo title={serviceDetail.name} description={serviceDetail.description} />
			<div className="ml-auto flex w-full max-w-[1440px] flex-col-reverse justify-between gap-12 px-4 py-24 lg:flex-row lg:items-end lg:pt-0 xl:px-0">
				<div className="flex flex-col gap-8 lg:max-w-xl">
					<h1 className="text-4xl font-bold leading-[1.1] text-neutral-900 lg:text-[54px]">{serviceDetail.name}</h1>
					<p className="text-base text-neutral-500 lg:text-lg">{serviceDetail.description}</p>
					<SubmitTicketButton />
				</div>
				<div className="techy-clip hidden h-[550px] w-full bg-[url(/assets/services/cta-bg.png)] bg-cover lg:block lg:max-w-2xl"></div>
			</div>
			<LetUsSolve />
			<WhyBusinessTurn />
		</div>
	);
};

export default ServiceTypeDetailPage;
