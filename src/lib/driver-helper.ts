// Wasn't sure on the folder/file naming convention for these classes, seems to be mixed opinions. Some use util instead of lib.

import drivers from '../../data/drivers.json'
import { Driver } from '../models/driver';

export class DriverHelper {
    static getDrivers(): Driver[] {
        return drivers.data;
    }
}