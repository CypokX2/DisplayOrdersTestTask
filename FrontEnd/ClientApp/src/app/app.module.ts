import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { OrderWrapperComponent } from './order-wrapper/order-wrapper.component';
import { OrderOverviewComponent } from './order-wrapper/order-overview/order-overview.component';
import { OrderSummaryComponent } from './order-wrapper/order-summary/order-summary.component';
import { OrderDetailsComponent } from './order-wrapper/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,    
    OrdersPageComponent,
        OrderWrapperComponent,
        OrderOverviewComponent,
        OrderSummaryComponent,
        OrderDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'orders-page', component: OrdersPageComponent },
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
