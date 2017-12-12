import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface IUserLogin {
    grant_type: string;
    username: string;
    password: string;

}

export interface ITokenApiResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    userName: string;
    expires: any;
}
