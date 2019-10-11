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
          { path: 'orders/:routedApiBaseUrl/:routedPendData', component: OrderWrapperComponent },
          { path: '**', redirectTo: '/orders/http:%2F%2Flocalhost:5050%2F/2000' }
          
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
