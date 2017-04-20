import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'


import WorkLog from '../components/WorkLog';
import { API_PATH, WORKLOGS } from '../../../constants';

const fetchWorkLogs = ({ startTime, endTime }) => {
    return axios.get(API_PATH + '/' + WORKLOGS).then(el=> el.data);
}


class WorkLogContainer extends React.PureComponent {
    state = {

    }
    componentDidMount() {
        this.setState({
            isLoading: true
        })
        fetchWorkLogs({}).then(el => {
            console.log('data',el);
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
