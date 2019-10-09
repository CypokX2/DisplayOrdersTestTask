import { Component, Inject, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderHeader } from '../Models/OrderHeader';
import { Order } from '../Models/Order';
import { DatePipe } from '@angular/common';
import { OrderStatus } from '../Models/OrderStatus';
import { OrderDetails } from '../Models/OrderDetails';



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

export class HeaderView {

    public id: number;
    public orderName: string;
    public creationMomentString: string;
    public status: OrderStatus;
}
function convertHeader(h: OrderHeader, datePipe:DatePipe) : HeaderView{
    let header: HeaderView= {
        id: h.id,
        orderName: h.orderName,
        status: h.status,
        creationMomentString: datePipe.transform(h.creationMoment, 'dd.MM.yyyy HH:mm')
    };
    return header;
}

export class OrderView {
    public id: number;
    public header: HeaderView;
    public details: OrderDetails;
}

function convertOrder(o: Order, datePipe: DatePipe): OrderView { 
    let headerV: HeaderView = convertHeader(o.header, datePipe);
    let order: OrderView =  {
        id: o.id,
        header: headerV,
        details:o.details
    }
    return order;
}
