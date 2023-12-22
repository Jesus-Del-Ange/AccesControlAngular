import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AuthModule } from "./auth/auth.module";
import { AdminModule } from "./admin/admin.module";

const routes: Routes=[
    {
        path:'auth',
        loadChildren: ()=> import('./auth/auth.module').then( m=> AuthModule)
    },
    {
        path:'admin',
        loadChildren: ()=> import('./admin/admin.module').then( m=> AdminModule)
    },
    // {
    //     path:'404',
    //     component: ErrorPageComponent
    // },
    // {
    //     path:'',
    //     redirectTo:'admin'
    //     ,pathMatch:'full'
    // }
    {
        path:'**',
        redirectTo:'admin'//poner el 404 en vez de admin
    },
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}