import { API_ROUTES } from '@/constants/api';
import { axiosInstance } from '@/lib/httpLib';
import { PaginatedResponse } from '@/types/api';
import { BlogEntity } from '@/types/models';

type GetBlogsServiceParams = {
	page: number;
	limit: number;
};

export const getBlogsService = async ({ page, limit }: GetBlogsServiceParams) => {
	const query = `?page=${page}&limit=${limit}`;
	const response = await axiosInstance.get<PaginatedResponse<BlogEntity>>(API_ROUTES.BLOGS + query);
	return response.data;
};

export const getBlogById = async ({ id }: { id: number }) => {
	const response = await axiosInstance.get<BlogEntity>(API_ROUTES.BLOGS + '/' + id);
	return response.data;
};
