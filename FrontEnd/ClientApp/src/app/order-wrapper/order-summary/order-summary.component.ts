import { Component, OnInit, Input} from '@angular/core';
import { OrderStatus } from '../../Models/OrderStatus';
import { Decimal } from '../../../../../wwwroot/lib/decimal.js/decimal.min.js';
import { OrderView } from '../Scaffolding/ViewModels/OrderView';
import { getTotalOrderAmount } from '../../Models/OrderDetails';

@Component({
    selector: 'order-summary',
    templateUrl: './order-summary.component.html',
    styleUrls: ['./order-summary.component.css']
})

export class OrderSummaryComponent implements OnInit {
    

    @Input('selectedOrder') selectedOrder: OrderView
    @Input() stubOnFetching: boolean = false;

    constructor( ) { }

    ngOnInit() {
    }    

    get orderStatusEnum() { return OrderStatus; }

    totalAmount() : string {
        if (this.selectedOrder) {
            return getTotalOrderAmount(this.selectedOrder.details);
        }
        else {
            '';
        }
    }
}

