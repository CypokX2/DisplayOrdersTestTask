import { Component, Inject, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderHeader } from '../Models/OrderHeader';
import { Order } from '../Models/Order';
import { DatePipe, DecimalPipe } from '@angular/common';
import { HeaderView, convertHeader } from './Scaffolding/ViewModels/HeaderView';
import { OrderView, convertOrder } from './Scaffolding/ViewModels/OrderView';



@Component({
    selector: 'order-wrapper',
    templateUrl: './order-wrapper.component.html',
    styleUrls: ['./order-wrapper.component.css'],
    providers: [DatePipe]
})

export class OrderWrapperComponent implements OnInit {
   
    @Input() apiBaseUrl: string;
    
    
    headers: HeaderView[];
    selectedOrder: OrderView;
    constructor(
        private _http: HttpClient,
        private _datePipe: DatePipe
    ) { }

    ngOnInit() {
        this._http.get<OrderHeader[]>('http://localhost:5050/' + 'api/orders/brief/').subscribe(result => {

            this.headers = result.map(h => {
                return convertHeader(h, this._datePipe);  
            })
           
        }, error => console.error(error));
    }

    fetchDetails(headerId: number) {
        this._http.get<Order>('http://localhost:5050/' + 'api/orders/details/' + headerId).subscribe(result => {
            let convertedOrder = convertOrder(result, this._datePipe);
            this.selectedOrder = convertedOrder;
        }, error => console.error(error));
    }

   
}
