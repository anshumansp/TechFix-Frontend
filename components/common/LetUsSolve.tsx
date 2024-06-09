import Link from 'next/link';

import { companyDetails } from '@/constants/companyDetails';
import { ROUTES } from '@/constants/routes';

import Icons from '../ui/icons';

const CtaCard = ({ href, title }: { href: string; title: string }) => {
	return (
		<Link href={href} className="group flex flex-col justify-between gap-9 rounded-lg bg-white p-8">
			<h2 className="text-secondary-500 text-2xl font-bold">{title}</h2>
			<div className="flex items-center justify-between text-neutral-100 transition-colors duration-300 group-hover:text-neutral-900">
				<p className="text-xl font-medium">Get Help Today</p>
				<Icons.ArrowTopRight className="size-8" />
			</div>
		</Link>
	);
};

const LetUsSolve = () => {
	return (
		<div className="relative bg-[url(/assets/services/cta-bg.png)] bg-cover px-4 py-8 lg:px-0 lg:py-24">
			<div className="absolute left-0 top-0 z-0 size-full bg-black opacity-10"></div>
			<div className="relative z-[1] mx-auto max-w-5xl">
				<h1 className="max-w-3xl text-4xl font-bold text-white md:text-7xl">
					Let us solve your Device Problems with our best experts
				</h1>
				<div className="mt-40 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					<CtaCard title={'Call for support & hire a professional'} href={`tel:${companyDetails.contactNumber}`} />
					<CtaCard title={'Solve your issues with a click'} href={ROUTES.SUBMIT_TICKET} />
				</div>
			</div>
		</div>
	);
};

export default LetUsSolve;
