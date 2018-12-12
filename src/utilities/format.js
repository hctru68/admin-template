import moment from 'moment';

export function formatDateTime(stringDateTime, formatString) {
    if (formatString == null) formatString = 'DD/MM/YYYY HH:mm';
    var dateTime = new Date(stringDateTime);
    dateTime = moment(dateTime).format(formatString);
    return dateTime;
}
