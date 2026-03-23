import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodolistComponent } from './todolist/todolist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { TdformComponent } from './tdform/tdform.component';
import { PassdataComponent } from './passdata/passdata.component';
import { ReuseComponent } from './reuse/reuse.component';
import { RestapicallComponent } from './restapicall/restapicall.component';
import { MoviesComponent } from './movies/movies.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';
import { dashboardChildGuard } from './guards/dashboard-child.guard';
import { OrdersComponent } from './orders/orders.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { unsavedGuard } from './guards/unsaved.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent,
        canActivate : [guestGuard]
    },
    {
        path : 'callapi',
        component : RestapicallComponent
    },
    {
        path : 'movies',
        component : MoviesComponent
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
        path : '',
        component : HomeComponent
    },
    // {
    //     path : "profile",
    //     component : ProfileComponent,
    //     data : {name : 'spiduuu'}
    // },
    {
        path : "user/:id/:name",
        component : UserComponent
    },
    {
        path : "datapass",
        component : PassdataComponent
    },
    {
        path : "example",
        component : ReuseComponent
    },
    {
        path : "admin",
        loadComponent : ()=>import('./admin/admin.component').then((c)=>c.AdminComponent),
        canMatch : [adminGuard]
    },
    {
        path : "dashboard",
        component : DashboardComponent,
        canActivate : [authGuard],
        canActivateChild : [dashboardChildGuard],
        children : [
            {
                path : "profile",
                component : ProfileComponent,
                data : {name : 'spiduuu'}
            },
            {
                path : "orders",
                component : OrdersComponent
            },
            
        ]
    },
    {
        path : "edit-profile",
        component : EditProfileComponent,
        canDeactivate : [unsavedGuard]
    },
    {
        path : '**',
        component : PageNotFoundComponent
    }
    
];
