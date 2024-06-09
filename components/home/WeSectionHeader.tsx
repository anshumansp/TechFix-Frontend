import React from 'react';

type WeSectionHeaderProps = {
	title: string;
	description: string;
};

const WeSectionHeader = ({ title, description }: WeSectionHeaderProps) => {
	return (
		<>
			<div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
				<h2 className="font-headingAlt w-fit whitespace-nowrap text-3xl uppercase text-neutral-900 md:text-4xl">
					{title}
				</h2>
				<h3 className="max-w-xl text-lg font-bold text-neutral-500 md:text-right md:text-2xl">{description}</h3>
			</div>
			<hr className={'text-neutral-30 my-3 mb-6 md:my-6 md:mb-12'} />
		</>
	);
};

export default WeSectionHeader;
