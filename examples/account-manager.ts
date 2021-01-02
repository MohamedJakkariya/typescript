/** @format */

interface IUser {
	email: string;
	password: string;
	isActive: boolean;
}

interface IAdmin extends IUser {
	adminSince: Date;
}

export type { IUser, IAdmin };
