import { Proposal } from "./Proposal";
import { calcTotalProposalAmount } from './Proposal';
import { Decimal } from '../../../../wwwroot/lib/decimal.js/decimal.min.js';


export class OrderDetails {
    public id: number;
    public proposals: Proposal[];
}

export function getTotalOrderAmount(orderDetails: OrderDetails): Decimal {
    return orderDetails.proposals
        .map(p => calcTotalProposalAmount(p))
        .reduce((sum: Decimal, current) => Decimal.add(sum, current), 0);
}

export function getTotalOrderItemsCount(orderDetails: OrderDetails): number {
    return orderDetails.proposals
        .map(p => p.quantity)
        .reduce((sum: number, current) => sum + current, 0);
}

export function getOrderAveragePrice(orderDetails: OrderDetails): Decimal {
    return getTotalOrderAmount(orderDetails) / getTotalOrderItemsCount(orderDetails);
}
