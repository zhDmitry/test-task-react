import React from 'react';
import { connect } from 'react-redux'

import { actions } from '../store/worklog';
import WorkLog from '../components/WorkLog';


class WorkLogContainer extends React.PureComponent {
    render() {
        return <WorkLog
            onMonthSelect={(v) => { console.log(v) }} />
    }
}



const filterLogsByMonth = (data, month) => {

}

export default connect(

)(WorkLogContainer)
