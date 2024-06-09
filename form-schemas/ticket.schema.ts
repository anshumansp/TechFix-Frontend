import { z } from 'zod';

export enum EnquiryType {
	GENERAL = 'general',
	SOFTWARE = 'software',
	HARDWARE = 'hardware',
}

export const ticketFormSchema = z.object({
	fullName: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
	address: z.string().max(100, 'Address must be less than 100 characters'),
	email: z.string().email('Invalid email address'),
	phone: z.string(),
	description: z.string().min(10, 'Description must be at least 10 characters'),
	type: z.nativeEnum(EnquiryType),
});

export type ticketFormSchemaType = z.infer<typeof ticketFormSchema>;

export const newsletterFormSchema = z.object({
	email: z.string().email('Invalid email address'),
});

export type newsletterFormSchemaType = z.infer<typeof newsletterFormSchema>;
