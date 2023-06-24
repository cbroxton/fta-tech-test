import { DriverHelper } from "../../lib/driver-helper";
import { Driver } from "../../models/driver";
import DriverActivityDays from "./driver-activity-days/driver-activity-days";

export default function DriverActivity() {
    const drivers: Driver[] = DriverHelper.getDrivers();

    return (
        <div className="flex flex-col gap-4">
            {drivers.map((driver: Driver) => {
                const driverActivityTimes = DriverHelper.getDriverActivityTimes(driver);
                const totalActivityDuration = Object.values(driverActivityTimes).reduce((a, b) => a + b, 0);

                return (
                    <div className="flex gap-x-4 gap-y-2 items-center flex-wrap text-base md:text-lg lg:text-xl" key={driver.driverID}>
                        <h1 className="w-2/12">{`${driver.forename} ${driver.surname}`}</h1>
                        <h1 className="border border-black p-1 rounded-lg bg-amber-300">{driver.vehicleRegistration}</h1>
                        {/* Not the prettiest way to display time breakdown here using the title attribute and json string but serves as a demo */}
                        <h1 className="w-2/12" title={JSON.stringify(driverActivityTimes)}>{totalActivityDuration} activity minutes</h1>
                        <DriverActivityDays traces={driver.traces}></DriverActivityDays>
                    </div>
                )
            })}
        </div>
    )
}