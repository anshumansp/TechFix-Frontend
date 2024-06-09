import React from 'react';

import Seo from '@/components/common/Seo';
import SubmitTicketForm from '@/components/submit-ticket/SubmitTicketForm';

const SubmitTicketPage = () => {
	return (
		<div className="bg-neutral-10 p-4">
			<Seo title="Submit a ticket" />
			<div className="py-10 md:py-24">
				<div className="submit-ticket-techy-clip mx-auto max-w-4xl p-4 leading-loose md:bg-white md:p-28">
					<h1 className="mx-auto text-center text-3xl font-semibold md:text-7xl">
						Let us &nbsp;
						<span className="relative -ml-3 p-2 pt-4 text-white">
							<span className="relative z-10  text-white">solve</span>
							<svg
								viewBox="0 0 171 71"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="absolute left-0 top-0 z-0 size-full"
							>
								<path d="M0.5 56.3673V0.792969H166.209L170.5 6.03868V70.793H12.7116L0.5 56.3673Z" fill="#00C4CC" />
							</svg>
						</span>{' '}
						<br />
						your tech hiccups
					</h1>
				</div>
			</div>
			<SubmitTicketForm />
		</div>
	);
};

export default SubmitTicketPage;
