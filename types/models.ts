export interface User {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	createdAt: string;
	updatedAt: string;
}
export interface BlogEntity {
	id: number;
	title: string;
	description: string;
	content: string;
	thumbnail: string;
	createdAt: string;
	updatedAt: string;
	author: Pick<User, 'id' | 'firstName' | 'lastName'>;
}

export interface CareerEntity {
	id: number;
	title: string;
	techStack: string;
	contractDuration: string;
	location: string;
	description: string;
	roles: string;
	qualifications: string;
}
