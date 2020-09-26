import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TodoComponent} from './components/todo/todo.component';
import {ApiComponent} from './components/api/api.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'api', component: ApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
