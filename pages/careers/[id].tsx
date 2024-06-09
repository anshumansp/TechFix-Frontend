import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';

import Seo from '@/components/common/Seo';
import Icons from '@/components/ui/icons';
import usePageConfiguration from '@/hooks/usePageConfiguration';
import { getCareerById } from '@/services/career.service';

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
	const career = await getCareerById({ id: parseInt(params?.id as string) });
	return {
		props: {
			career,
		},
	};
};
const CareerDetailPage = ({ career }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { setNavTitle } = usePageConfiguration();

	useEffect(() => {
		setNavTitle('/ Careers');
		return () => setNavTitle(null);
	}, [setNavTitle]);

	return (
		<div>
			<Seo title={career.title} />
			<div className="bg-neutral-20 flex min-h-[60vh] items-center justify-center">
				<div className="flex w-full max-w-4xl justify-between gap-4 rounded-xl bg-white p-12">
					<div className="flex w-full flex-col gap-6">
						<h1 className="text-5xl font-bold">{career.title}</h1>
						<p className="text-base font-medium text-neutral-100">
							{career.contractDuration}
							&nbsp;&nbsp;•&nbsp;&nbsp;
							{career.techStack}
						</p>
					</div>
					<div>
						<Link
							href={'mailto:info@techfixsolutions.com.au'}
							className={
								'bg-primary-500 font-heading flex h-[70px] w-full max-w-fit shrink-0 items-center gap-4 whitespace-nowrap rounded-xl p-5 text-center text-2xl font-bold text-white'
							}
						>
							Apply for this job <Icons.ArrowTopRight className="size-5" />
						</Link>
						<div className="mt-7">
							<p className="text-center text-sm font-normal text-neutral-500">Share this Job Opening</p>
							<div className="mt-4 flex items-center justify-center gap-2">
								<Link
									href={
										'https://www.facebook.com/sharer/sharer.php?u=https://techfixsolutions.com.au/careers/' + career.id
									}
									className="p-2"
								>
									<Icons.Facebook className="text-neutral-90" />
								</Link>
								{/* twitter share */}
								<Link
									href={
										'https://twitter.com/intent/tweet?text=Check out this job opening at Techfix Solutions&url=https://techfixsolutions.com.au/careers/' +
										career.id
									}
									className="p-2"
								>
									<Icons.Twitter className="text-neutral-90" />
								</Link>
								{/* LinkedIn share */}
								<Link
									href={
										'https://www.linkedin.com/shareArticle?mini=true&url=https://techfixsolutions.com.au/careers/' +
										career.id
									}
									className="p-2"
								>
									<Icons.LinkedIn className="text-neutral-90" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="min-h-[60vh] bg-neutral-900">
				<div className="mx-auto flex w-full max-w-4xl flex-col gap-12 py-12 md:py-24">
					<div>
						<h1 className="text-primary-500 text-4xl font-bold">Job Description</h1>
						<p className="mt-6 text-lg font-medium leading-7 text-white">{career.description}</p>
					</div>
					<div>
						<h1 className="text-primary-500 text-4xl font-bold">Roles & Responsibilities</h1>
						<div dangerouslySetInnerHTML={{ __html: career.roles }} className="prose mt-6 text-white"></div>
					</div>
					<div>
						<h1 className="text-primary-500 text-4xl font-bold">Qualifications</h1>
						<div dangerouslySetInnerHTML={{ __html: career.qualifications }} className="prose mt-6 text-white"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CareerDetailPage;
