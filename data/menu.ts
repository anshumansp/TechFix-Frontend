import { ROUTES } from '@/constants/routes';

import { SERVICES_DATA } from './services';

export type MenuItem = {
	label: string;
	href: string | null;
	depth: number;
	subItems: (MenuItem & { sub: true })[] | null;
};

export const menuItems: MenuItem[] = [
	{
		label: 'About Us',
		href: ROUTES.ABOUT_US,
		subItems: null,
		depth: 1,
	},
	{
		label: 'Services',
		href: null,
		depth: 1,
		subItems: SERVICES_DATA.map(parentService => ({
			label: parentService.name,
			href: null,
			sub: true,
			depth: 2,
			subItems: parentService.services.map(subService => ({
				label: subService.name,
				href: ROUTES.SERVICES + '/details/' + subService.slug,
				subItems: null,
				sub: true,
				depth: 3,
			})),
		})),
	},

	{
		label: 'Submit Ticket',
		href: ROUTES.SUBMIT_TICKET,
		subItems: null,
		depth: 1,
	},
	{
		label: 'Career',
		href: ROUTES.CAREER,
		subItems: null,
		depth: 1,
	},
	{
		label: 'Blogs',
		href: ROUTES.BLOGS,
		subItems: null,
		depth: 1,
	},
	{
		label: 'Contact',
		href: ROUTES.CONTACT,
		subItems: null,
		depth: 1,
	},
];
