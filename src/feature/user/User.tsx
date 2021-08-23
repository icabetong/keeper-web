import { DepartmentCore } from "../department/Department";

export enum Permission {
    READ = 1,
    WRITE = 2,
    DELETE = 4,
    AUDIT = 8,
    MANAGE_USERS = 16,
    ADMINISTRATIVE = 32
}

export const hasPermission = (user: User, permission: Permission): boolean => {
    return (user.permissions & permission) === permission;
}

export type User = {
    userId: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    imageUrl?: string,
    permissions: number,
    position?: string,
    department?: DepartmentCore
}

export type UserCore = {
    userId: string,
    name?: string,
    email?: string,
    imageUrl?: string,
    position?: string
}

export class UserRepository {

}