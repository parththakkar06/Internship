import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
    {
        path : "home",
        loadComponent : ()=>import('./home/home.component').then((c)=>c.HomeComponent),
        canActivate : [authGuard]
    },
    {
        path : "transactions",
        loadComponent : ()=>import('./transactions/transactions.component').then((c)=>c.TransactionsComponent),
        canActivate : [authGuard]
    },
    {
        path : "login",
        loadComponent : ()=>import('./login/login.component').then((c)=>LoginComponent),
        canActivate : [guestGuard]
    },
    {
        path : "register",
        loadComponent : ()=>import('./register/register.component').then((c)=>RegisterComponent),
        canActivate : [guestGuard]
    },
    {
        path : "home/:id",
        loadComponent : ()=>import('./home/home.component').then((c)=>c.HomeComponent),
        canActivate : [authGuard]
    },
    {
        path : "**",
        component : LoginComponent
    }
];
