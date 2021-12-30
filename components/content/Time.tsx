import { FC } from 'react';
import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

type TimeProps = {
    dateTime: string, // yyyy-mm-dd
    dateFormat?: {
        type?: 'absolute'|'relative', // default = absolute
        options?: string|any // string for absolute format - doc: https://date-fns.org/v2.3.0/docs/format (default 'd MMMM yyyy') | options for relative format - doc: https://date-fns.org/v2.3.0/docs/formatDistanceToNow
    }
};

const Time:FC<TimeProps> = ({ dateTime, dateFormat }) => {
    // overwrite default format if necessary
    const _format = Object.assign({ type: 'absolute', options: 'd MMMM yyyy' }, dateFormat);

    // generate date object
    const date:Date = parseISO(dateTime);
    const _isoDate:string = date.toISOString();
    const humanReadableDate:string = (_format.type === 'absolute')
        ? format(date, _format.options, { locale: fr })
        : formatDistanceToNow(date, { ..._format.options, locale: fr });

    return (
        <time dateTime={ _isoDate }>{ humanReadableDate }</time>
    )
}

export default Time;