import Head from 'next/head';
import React from 'react';

import { DESCRIPTION, TITLE } from '@/data/seo';

type SeoProps = {
	title: string;
	description?: string;
	ogImage?: string;
};

const Seo = ({ title, description, ogImage }: SeoProps) => {
	const titleContent = `${title} | ${TITLE}`;
	const descriptionContent = description || DESCRIPTION;
	return (
		<Head>
			<title>{titleContent}</title>
			<meta name="description" content={descriptionContent} />
			{ogImage && <meta property="og:image" content={ogImage} />}
			<meta property="og:title" content={titleContent} />
			<meta property="og:description" content={descriptionContent} />
		</Head>
	);
};

export default Seo;
