import { Component, Inject, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OrderHeader } from '../Models/OrderHeader';
import { Order } from '../Models/Order';
import { DatePipe, DecimalPipe } from '@angular/common';
import { HeaderView, convertHeader } from './Scaffolding/ViewModels/HeaderView';
import { OrderView, convertOrder } from './Scaffolding/ViewModels/OrderView';
import { ActivatedRoute } from '@angular/router';



@Component({
    selector: 'order-wrapper',
    templateUrl: './order-wrapper.component.html',
    styleUrls: ['./order-wrapper.component.css'],
    providers: [DatePipe]
})

export class OrderWrapperComponent implements OnInit {
   
    @Input() apiBaseUrl: string = 'http://localhost:5050/';
    @Input() pendData: number = 2000;

    private routedApiBaseUrl: string;
    private routedPendData: number;
    
    headers: HeaderView[];
    selectedOrder: OrderView;

    private sub: any;
    constructor(
        private _http: HttpClient,
        private _datePipe: DatePipe,
        private route: ActivatedRoute
    ) { }

    loadingHeaders: boolean = false;
    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.routedApiBaseUrl = params['routedApiBaseUrl'];
            this.routedPendData = +params['routedPendData'];

            if (this.routedApiBaseUrl)
                this.apiBaseUrl = this.routedApiBaseUrl;

            if (this.routedPendData)
                this.pendData = this.routedPendData;
        });

        this.loadingHeaders = true;

        this._http.get<OrderHeader[]>
            (this.apiBaseUrl + 'api/orders/brief/')
            .subscribe(async result => {

                await new Promise(resolve => setTimeout(resolve, this.pendData));

                this.headers = result.map(h => {
                    return convertHeader(h, this._datePipe);

                });
                this.loadingHeaders = false;

            }, error => console.error(error));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    
    fetchingDetails: boolean = false;
    fetchDetails(headerId: number) {

        this.fetchingDetails = true;

        this._http.get<Order>
            (this.apiBaseUrl + 'api/orders/details/' + headerId)
            .subscribe(async result => {

                await new Promise(resolve => setTimeout(resolve, this.pendData));

                let convertedOrder = convertOrder(result, this._datePipe);
                this.selectedOrder = convertedOrder;
                this.fetchingDetails = false;

            }, error => console.error(error));
       
    }

   
}
