"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Proposal = /** @class */ (function () {
    function Proposal() {
    }
    return Proposal;
}());
exports.Proposal = Proposal;
function calcTotalProposalAmount(proposal) {
    return proposal.product.price * proposal.quantity;
}
exports.calcTotalProposalAmount = calcTotalProposalAmount;
//# sourceMappingURL=Proposal.js.map