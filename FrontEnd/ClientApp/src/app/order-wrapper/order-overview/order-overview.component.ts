import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OrderStatus } from '../../Models/OrderStatus';

@Component({
    selector: 'order-overview',
    templateUrl: './order-overview.component.html',
    styleUrls: ['./order-overview.component.css']
})

export class OrderOverviewComponent implements OnInit {

    @Output() requestFetchDetails: EventEmitter<number> = new EventEmitter<number>();
    @Input() headers: HeaderView[];

    constructor( ) { }

    ngOnInit() {
    }

    keys = Object.keys;

    get orderStatusEnum() { return OrderStatus; }
    get orderStatusNames() {
        return Object.keys(OrderStatus)
            .filter((x) => Number.isNaN(parseInt(x, 10)))
            .map((key) => {
                return { key, value: OrderStatus[key] };
            });
    }
}

export class HeaderView {

    public id: number;
    public orderName: string;
    public creationMomentString: string;
    public status: OrderStatus;
}
