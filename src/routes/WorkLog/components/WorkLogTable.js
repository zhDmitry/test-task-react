import React from 'react'
import moment from 'moment';

const WorkLogTable = ({ data, removeWorkLog }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Start time</th>
                    <th>End time</th>
                    <th>Comment</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((el, i) => (
                        <tr key={i}>
                            <td>{moment(el.date).format('LL')}</td>
                            <td>{moment(el.startTime).format('h:mm a')}</td>
                            <td>{moment(el.endTime).format('h:mm a')}</td>
                            <td>{el.comment}</td>
                            <td>
                                <button type="button" className="btn  btn-danger" onClick={() => {
                                    if (confirm('Are you sure? ')) {
                                        removeWorkLog(el.id)

                                    }
                                }} >Remove </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default WorkLogTable