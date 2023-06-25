// very basic example of a unit test, testing a class rather than a component to keep it simple. would normally keep tests alongside components etc in Angular but this is the
// jest convention according to the nextjs site.

import { Driver } from "../../src/models/driver";
import { DriverHelper } from "../../src/lib/driver-helper";

describe('DriverHelper', () => {
    describe('filterDrivers', () => {
        it('should return correctly filtered drivers', () => {
            const searchTerm = 'abc';
            const drivers: Driver[] = [
                {
                    driverID: 1,
                    forename: `${searchTerm}dd`,
                    surname: 'Smith',
                    traces: [],
                    vehicleRegistration: 'plk'
                },
                {
                    driverID: 2,
                    forename: 'John',
                    surname: `plk${searchTerm}`,
                    traces: [],
                    vehicleRegistration: 'jjj'
                },
                {
                    driverID: 3,
                    forename: 'David',
                    surname: 'Smith',
                    traces: [],
                    vehicleRegistration: `qrs${searchTerm}`
                },
                {
                    driverID: 4,
                    forename: 'Rishi',
                    surname: 'Sunak',
                    traces: [],
                    vehicleRegistration: 'reg'
                }
            ];
            const expectedResult = drivers.filter(driver =>
                `${driver.forename} ${driver.surname}`.toLocaleLowerCase().includes(searchTerm)
                || driver.vehicleRegistration.toLocaleLowerCase().includes(searchTerm)
            );

            const result = DriverHelper.filterDrivers(drivers, searchTerm);

            expect(result).toEqual(expectedResult);
        })
    });
});