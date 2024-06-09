import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { MEDIA_ROUTE } from '@/constants/api';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getMediaUrl = (path: string) => {
	return MEDIA_ROUTE + '/' + path;
};
