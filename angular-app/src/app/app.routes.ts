import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodolistComponent } from './todolist/todolist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { TdformComponent } from './tdform/tdform.component';

export const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'tdform',
        component : TdformComponent
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
        path : "profile",
        component : ProfileComponent,
        data : {name : 'spiduuu'}
    },
    {
        path : "user/:id/:name",
        component : UserComponent
    },
    {
        path : '**',
        component : PageNotFoundComponent
    }
    
];
