
import { OrderDetails } from "../../../Models/OrderDetails";
import { Order } from "../../../Models/Order";
import { DatePipe } from "@angular/common";
import { HeaderView } from "./HeaderView";
import { convertHeader } from "./HeaderView";

export class OrderView {
    public id: number;
    public header: HeaderView;
    public details: OrderDetails;
}

export function convertOrder(o: Order, datePipe: DatePipe): OrderView {
    let headerV: HeaderView = convertHeader(o.header, datePipe);
    let order: OrderView = {
        id: o.id,
        header: headerV,
        details: o.details
    }
    return order;
}
