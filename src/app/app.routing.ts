import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ErrorComponent } from "./components/error/error.component";
import { FilmsComponent } from "./components/films/films.component";
import { FirstComponent } from "./components/first/first.component";
import { HomeComponent } from "./components/home/home.component";
import { NewUserComponent } from "./components/new-user/new-user.component";
import { UserListComponent } from "./components/user-list/user-list.component";

const routes : Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'films/:lang/:duration',component:FilmsComponent},
    {path:'films/:lang',component:FilmsComponent},
    {path:'films',component:FilmsComponent},
    {path:'first',component:FirstComponent},
    {path:'create',component:NewUserComponent},
    {path:'user-list/:page',component:UserListComponent},
    {path:'user-list',component:UserListComponent},
    {path:'**',component:ErrorComponent}
];

export const AppRountingModule : ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
export const AppRoutingProviders : any[] = new Array();
