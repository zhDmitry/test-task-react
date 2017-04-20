import React from 'react'

const WorkLogTable = ({ data = [] }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Start time</th>
                    <th>End time</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((el,i) => (
                        <tr key={i}>
                            <td>{el.date }</td>
                            <td>{el.startTime}</td>
                            <td>{el.endTime}</td>
                            <td>{el.comment}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default WorkLogTable