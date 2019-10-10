import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { OrderWrapperComponent } from './order-wrapper/order-wrapper.component';
import { OrderOverviewComponent } from './order-wrapper/order-overview/order-overview.component';
import { OrderSummaryComponent } from './order-wrapper/order-summary/order-summary.component';
import { OrderDetailsComponent } from './order-wrapper/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
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
          { path: '', redirectTo: '/orders', pathMatch: 'full' },
          { path: '**', redirectTo: '/orders' },
          { path: 'orders', component: OrderWrapperComponent },
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
