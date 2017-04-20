import React from 'react';
import { connect } from 'react-redux'
import data from '../../../../db.json'

import WorkLog from '../components/WorkLog';

const fetchWorkLogs = ({ startTime, endTime }: { endTime: Date }) => {
    // const data = require('../../../../db.json');
    return Promise.resolve(data);
}


class WorkLogContainer extends React.PureComponent {
    state = {

    }
    componentDidMount() {
        this.setState({
            isLoading: true
        })
        fetchWorkLogs({}).then(el => {
            console.log('data', el);
            this.setState({
                isLoading: false,
                data: el
            })
        })
    }

    render() {
        return <WorkLog isLoading={this.state.isLoading} data={this.state.data} onMonthSelect={(v) => { console.log(v) }} />
    }
}



export default connect()(WorkLogContainer)
