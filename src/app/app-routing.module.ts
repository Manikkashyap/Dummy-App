import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DataTableComponent } from './Platform/Dashboard/Components/data-table/data-table.component';
import { HomeComponent } from './Platform/Dashboard/Components/home/home.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:HomeComponent,
  //   pathMatch:'full'
  // },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'members',
    component:DataTableComponent,
    pathMatch:'full'
  },
  { path: '**',
   redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
