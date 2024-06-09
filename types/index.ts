import { SERVICES_SLUG } from '@/constants/routes';

export type ServiceType = {
	name: string;
	rating: string;
	skills: number;
	slug: string;
	description: string;
};

export type Service = {
	name: string;
	slug: SERVICES_SLUG;
	services: ServiceType[];
};
