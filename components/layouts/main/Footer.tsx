import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import ContactSection from '@/components/common/ContactSection';
import SubscribeButton from '@/components/common/SubscribeButton';
import Icons from '@/components/ui/icons';
import { ROUTES } from '@/constants/routes';
import { copyRightYear } from '@/data/about-us';
import { newsletterFormSchema, newsletterFormSchemaType } from '@/form-schemas/ticket.schema';
import { subscribeToNewsletterService } from '@/services/enquiries.service';

const Footer = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<newsletterFormSchemaType>({
		resolver: zodResolver(newsletterFormSchema),
		defaultValues: {
			email: '',
		},
	});
	const handleFormSubmit = (data: newsletterFormSchemaType) => {
		subscribeToNewsletterService(data)
			.then(() => {
				toast.success('Subscribed to newsletter successfully');
			})
			.catch(err => {
				console.log(err);
				if (err.response.data.code === 'ER_DUP_ENTRY') {
					toast.error('Already subscribed to newsletter');
					return;
				}
				toast.error('Error subscribing to newsletter');
			});
	};
	return (
		<div className="bg-white px-4 ">
			<div className="mx-auto max-w-7xl ">
				<div className="py-12 md:py-24">
					<ContactSection />
				</div>
				<div className="border-neutral-30 flex flex-col justify-between gap-4 border-b pb-12 md:flex-row">
					<div className="text-base font-medium text-neutral-500">
						<Icons.LogoBg />
						<p className="mt-10">Tech Fix Solutions Pvt. Ltd.</p>
						<p>21 Gipps St, Fortitude Valley QLD 4006, Australia</p>
						<a className="text-primary-500" href="mailto:hello@techfixsolutions.com.au">
							hello@techfixsolutions.com.au
						</a>
					</div>
					{/* Input container */}
					<form onSubmit={handleSubmit(handleFormSubmit)} className="w-full max-w-xl">
						<input
							placeholder="Your email here"
							type="email"
							className="mb-8 w-full border-b border-neutral-50 py-4 text-lg outline-none placeholder:text-neutral-50 focus:border-neutral-500"
							{...register('email')}
						/>
						{errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
						<SubscribeButton />
					</form>
				</div>
				<footer className="flex flex-wrap items-center justify-between gap-6 py-12 font-medium text-neutral-500">
					<p>
						© Tech Fix Solutions {copyRightYear}. All rights reserved.{' '}
						<Link href={ROUTES.PRIVACY_POLICY} target="_blank" className="underline underline-offset-4">
							Privacy Policy.
						</Link>
					</p>
					<div className="flex gap-8">
						<Link href={'#'}>LinkedIn</Link>
						<Link href={'#'}>Instagram</Link>
						<Link href={'#'}>WhatsApp</Link>
					</div>
					{/* <Link href={'$'} className="font-light"> */}
					{/* 	Design: Digital Ghumti */}
					{/* </Link> */}
				</footer>
			</div>
		</div>
	);
};

export default Footer;
