import { API_ROUTES } from '@/constants/api';
import { newsletterFormSchemaType, ticketFormSchemaType } from '@/form-schemas/ticket.schema';
import { axiosInstance } from '@/lib/httpLib';

export const submitEnquiryService = async (data: ticketFormSchemaType) => {
	const response = await axiosInstance.post(API_ROUTES.ENQUIRIES, data);
	return response.data;
};

export const subscribeToNewsletterService = async (data: newsletterFormSchemaType) => {
	const response = await axiosInstance.post(API_ROUTES.NEWSLETTERS, data);
	return response.data;
};
