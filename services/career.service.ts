import { API_ROUTES } from '@/constants/api';
import { axiosInstance } from '@/lib/httpLib';
import { PaginatedResponse } from '@/types/api';
import { CareerEntity } from '@/types/models';

type GetCareerServiceParams = {
	page?: number;
	limit?: number;
};

export const getCareersService = async (params?: GetCareerServiceParams) => {
	if (params) {
		const { page, limit } = params;
		const query = `?page=${page}&limit=${limit}`;
		const response = await axiosInstance.get<PaginatedResponse<CareerEntity>>(API_ROUTES.CAREERS + query);
		return response.data;
	} else {
		const response = await axiosInstance.get<CareerEntity[]>(API_ROUTES.CAREERS);
		return response.data;
	}
};

export const getCareerById = async ({ id }: { id: number }) => {
	const response = await axiosInstance.get<CareerEntity>(API_ROUTES.CAREERS + '/' + id);
	return response.data;
};
