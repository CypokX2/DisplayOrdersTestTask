import { OrderHeader } from "./OrderHeader";
import { OrderDetails } from "./OrderDetails";

export class Order {
    public id: number;
    public header: OrderHeader;
    public details: OrderDetails;
}
