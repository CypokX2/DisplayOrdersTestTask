import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderHeader } from '../Models/OrderHeader';
import { Order } from '../Models/Order';
import { DatePipe } from '@angular/common';
import { OrderStatus } from '../Models/OrderStatus';

export enum Symbols {
    equals = '\u003D',
    notEquals = '!='
}

@Component({
    selector: 'order-wrapper',
    templateUrl: './order-wrapper.component.html',
    styleUrls: ['./order-wrapper.component.css'],
    providers: [DatePipe]
})

export class OrderWrapperComponent implements OnInit {

    keys = Object.keys;

    @Input() apiBaseUrl: string;

    get orderStatusEnum() { return OrderStatus; }
    get orderStatusNames() {
        return Object.keys(OrderStatus)
            .filter((x) => Number.isNaN(parseInt(x, 10)))
            .map((key) => {
                return { key, value: OrderStatus[key] };
            });
    }
    
    public headers: HeaderView[];
    public selectedOrder: Order;
    constructor(
        private _http: HttpClient,
        private _datePipe: DatePipe
    ) { }

    ngOnInit() {
        this._http.get<OrderHeader[]>('http://localhost:5050/' + 'api/orders/brief/').subscribe(result => {

            this.headers = result.map(h => {
                return {
                    id: h.id,
                    orderName: h.orderName,
                    status: h.status,
                    creationMomentString: this._datePipe.transform(h.creationMoment, 'dd.MM.yyyy HH:mm')
                };  
            })
           
        }, error => console.error(error));
    }

    fetchDetails(headerId: number) {
        this._http.get<Order>('http://localhost:5050/' + 'api/orders/details/' + headerId).subscribe(result => {
            this.selectedOrder = result;
        }, error => console.error(error));
    }

   
}

export class HeaderView {

    public id: number;
    public orderName: string;
    public creationMomentString: string;
    public status: OrderStatus;
}
