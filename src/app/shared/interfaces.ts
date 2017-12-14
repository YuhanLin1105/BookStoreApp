import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface IUserLogin {
    // grant_type: string;
    username: string;
    password: string;

}

export interface ITokenApiResponse {
    unique_name: string;
    role: Array<string>;
    exp: string;

}
