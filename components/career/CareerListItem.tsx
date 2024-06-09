import Link from 'next/link';
import React from 'react';

import { ROUTES } from '@/constants/routes';
import { CareerEntity } from '@/types/models';

import Icons from '../ui/icons';

type CareerListItemProps = {
	career: CareerEntity;
};

const CareerListItem: React.FC<CareerListItemProps> = ({ career }) => {
	return (
		<Link
			href={ROUTES.CAREER + '/' + career.id}
			className="border-secondary-200 group flex w-full justify-between border-b-2 py-8 transition-all duration-300 hover:bg-white hover:px-8"
		>
			<div className="flex flex-col items-start justify-start gap-5">
				<h2 className="text-2xl font-bold text-white group-hover:text-neutral-900">{career.title}</h2>
				<p className="font-['Inter'] text-lg font-medium leading-7 text-blue-200 group-hover:text-neutral-100">
					{career.techStack}
					&nbsp;&nbsp;•&nbsp;&nbsp;
					{career.contractDuration}
				</p>
			</div>
			<div className="text-secondary-500 font-heading hidden items-center gap-8 text-2xl font-bold opacity-0 group-hover:opacity-100 md:flex">
				Apply
				<Icons.ArrowTopRight className="size-6" />
			</div>
		</Link>
	);
};

export default CareerListItem;
