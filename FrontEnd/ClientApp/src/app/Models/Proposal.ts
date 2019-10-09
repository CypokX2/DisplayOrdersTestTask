import { Product } from './Product';
import { Decimal } from '../../../../wwwroot/lib/decimal.js/decimal.min.js';

export class Proposal {
    public id: number;
    public product: Product;
    public quantity: number;    
}

export function calcTotalProposalAmount(proposal: Proposal): Decimal {
    return proposal.product.price * proposal.quantity;
}
