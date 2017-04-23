import moment from 'moment';

export const getFormValueForKeys = (keys, formRef) => {
    const data = keys.reduce((acc, el) => {
        acc[el] = formRef.elements[el].value
        return acc;
    }, {});
    data.id = Math.ceil(Math.random() * 24);
    return data;
}

export const validateStartEndTimeRange = (start, end) => {
    return start.isBefore(end);
}

export const validateDateRange = ({ selectedDate, worklogList, startTime, endTime }) => {
    const startDate = moment(startTime, 'h:mm');
    const endDate = moment(endTime, 'h:mm');
    if (!validateStartEndTimeRange(startDate, endDate)) {
        throw new Error('start time should be lower than end time');
    }
    const selectedDateWorklogs = worklogList.filter(el => {
        const aDate = new Date(el.date);
        const bDate = new Date(selectedDate);
        return moment(aDate).isSame(bDate, 'day')
    });
    selectedDateWorklogs.forEach(el => {
        const logStartTime = moment(el.startTime);
        const logEndTime = moment(el.endTime);
        if (startDate.isBetween(logStartTime, logEndTime, 'minute', '[]')
            || endDate.isBetween(logStartTime, logEndTime, 'minute', '[]')) {
            throw new Error('worklog note time  should not intersect')
        }
    });

}

export const noop = () => { }