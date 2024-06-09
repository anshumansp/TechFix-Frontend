import React from 'react';

import Icons from '../ui/icons';

const socialHandles = [
	{
		name: 'Discord',
		Icon: Icons.Discord,
	},
	{
		name: 'Messenger',
		Icon: Icons.Messenger,
	},
	{
		name: 'WhatsApp',
		Icon: Icons.WhatsApp,
	},
	{
		name: 'AnyDesk',
		Icon: Icons.Anydesk,
	},
];

const TfsSupportSection = () => {
	return (
		<div className="bg-secondary-900 flex flex-col items-center justify-center px-4 py-10 md:py-24">
			<h1 className="font-headingAlt text-center text-2xl uppercase text-white md:text-4xl">
				TFS <span className="text-primary-500">24/7</span> support
			</h1>
			<p className="mt-4 text-center text-base text-neutral-100 md:text-xl">Let us help you answer your queries</p>
			<div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:mt-12">
				{socialHandles.map(item => (
					<div key={item.name} className="flex items-center gap-2 text-sm text-white md:text-lg">
						{<item.Icon className="h-5 md:h-6" />}
						{item.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default TfsSupportSection;
