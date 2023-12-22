import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorsComponent } from './pages/administrators/administrators.component';
import { ResidentsComponent } from './pages/residents/residents.component';
import { GuardsComponent } from './pages/guards/guards.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminRegistrationFormComponent } from './pages/admin-registration-form/admin-registration-form.component';
import { ListResidentsComponent } from './pages/list-residents/list-residents.component';
import { ResidentRegistrationFormComponent } from './pages/resident-registration-form/resident-registration-form.component';

const routes: Routes=[
    {
        path:'',
        component: HomePageComponent,
        children:[
            {
                path:'residents',
                component: ResidentsComponent,
                children:[
                    {
                        path:'',
                        component: ListResidentsComponent
                    },
                    {
                        path:'add',
                        component: ResidentRegistrationFormComponent
                    }
                ]
            },
            {
                path:'administrators',
                component: AdministratorsComponent,
            },
            {
                path:'guards',
                component: GuardsComponent
            },
            {
                path:'**',
                redirectTo: 'residents'
            }
        ]
    },
];

@NgModule({ 
    imports: [RouterModule.forChild(routes),],
    exports: [RouterModule],
})
export class AdminRoutingModule {}