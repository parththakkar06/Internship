import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path : "home",
        loadComponent : ()=>import('./home/home.component').then((c)=>c.HomeComponent)
    },
    {
        path : "transactions",
        loadComponent : ()=>import('./transactions/transactions.component').then((c)=>c.TransactionsComponent)
    },
    {
        path : "login",
        loadComponent : ()=>import('./login/login.component').then((c)=>LoginComponent)
    },
    {
        path : "register",
        loadComponent : ()=>import('./register/register.component').then((c)=>RegisterComponent)
    }
];
