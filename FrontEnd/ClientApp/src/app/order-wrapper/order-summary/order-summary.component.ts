import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { OrderStatus } from '../../Models/OrderStatus';
import { OrderView } from '../order-wrapper.component';
import { Decimal } from '../../../../../wwwroot/lib/decimal.js/decimal.min.js';

@Component({
    selector: 'order-summary',
    templateUrl: './order-summary.component.html',
    styleUrls: ['./order-summary.component.css']
})

export class OrderSummaryComponent implements OnInit {
    

    @Input('selectedOrder')  selectedOrder : OrderView

    constructor( ) { }

    ngOnInit() {
    }    

    get orderStatusEnum() { return OrderStatus; }

    calcTotal() : Decimal {
        if (this.selectedOrder) {
            return this.selectedOrder.details.proposals
                .map(p => {
                    return p.product.price * p.quantity;
                })
                .reduce((sum: Decimal, current) => Decimal.add(sum, current), 0);;
        }
        else {
            return NaN;
        }
    }
    stringifyDecimal(dec: Decimal): string {      

        let st = (dec && dec != NaN) ? dec : '';
        return st;
    }
}

