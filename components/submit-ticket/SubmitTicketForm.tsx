import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { EnquiryType, ticketFormSchema, ticketFormSchemaType } from '@/form-schemas/ticket.schema';
import { cn } from '@/lib/utils';
import { submitEnquiryService } from '@/services/enquiries.service';

import Icons from '../ui/icons';
import SendTicketButton from './SendTicketButton';

const enquiryTypes = [
	{
		name: 'General Enquiry',
		description: 'Comprehensive hardware maintenance support services',
		value: EnquiryType.GENERAL,
	},
	{
		name: 'Software Issue',
		description: 'Comprehensive hardware maintenance support services',
		value: EnquiryType.SOFTWARE,
	},
	{
		name: 'Hardware Issue',
		description: 'Comprehensive hardware maintenance support services',
		value: EnquiryType.HARDWARE,
	},
];

const SubmitTicketForm = () => {
	const {
		register,
		setValue,
		watch,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ticketFormSchemaType>({
		resolver: zodResolver(ticketFormSchema),
		defaultValues: {
			type: EnquiryType.GENERAL,
		},
	});

	const selectedEnquiry = watch('type');

	const handleFormSubmit = (data: ticketFormSchemaType) => {
		submitEnquiryService(data)
			.then(() => {
				toast.success('Enquiry submitted successfully', { description: 'We will reachout to you shortly!' });
				reset();
			})
			.catch(err => {
				console.error(err);
				toast.error('Error submitting enquiry');
			});
	};

	return (
		<form
			noValidate
			onSubmit={handleSubmit(handleFormSubmit)}
			className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-10 md:flex-row md:py-12 "
		>
			<div className="relative flex w-full flex-col gap-3 md:max-w-sm">
				{enquiryTypes.map(enquiry => (
					<button
						key={enquiry.value}
						type="button"
						onClick={() => {
							setValue('type', enquiry.value);
						}}
						className={cn(
							'flex justify-between gap-16 p-8 text-left',
							selectedEnquiry === enquiry.value ? 'bg-secondary-500 text-white' : 'bg-neutral-30  text-neutral-1000'
						)}
					>
						<div>
							<h3 className="text-2xl font-bold">{enquiry.name}</h3>
							<p className="mt-4 text-base font-light">{enquiry.description}</p>
						</div>
						<Icons.ArrowTopRight className={selectedEnquiry === enquiry.value ? 'text-white' : 'text-neutral-100'} />
					</button>
				))}
			</div>
			<div className="mt-4 grid h-fit w-full max-w-3xl grid-cols-1 gap-10 text-neutral-900 md:mt-0 xl:grid-cols-2">
				<div>
					<div className="relative z-0 h-fit min-w-[300px]">
						<input
							type="text"
							id="fullname"
							className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-neutral-900 focus:outline-none focus:ring-0 "
							placeholder=" "
							{...register('fullName')}
						/>
						<label
							htmlFor="fullname"
							className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 text-lg text-neutral-100 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-neutral-900 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
						>
							Full Name
						</label>
					</div>

					{errors.fullName && <span className="text-xs text-red-500">{errors.fullName.message}</span>}
				</div>

				<div>
					<div className="relative z-0 h-fit min-w-[300px]">
						<input
							type="text"
							id="address"
							className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-neutral-900 focus:outline-none focus:ring-0 "
							placeholder=" "
							{...register('address')}
						/>
						<label
							htmlFor="address"
							className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 text-lg text-neutral-100 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-neutral-900 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
						>
							Address
						</label>
					</div>
					{errors.address && <span className="text-xs text-red-500">{errors.address.message}</span>}
				</div>

				<div>
					<div className="relative z-0 h-fit min-w-[300px]">
						<input
							type="email"
							id="email"
							className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-neutral-900 focus:outline-none focus:ring-0 "
							placeholder=" "
							{...register('email')}
						/>
						<label
							htmlFor="email"
							className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 text-lg text-neutral-100 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-neutral-900 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
						>
							Email Address
						</label>
					</div>
					{errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
				</div>

				<div className="relative z-0 h-fit min-w-[300px]">
					<input
						type="tel"
						id="phone"
						className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-neutral-900 focus:outline-none focus:ring-0 "
						placeholder=" "
						{...register('phone')}
					/>
					<label
						htmlFor="phone"
						className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 text-lg text-neutral-100 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-neutral-900 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
					>
						Phone Number
					</label>
				</div>

				<div className="xl:col-span-2">
					<div className="relative z-0 h-fit min-w-[300px]">
						<input
							type="text"
							id="enquiry"
							className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-neutral-900 focus:outline-none focus:ring-0 "
							placeholder=" "
							{...register('description')}
						/>
						<label
							htmlFor="enquiry"
							className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 text-lg text-neutral-100 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-neutral-900 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
						>
							Your Enquiry Here
						</label>
					</div>
					{errors.description && <span className="text-xs text-red-500">{errors.description.message}</span>}
				</div>

				<SendTicketButton type="submit" />
			</div>
		</form>
	);
};

export default SubmitTicketForm;
