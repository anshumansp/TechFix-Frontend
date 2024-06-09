import axios from 'axios';

import { BASE_BACKEND_URL } from '@/constants/api';

export const axiosInstance = axios.create({
	baseURL: BASE_BACKEND_URL + '/api',
});
