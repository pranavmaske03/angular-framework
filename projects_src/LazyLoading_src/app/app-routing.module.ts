import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes :Routes = [
  {path : 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path : 'admin/task', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path : 'staff' ,loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule)}, // Fat arrow syntax
  {path:'',component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }