import {OrderStatus} from './OrderStatus'

export class OrderHeader {

    public id: number;
    public orderName: string;
    public creationMoment: Date;
    public status: OrderStatus;
}


