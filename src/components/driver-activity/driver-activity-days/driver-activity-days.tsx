import { DriverHelper } from "../../../lib/driver-helper";
import { DriverTrace } from "../../../models/driver-trace";

export default function DriverActivityDays({ traces }: { traces: DriverTrace[] }) {
    const traceDaysWithActivities: { [day: number]: boolean } = DriverHelper.getTraceDaysWithActivities(traces);
    const dayNames: string[] = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
    ];
    const dayNumbers: number[] = [
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ];

    return (
        <div className="grid grid-cols-7 gap-2">
            {dayNames.map((dayName: string) => (
                <span key={dayName} className="text-sm">{dayName}</span>
            ))}
            {dayNumbers.map((dayNumber: number) => (
                <span key={dayNumber} className={`h-4 w-4 border border-black ${traceDaysWithActivities[dayNumber] && 'bg-green-950'}`}></span>
            ))}
        </div>
    );
}