import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { TopBarComponent } from './main/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NotificationComponent } from './main/notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import { MainComponent } from './main/main.component';
import { UserDetailsComponent } from './history-detail/user-details/user-details.component';
import { StatusTrendComponent } from './history-detail/status-trend/status-trend.component';
import { HistoryFilterComponent } from './history-detail/history-filter/history-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    NotificationComponent,
    HistoryDetailComponent,
    MainComponent,
    UserDetailsComponent,
    StatusTrendComponent,
    HistoryFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
