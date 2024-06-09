import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
	{
		question: 'Who we are?',
		answer: `
							Lorem ipsum dolor sit amet consectetur. Vel cursus velit congue et ultricies amet lectus. Urna elementum
							viverra cum in. Molestie sed mauris ipsum arcu sit congue rutrum quam urna. Tristique et ut adipiscing vel
							molestie nunc purus non dui.
						`,
	},

	{
		question: 'Do you have pickup and drop service?',
		answer: `
							Lorem ipsum dolor sit amet consectetur. Vel cursus velit congue et ultricies amet lectus. Urna elementum
							viverra cum in. Molestie sed mauris ipsum arcu sit congue rutrum quam urna. Tristique et ut adipiscing vel
							molestie nunc purus non dui.
						`,
	},
	{
		question: 'What services do you provide?',
		answer: `
							Lorem ipsum dolor sit amet consectetur. Vel cursus velit congue et ultricies amet lectus. Urna elementum
							viverra cum in. Molestie sed mauris ipsum arcu sit congue rutrum quam urna. Tristique et ut adipiscing vel
							molestie nunc purus non dui.
						`,
	},
];

const FaqSection = () => {
	return (
		<div className="w-full bg-white px-4 py-10 md:py-24">
			<div className="mx-auto max-w-4xl">
				<div className="max-w-md">
					<h2 className="font-heading text-primary-500 text-sm font-bold uppercase md:text-2xl">Faq</h2>
					<h3 className="text-secondary-500 mt-4 text-2xl font-bold md:mt-10 md:text-4xl">
						All About Tech Fix Solutions
					</h3>
				</div>
				<Accordion type="single" collapsible className="text-secondary-900 mt-7">
					{faqs.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger className="py-7 text-xl font-bold data-[state=closed]:text-neutral-100 md:text-2xl">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-sm text-neutral-500 md:text-lg">{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>

				<div className="mt-12 max-w-md">
					<h3 className="text-secondary-500 mt-4 text-2xl font-bold md:mt-10 md:text-4xl">Services</h3>
				</div>

				<Accordion type="single" collapsible className="text-secondary-900 mt-7">
					{faqs.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger className="py-7 text-xl font-bold data-[state=closed]:text-neutral-100 md:text-2xl">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-sm text-neutral-500 md:text-lg">{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default FaqSection;
