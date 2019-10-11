import { Component, OnInit, Input } from '@angular/core';
import { Proposal } from '../../Models/Proposal';
import { OrderView } from '../Scaffolding/ViewModels/OrderView';
import { getTotalOrderAmount, getTotalOrderItemsCount, getOrderAveragePrice } from '../../Models/OrderDetails';
import { calcTotalProposalAmount } from '../../Models/Proposal';

@Component({
    selector: 'order-details',
    templateUrl: './order-details.component.html',
    styleUrls: ['./order-details.component.css']
})

export class OrderDetailsComponent implements OnInit {

    @Input('selectedOrder') selectedOrder: OrderView
    @Input() stubOnFetching: boolean = false;

    constructor( ) { }

    ngOnInit() {
    }

    sortProposals(incoming: Proposal[]): Proposal[] {
        return incoming.sort((n1, n2) => {
            return n1.product.productName > n2.product.productName ?
                1
                :
                (n1.product.productName < n2.product.productName ?
                    -1
                    :
                    0);
        });
    }

    totalAmount(): string {
        if (this.selectedOrder) {
            return getTotalOrderAmount(this.selectedOrder.details);
        }
        else {
            return '';
        }
    }

    totalCount(): string {
        if (this.selectedOrder) {
            return String(getTotalOrderItemsCount(this.selectedOrder.details));
        }
        else {
            return '';
        }
    }

    averagePrice(): string {
        if (this.selectedOrder) {
            return String(getOrderAveragePrice(this.selectedOrder.details).toFixed(2));
        }
        else {
            return '';
        }
    }

    proposalAmount(proposal: Proposal): string {
        return calcTotalProposalAmount(proposal);
    }
   
}
