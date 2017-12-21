import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface IUserLogin {
    // grant_type: string;
    username: string;
    password: string;

}

export interface ITokenApiResponse {
    userName: string;
    role: Array<string>;
    exp: string;
    lastName: string;
    firstName: string;
    isAdmin: boolean;
}

export interface ICategory {
    id: number;
    name: string;
}
