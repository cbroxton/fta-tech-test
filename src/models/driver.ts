import { DriverTrace } from "./driver-trace";

export interface Driver {
    driverID: number;
    surname: string;
    forename: string;
    vehicleRegistration: string;
    traces: DriverTrace[];
}