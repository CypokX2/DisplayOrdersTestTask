import { OrderStatus } from "../../../Models/OrderStatus";
import { OrderHeader } from "../../../Models/OrderHeader";
import { DatePipe } from "@angular/common";

export class HeaderView {

    public id: number;
    public orderName: string;
    public creationMomentString: string;
    public status: OrderStatus;
}

export function convertHeader(h: OrderHeader, datePipe: DatePipe): HeaderView {
    let header: HeaderView = {
        id: h.id,
        orderName: h.orderName,
        status: h.status,
        creationMomentString: datePipe.transform(h.creationMoment, 'dd.MM.yyyy HH:mm')
    };
    return header;
}
