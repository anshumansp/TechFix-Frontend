import { SERVICES_SLUG } from '@/constants/routes';
import { Service } from '@/types';

export const SERVICES_DATA: Service[] = [
	{
		name: 'Computer Services',
		slug: SERVICES_SLUG.COMPUTER_SERVICE,
		services: [
			{
				name: 'Computer Hardware Repair',
				rating: '4.85/5',
				skills: 1853,
				slug: 'computer-hardware-repair',
				description: `Techfix Solutions provides hardware repair services for the reputed brands like Dell, HP, Lenovo, Acer, and Mac. Apart from this our technicians are well trained to identify and address your computer issues like CPU problems, fan noises, blank screen, charging issues, damage screen, slow computer performance, keyword and touchpad problems, hardware upgrades, etc. `,
			},
			{
				name: 'Software installation and computer re-image',
				rating: '4.85/5',
				skills: 1853,
				slug: 'software-installation-and-computer-re-image',
				description: `Software installation can be a complex process as it needs a good technical knowledge to install a software. Some software is easily available and can be installed without any errors. However, some software can expose your PC to security risks or malware. In such cases, Techfix Solutions ensures a new installation process and reimaging to solve problems with system crashes, errors, and software conflicts. Thus, re-imaging helps to restore and improve your computer performance. `,
			},
			{
				name: 'Data backup and restore',
				rating: '4.85/5',
				skills: 1853,
				slug: 'data-backup-and-restore',
				description: `Techfix Solutions helps businesses with reliable data backup and restore plans. We provide cloud-based storage to store your critical information which can be accessed from anywhere. This will reduce the risk of data loss caused due to various factors like hardware failure, viruses, or natural disasters. `,
			},
			{
				name: 'Computer security and data protection',
				rating: '4.85/5',
				skills: 1853,
				slug: 'computer-security-and-data-protection',
				description: `Techfix Solutions provides security and data protection services to its clients by protecting their privacy. Our services include advanced tools and techniques, designed to minimize the risks associated with malware threats, network security, cyber threats, data breaches, and other security issues. `,
			},
		],
	},
	{
		name: 'Network Support',
		slug: SERVICES_SLUG.NETWORK_SUPPORT,
		services: [
			{
				name: 'Network Deployment',
				rating: '4.85/5',
				skills: 1853,
				slug: 'network-deployment',
				description: `Our experienced team can help you set up your network and provide a complete deployment guidance. We help you with the several decisions that need to be made before setting up a network deployment, including setting up a network service such as LAN (Local Area Network), NTP (Network Time Protocol), and configuring network devices including VLANS, IP addresses etc. Our dedicated engineers are also available 24/7 to solve your network issues. `,
			},
			{
				name: 'Network Troubleshooting',
				rating: '4.85/5',
				skills: 1853,
				slug: 'network-troubleshooting',
				description: `Restarting devices and changing user passwords are only a small part of troubleshooting. It involves a set of protocols, and tools used, to handle a variety of requests from a distributed network.`,
			},
			{
				name: 'Cabling and Installation',
				rating: '4.85/5',
				skills: 1853,
				slug: 'cabling-and-installation',
				description: `Techfix Solutions recognizes the importance of stable connectivity in today's digital age. Thus, we provide a secure cabling and installation solution to home users, startups, or large corporations. If you are not satisfied with your existing setup, our team can help you relocate your device and provide replacement service in case of any damage.  `,
			},
			{
				name: 'Network back-up and disaster recovery',
				rating: '4.85/5',
				skills: 1853,
				slug: 'network-and-back-up-and-disaster-recovery',
				description:
					'Techfix Solutions provides network backup and disaster recovery services that focus on protecting our clients assets. Our network backup includes an automated data backup process that prevents our clients data from any kind error. On the other hand, our disaster recovery solutions include the replication of data or using cloud backup.',
			},
		],
	},
	{
		name: 'Third-party Maintenance',
		slug: SERVICES_SLUG.THRID_PARTY_MAINTENANCE,
		services: [
			{
				name: 'Hardware Support',
				rating: '4.85/5',
				skills: 1853,
				slug: 'hardware-support',
				description: `Techfix Solutions provides high-quality support for all of your hardware requirements with a focus on durability, allowing your company to run smoothly. Our hardware support team addresses problems such as hardware install or repair, printer parts replacement, server replacement,  hard disk failure, updating hardware, etc. `,
			},
			{
				name: 'Software Support',
				rating: '4.85/5',
				skills: 1853,
				slug: 'software-support',
				description: `From software installation to software updates, Techfix Solution provides an array of software support. Our highly skilled software engineers can help you with software updates, patch management, software licensing, and compliance, fixing bugs, etc. We also customize software support depending on our client's requirements.  `,
			},
			{
				name: 'Vendor Support',
				rating: '4.85/5',
				skills: 1853,
				slug: 'verndor-support',
				description: `If your company is looking for extra support for clients, Tech Fix solutions will help you fix the client's issues on your behalf ensuring timely resolution as well as escalating the issues if required. Furthermore, Techfix will also communicate to the client on your behalf acting as the liaison between your business and third party. `,
			},
		],
	},
	{
		name: 'Other Services',
		slug: SERVICES_SLUG.OTHER_SERVICES,
		services: [
			{
				name: 'Office Setup',
				rating: '4.85/5',
				skills: 1853,
				slug: 'office-setup',
				description: `If you need support for the new or existing office set up Techfix will provide you all the necessary resources to fully set up your office. We offer you a diverse range of services at reasonable pricing at one-stop solutions ensuring the effortless and smooth process to set up your office.`,
			},
			{
				name: 'Printer Setup',
				rating: '4.85/5',
				skills: 1853,
				slug: 'printer-setup',
				description: `Tech Fix provides you with a dedicated team of experts to help you with the printer setup procedure, whether it's a new setup or repairing the old one. With our printer setup service, you can focus on your core business while we handle all of your printing needs.`,
			},
			{
				name: 'Tech Field Set Up',
				rating: '4.85/5',
				skills: 1853,
				slug: 'tech-field-setup',
				description: ``,
			},
			{
				name: 'Remote IT support',
				rating: '4.85/5',
				skills: 1853,
				slug: 'remote-it-support',
				description: `Techfix Solution is ready to assist you with all of your IT concerns without the need for an on-site team. Our team will provide support through phone calls, emails, live chat, and remote desktop software to resolve`,
			},
		],
	},
];

export const SERVICE_TYPE_DATA = SERVICES_DATA.map(s => s.services).flat();

export const WHY_BUSINESS_TURN_DATA = [
	{
		title: 'Proof of quality',
		description: 'Interview potential fits for your job, negotiate rates, and only pay for work you approve.',
	},
	{
		title: 'No cost until we fix',
		description: 'Interview potential fits for your job, negotiate rates, and only pay for work you approve.',
	},
	{
		title: 'Safe and secure',
		description: 'Interview potential fits for your job, negotiate rates, and only pay for work you approve.',
	},
];
