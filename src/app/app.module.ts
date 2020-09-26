import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {TodoComponent} from './components/todo/todo.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardItemComponent} from './components/dashboard/dashboard-item/dashboard-item.component';
import {ApiComponent} from './components/api/api.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TodoComponent,
    DashboardComponent,
    DashboardItemComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // informacja dla apki, że ma używać ReactiveForm
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
