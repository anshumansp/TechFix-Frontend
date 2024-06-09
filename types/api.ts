export interface PaginatedResponse<T> {
	page: number;
	pageCount: number;
	count: number;
	total: number;
	data: T[];
}
