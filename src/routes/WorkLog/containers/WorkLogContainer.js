import React from 'react';
import { connect } from 'react-redux'
import { actions } from '../store/worklog';
import { createSelector } from 'reselect';

import WorkLog from '../components/WorkLog';


class WorkLogContainer extends React.PureComponent {
    render() {
        const { addWorkLog,
            setSelectedMonth,
            removeWorkLog,
            data } = this.props;

        return <WorkLog
            data={data}
            removeWorkLog={removeWorkLog}
            addWorkLog={addWorkLog}
            onMonthSelect={setSelectedMonth} />
    }
}


export const selectList = state => state.worklog.list;
export const selectMonth = state => state.worklog.selectedMonth;

export const filterLogsByMonth = createSelector(selectList, selectMonth, (data, month) => {
    return data.filter(({ date }) => {
        return new Date(date).getMonth() === Number(month);
    })
})

export default connect((state) => {
    return {
        data: filterLogsByMonth(state)
    }
}, actions)(WorkLogContainer)
