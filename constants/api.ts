export const BASE_BACKEND_URL = process.env.NEXT_PUBLIC_BASE_BACKEND_URL;

export enum API_ROUTES {
	BLOGS = '/blogs',
	CAREERS = '/careers',
	ENQUIRIES = '/enquiries',
	NEWSLETTERS = '/newsletters',
}
export const MEDIA_ROUTE = BASE_BACKEND_URL + '/assets';
