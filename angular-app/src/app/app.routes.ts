import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodolistComponent } from './todolist/todolist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'signup',
        component : SignupComponent
    },
    {
        path : 'todolist',
        component : TodolistComponent
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : '**',
        component : PageNotFoundComponent
    }
    
];
