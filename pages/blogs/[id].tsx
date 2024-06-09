import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import React from 'react';

import Seo from '@/components/common/Seo';
import { humanizeDate } from '@/lib/date';
import { getMediaUrl } from '@/lib/utils';
import { getBlogById } from '@/services/blogs.service';

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
	const blog = await getBlogById({ id: parseInt(params?.id as string) });
	return {
		props: {
			blog,
		},
	};
};

const BlogDetailPage = ({ blog }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<div className="bg-neutral-10  p-4 lg:p-0">
			<Seo title={blog.title} description={blog.description} />
			<div className="mx-auto max-w-5xl">
				<div className="py-20 ">
					<h1 className="text-center text-4xl font-bold text-neutral-900 md:text-7xl">{blog.title}</h1>

					<div className="text-secondary-700 mx-auto mt-5 flex w-fit items-center gap-1 text-sm font-medium leading-snug">
						<time> {humanizeDate(blog.createdAt)}</time> •
						<span rel="author">
							{blog.author.firstName} {blog.author.lastName}
						</span>
					</div>
				</div>
				<div className="relative h-[580px] w-full">
					<Image src={getMediaUrl(blog.thumbnail)} alt={blog.title} fill={true} className="rounded-lg object-cover" />
				</div>
				<article className="prose mx-auto mt-10">
					<div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
				</article>
			</div>
		</div>
	);
};

export default BlogDetailPage;
