import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ROUTES } from '@/constants/routes';
import { humanizeDate } from '@/lib/date';
import { getMediaUrl } from '@/lib/utils';
import { BlogEntity } from '@/types/models';

import Icons from '../ui/icons';

type BlogCardProps = {
	blog: BlogEntity;
};

const BlogCard = ({ blog }: BlogCardProps) => {
	return (
		<div className="flex flex-col gap-6">
			<Link href={`${ROUTES.BLOGS}/${blog.id}`}>
				<Image
					height={240}
					width={516}
					className="relative object-cover"
					src={getMediaUrl(blog.thumbnail)}
					alt={blog.title}
				/>
			</Link>
			<div className="flex h-32 flex-col items-start justify-start gap-2">
				<div className="text-secondary-700 flex items-center gap-1 text-sm font-medium leading-snug">
					<span rel="author">
						{blog.author.firstName} {blog.author.lastName}
					</span>{' '}
					• <time> {humanizeDate(blog.createdAt)}</time>
				</div>
				<div className="flex w-full items-center justify-between  gap-3 text-neutral-900">
					<h2 className="line-clamp-1 text-2xl font-bold">
						<Link href={`${ROUTES.BLOGS}/${blog.id}`}>{blog.title}</Link>
					</h2>
					<Icons.ArrowUpRight className="size-3" />
				</div>
				<p className="line-clamp-2 text-lg font-normal leading-7 text-neutral-600">{blog.description}</p>
			</div>
		</div>
	);
};

export default BlogCard;
