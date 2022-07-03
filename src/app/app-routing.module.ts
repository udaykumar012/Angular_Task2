import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes : Routes=[
    {path:'home', component:HomeComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'manage',loadChildren:()=>import('./manage/manage.module').then(mod => mod.ManageModule)}
    
  ]

@NgModule({
   
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })
export class AppRoutingModule{}
export  const routingcomponents=[HomeComponent]