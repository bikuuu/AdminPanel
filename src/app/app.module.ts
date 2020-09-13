import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {TodoComponent} from './components/todo/todo.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import { DashboardItemComponent } from './components/dashboard/dashboard-item/dashboard-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TodoComponent,
    DashboardComponent,
    DashboardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
