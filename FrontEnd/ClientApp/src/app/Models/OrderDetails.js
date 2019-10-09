"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Proposal_1 = require("./Proposal");
var decimal_min_js_1 = require("../../../../wwwroot/lib/decimal.js/decimal.min.js");
var OrderDetails = /** @class */ (function () {
    function OrderDetails() {
    }
    return OrderDetails;
}());
exports.OrderDetails = OrderDetails;
function getTotalOrderAmount(orderDetails) {
    return orderDetails.proposals
        .map(function (p) { return Proposal_1.calcTotalProposalAmount(p); })
        .reduce(function (sum, current) { return decimal_min_js_1.Decimal.add(sum, current); }, 0);
}
exports.getTotalOrderAmount = getTotalOrderAmount;
function getTotalOrderItemsCount(orderDetails) {
    return orderDetails.proposals
        .map(function (p) { return p.quantity; })
        .reduce(function (sum, current) { return sum + current; }, 0);
}
exports.getTotalOrderItemsCount = getTotalOrderItemsCount;
function getOrderAveragePrice(orderDetails) {
    return getTotalOrderAmount(orderDetails) / getTotalOrderItemsCount(orderDetails);
}
exports.getOrderAveragePrice = getOrderAveragePrice;
//# sourceMappingURL=OrderDetails.js.map