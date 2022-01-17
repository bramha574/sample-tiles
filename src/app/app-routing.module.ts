import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDbComponent } from './create-db/create-db.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: "",component: DashboardComponent},
  {path: "dashboard",component: DashboardComponent},
  {path: "create-db", component: CreateDbComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

