export enum ROUTES {
	HOME = '/',
	ABOUT_US = '/about-us',
	SUBMIT_TICKET = '/submit-ticket',
	CAREER = '/careers',
	SERVICES = '/services',
	CONTACT = '/contact-us',
	PRIVACY_POLICY = '/privacy-policy',
	BLOGS = '/blogs',
}

export enum SERVICES_SLUG {
	COMPUTER_SERVICE = 'computer-service',
	NETWORK_SUPPORT = 'network-support',
	THRID_PARTY_MAINTENANCE = 'third-party-maintenance',
	OTHER_SERVICES = 'other-services',
}

export const getServiceTypeRoute = (serviceTypeName: string) => ROUTES.SERVICES + '/details/' + serviceTypeName;
