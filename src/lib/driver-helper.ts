// Wasn't sure on the folder/file naming convention for these classes, seems to be mixed opinions. Some use util instead of lib.

import drivers from '../../data/drivers.json'
import { Driver } from '../models/driver';
import { DriverTrace } from '../models/driver-trace';

export class DriverHelper {
    static getDrivers(): Driver[] {
        return drivers.data;
    }

    // this solution is a bit naive and relies on the fact that only a weeks worth of data
    // has been included in the json
    static getDriverActivityTimes(driver: Driver): { [activityType: string]: number } {
        return driver.traces.reduce<{ [activityType: string]: number }>((activityTimes, trace) => {
            for (const activity of trace.activity) {
                if (activityTimes[activity.type]) {
                    activityTimes[activity.type] += activity.duration;
                } else {
                    activityTimes[activity.type] = activity.duration;
                }
            }

            return activityTimes;
        }, {})
    }

    static getTraceDaysWithActivities(traces: DriverTrace[]): { [day: number]: boolean } {
        const days: { [day: number]: boolean } = {};

        for (const trace of traces) {
            const timestamp = Date.parse(trace.date);
            if (!isNaN(timestamp)) {
                const traceDate = new Date(timestamp);
                days[traceDate.getDay()] = true;
            }
        }

        return days;
    }
}