import { InferGetServerSidePropsType } from 'next';
import React, { useEffect } from 'react';

import BlogCard from '@/components/blog/BlogCard';
import Seo from '@/components/common/Seo';
import usePageConfiguration from '@/hooks/usePageConfiguration';
import { getBlogsService } from '@/services/blogs.service';

export const getServerSideProps = async () => {
	const blogs = await getBlogsService({ page: 1, limit: 6 });
	console.log(blogs);
	return {
		props: {
			blogs,
		},
	};
};

const BlogsPage = ({ blogs }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { setNavTitle } = usePageConfiguration();

	useEffect(() => {
		setNavTitle(`/Blogs`);
		return () => setNavTitle(null);
	}, [setNavTitle]);

	return (
		<div className="bg-neutral-20 py-16">
			<Seo title="Blogs" />
			<div className="mx-auto max-w-5xl px-4 lg:px-0">
				<h1 className="text-4xl font-bold text-neutral-900">All blog posts</h1>
				<div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
					{blogs.data.map(blog => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
			</div>
		</div>
	);
};

export default BlogsPage;
